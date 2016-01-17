// -- users data --
Meteor.publish("usersData", function() {
  if (this.userId) {
    return Meteor.users.find({}, {
      fields: {
        username: 1,
        _id: -1
      }
    });
  }
});
