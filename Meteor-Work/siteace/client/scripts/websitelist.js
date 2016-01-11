// -- helper function for websites lists --
Template.websitelist.helpers({
  websites: function() {
    return Websites.find({});
  },
});
