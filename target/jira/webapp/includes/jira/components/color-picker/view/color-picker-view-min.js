define("jira/components/color-picker/view/color-picker-view",["jira/marionette-3.1","jira/components/color-picker/view/sample-color-collection-view","jira/components/color-picker/view/color-picker-input-view"],function(e,o,i){"use strict";return e.View.extend({template:JIRA.Templates.Components.ColorPicker.colorPicker,childViewTriggers:{"color:selected":"colorChanged"},regions:{sampleColors:{el:".sample-colors",replaceElement:!0},inputRegion:{el:".color-picker-region",replaceElement:!0}},onRender:function(){this.showChildView("sampleColors",new o({collection:this.options.sampleColors})),this.showChildView("inputRegion",new i({model:this.model}))}})});