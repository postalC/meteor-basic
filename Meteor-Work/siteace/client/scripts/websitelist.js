// -- helper function for websites lists --
Template.websitelist.helpers({
  websites: function() {
    getAll();
    return Session.get("resultAll");
  },
});
