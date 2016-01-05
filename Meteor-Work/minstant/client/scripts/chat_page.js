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
    // see if we can find a chat object in the database
    // to which we'll add the message
    var chat = Chats.findOne({
      _id: Session.get("chatId")
    });
    if (chat) { // ok - we have a chat to use
      var msgs = chat.messages; // pull the messages property
      if (!msgs) { // no messages yet, create a new array
        msgs = [];
      }
      // is a good idea to insert data straight from the form
      // (i.e. the user) into the database?? certainly not.
      // push adds the message to the end of the array
      msgs.push({
        userId: Meteor.userId(),
        text: event.target.chat.value,
        timeStamp: new Date()
      });
      // reset the form
      event.target.chat.value = "";
      // put the messages array onto the chat object
      chat.messages = msgs;
      // update the chat object in the database.
      Chats.update(chat._id, chat);
    }
  }
})
