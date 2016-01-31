// -- helper function for user login --
Template.navbar.helpers({
  adminUser: function() {
    user = Meteor.users.findOne({
      roles: {
        $in: ["blogAdmin"]
      }
    });
    if (user) {
      return true;
    }
    return false;
  },
});
