/**
 * Meteor Client Chat Page Template JS
 */
Template.chat_page.helpers({
  myavatar: function() {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    }).profile.avatar;
  },
  otheruser: function() {
    var chat = Chats.findOne({
      _id: Session.get("chatId")
    });
    if (chat.user1Id != Meteor.userId()) {
      var otherUser = chat.user1Id;
    } else {
      var otherUser = chat.user2Id;
    }
    return Meteor.users.findOne({
      _id: otherUser
    });
  },
  messages: function() {
    var chat = Chats.findOne({
      _id: Session.get("chatId")
    });
    return chat.messages;
  },
  other_user: function() {
    return ""
  },
})

Template.chat_page.events({
  // this event fires when the user sends a message on the chat page
  'submit .js-send-chat': function(event) {
    // stop the form from triggering a page reload
    event.preventDefault();

    Meteor.call("saveMessage", Session.get("chatId"), event.target.chat.value, function(err, chat) {
      if (err) { // error
        console.log("ERROR: saveMessage, " + err);
      } else {
        if (chat) { // ok - we have a chat to use
          // reset the form
          event.target.chat.value = "";
        } else {
          console.log("ERROR: saveMessage, chat is undefined.");
        }
      }
    });
  }
})
