// -- helper function for user login --
Template.contentpage.helpers({
  loginUser: function() {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  },
  search: function() {
    if (Session.get("searchValue")){
      return true;
    };
    return false;
  },
  getSearchValue: function() {
    return Session.get("searchValue");
  },
  getSearchResultCount: function() {
    return Session.get("resultSearch").length;
  },  
});
