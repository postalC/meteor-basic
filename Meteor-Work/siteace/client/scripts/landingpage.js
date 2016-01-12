// -- helper function for websites lists - top 5 - in landing_page --
Template.landingpage.helpers({
  topfive: function() {
    getTopFive();
    return Session.get("resultTopFive");
  }
});
