// -- users data --
Meteor.publish("usersData", function() {
  if (this.userId) {
    return Meteor.users.find({}, {
      fields: {
        profile: 1
      }
    });
  }
});

// -- chat dialog --
Meteor.publish("chatDialog", function() {
  return Chats.find({
    $or: [{
      user1Id: this.userId
    }, {
      user2Id: this.userId
    }]
  });
});
