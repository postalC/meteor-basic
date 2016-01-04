/**
 * Meteor Client Chat User Template JS
 */
Template.chat_user.helpers({
  isMyUser: function(userId) {
    if (userId == Meteor.userId()) {
      return true;
    } else {
      return false;
    }
  }
})
