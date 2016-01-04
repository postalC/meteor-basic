/**
 * Meteor Client Chat message Template JS
 */
Template.chat_message.helpers({
  timeStamp: function() {
    return new Date();
  }
})
