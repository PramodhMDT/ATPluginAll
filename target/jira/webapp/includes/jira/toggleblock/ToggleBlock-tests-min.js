AJS.test.require(["jira.webresources:jira-global"],function(){var e=require("jira/toggleblock/toggle-block"),o=new e;test("ToggleBlock.checkIsPermlink",function(){var e="http://localhost:8090/jira/browse/HSP-1";ok(o.checkIsPermlink(e+"?focusedCommentId=xxx")),ok(o.checkIsPermlink(e+"?focusedWorklogId=xxx")),ok(o.checkIsPermlink(e+"?focusedCommentId=xxx#zzz")),ok(o.checkIsPermlink(e+"?focusedCommentId=10000&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-10000")),ok(!o.checkIsPermlink(e)),ok(!o.checkIsPermlink(e+"?page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-10000"))})});