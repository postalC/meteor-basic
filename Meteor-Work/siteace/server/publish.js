// -- users data --
Meteor.publish("usersData", function() {
  if (this.userId) {
    return Meteor.users.find({}, {
      fields: {
        profile: 1,
        _id: -1
      }
    });
  }
});

// -- websites listing --
Meteor.publish("websitesList", function() {
  return Websites.find();
  // TODO: return all for now
});
