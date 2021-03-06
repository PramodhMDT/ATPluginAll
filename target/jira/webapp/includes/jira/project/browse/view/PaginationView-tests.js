AJS.test.require("jira.webresources:browseprojects", function () {
    require(["jira/project/browse/paginationview", 'jquery'], function (PaginationView, $) {
        module("PaginationView", {
            setup: function setup() {
                var $markup = $('<ol class="aui-nav aui-nav-pagination">' + '    <li class="aui-nav-previous"><a href="" data-page="1">Prev</a></li>' + '</ol>');
                this.view = new PaginationView({
                    el: $markup,
                    collection: {
                        getPage: sinon.stub(),
                        on: sinon.stub(),
                        off: sinon.stub(),
                        state: {
                            firstPage: 1,
                            lastPage: 20,
                            currentPage: 1
                        },
                        Events: []
                    },
                    model: {
                        getQueryParams: sinon.stub().returns(""),
                        on: sinon.stub(),
                        off: sinon.stub()
                    }
                });
                this.view.bindUIElements();
            }
        });

        test('Should change page and trigger event on page click.', function () {
            var pageChangeHandler = sinon.spy();
            this.view.on('navigate', pageChangeHandler);
            $(this.view.ui.page[0]).click();

            sinon.assert.calledOnce(pageChangeHandler);
            sinon.assert.calledWith(pageChangeHandler, 1);
            sinon.assert.calledWith(this.view.collection.getPage, 1);
        });

        test('First page should be calculated correctly', function () {
            this.view.collection.state.currentPage = 1;
            var result = this.view.serializeData();
            equal(result.firstPage, 1);

            this.view.collection.state.currentPage = 6;
            result = this.view.serializeData();
            equal(result.firstPage, 1);

            this.view.collection.state.currentPage = 7;
            result = this.view.serializeData();
            equal(result.firstPage, 2);

            this.view.collection.state.currentPage = 10;
            result = this.view.serializeData();
            equal(result.firstPage, 5);
        });

        test('Last page should be calculated correctly', function () {
            this.view.collection.state.currentPage = 20;
            var result = this.view.serializeData();
            equal(result.lastPage, 20);

            this.view.collection.state.currentPage = 15;
            result = this.view.serializeData();
            equal(result.lastPage, 20);

            this.view.collection.state.currentPage = 14;
            result = this.view.serializeData();
            equal(result.lastPage, 19);

            this.view.collection.state.currentPage = 10;
            result = this.view.serializeData();
            equal(result.lastPage, 15);
        });
    });
});