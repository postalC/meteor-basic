// -- helper function for user login --
Template.contentpage.helpers({
  loginUser: function() {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  },
});
