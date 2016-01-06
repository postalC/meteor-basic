/**
 * Meteor Client Available User Template JS
 */
Template.available_user.helpers({
  getUsername: function(userId) {
    user = Meteor.users.findOne({
      _id: userId
    });
    return user.profile.username;
  },
})
