// -- helper function for website search result --
Template.searchlist.helpers({
  websearch: function() {
    return Session.get("resultSearch");
  },
});
