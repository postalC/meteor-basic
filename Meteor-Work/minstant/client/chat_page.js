/**
 * Meteor Client Chat Page Template JS
 */
Template.chat_page.helpers({
  chatusers: function() {
    var chat = Chats.findOne({
      _id: Session.get("chatId")
    });
    user1 = Meteor.users.findOne({
      _id: chat.user1Id
    });
    user2 = Meteor.users.findOne({
      _id: chat.user2Id
    });
    return [
      user1,
      user2
    ];
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
        text: event.target.chat.value
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
