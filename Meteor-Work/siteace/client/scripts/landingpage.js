// -- helper function for websites lists - top 5 - in landing_page --
Template.landingpage.helpers({
  topfive: function() {
    return Session.get("resultTopFive");
  }
});

Meteor.call("getTopFive",
  function(err, result) {
    if (err) { // error
      console.log("[ERROR]: getTopFive, " + err);
    } else {
      if (result) { 
        Session.set("resultTopFive", result);
      } else {
        console.log("[ERROR]: getTopFive not found.");
      }
    }
  });
