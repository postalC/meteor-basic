/**
 * Meteor Methods JS
 */
Meteor.methods({
  // -- Return Chat Instance Id --
  getChat: function(otherUserId) {
    if (this.userId) { // we have a user
      // find a chat that has two users that match current user id
      // and the requested user id
      var chatId;
      var loginUserId = this.userId;
      var filter = {
        $or: [{
          user1Id: loginUserId,
          user2Id: otherUserId
        }, {
          user2Id: loginUserId,
          user1Id: otherUserId
        }]
      };
      var chat = Chats.findOne(filter);
      if (!chat) { // no chat matching the filter - need to insert a new one
        var userName = Meteor.users.findOne({
          _id: Meteor.userId()
        }).profile.username;
        // --System Welcom Message --
        var welcome = "Welcome " + userName + " :grinning:"
        chatId = Chats.insert({
          user1Id: loginUserId,
          user2Id: otherUserId,
          messages: [ {
              userId: 100,
              text: welcome,
              timeStamp: new Date()
          }]
        });

      } else { // there is a chat going already - use that.
        chatId = chat._id;
      }
      //console.log("chatId " + chatId);
      return chatId;
    }
    // -- / this userId check --
    return;
  },
  // -- Save Message --
  saveMessage: function(chatId, input) {
    // see if we can find a chat object in the database
    // to which we'll add the message
    var chat = Chats.findOne({
      _id: chatId
    });
    if (chat) { // ok - we have a chat to use
      var msgs = chat.messages; // pull the messages property
      if (!msgs) { // no messages yet, how that possible? create a new array
        msgs = [];
        // --System Welcom Message --
        var userName = Meteor.users.findOne({
          _id: Meteor.userId()
        }).profile.username;
        msgs.push({
          userId: 100,
          text: "Welcome " + userName + " :smile:",
          timeStamp: new Date()
        });
      }
      // is a good idea to insert data straight from the form
      // (i.e. the user) into the database?? certainly not.
      // push adds the message to the end of the array
      msgs.push({
        userId: Meteor.userId(),
        text: input,
        timeStamp: new Date()
      });
      // put the messages array onto the chat object
      chat.messages = msgs;
      // update the chat object in the database.
      Chats.update(chat._id, chat);

      return chat;
    } // -- / chat id check --
    return;
  },
});
