// -- helper function for user login --
Template.contentpage.helpers({
  loginUser: function() {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  },
  search: function() {
    if (Session.get("searchValue")) {
      return true;
    };
    return false;
  },
  getSearchValue: function() {
    return Session.get("searchValue");
  },
  getSearchResultCount: function() {
    if (Session.get("resultSearch")) {
      return Session.get("resultSearch").length;
    };
    return 0;
  },
});

// -- Event --
Template.contentpage.events({
  "click .js-search-back": function(event) {
    event.preventDefault();
    $("#searchValue")[0].value = "";
    Session.set("searchValue", "");
  }
});
