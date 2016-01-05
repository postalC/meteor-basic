/**
 * Meteor Client Chat message Template JS
 */
Template.chat_message.helpers({
  currentDate: function() {
    return new Date();
  },
  loginUser: function(userId) {
    if (userId == Meteor.userId()) {
      return true;
    } else {
      return false;
    }
  },
  getUsername: function(userId) {
    user = Meteor.users.findOne({
      _id: userId
    });
    return user.profile.username;
  },
})
