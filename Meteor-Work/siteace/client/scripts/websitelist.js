// -- helper function for websites lists --
Template.websitelist.helpers({
  websites: function() {
    return Session.get("resultAll");
    // return Websites.find({}, {
    //   limit: 5,
    //   sort: {
    //     voteUp: -1
    //   }
    // });
  },
});


Meteor.call("getAll",
  function(err, result) {
    if (err) { // error
      console.log("[ERROR]: getAll, " + err);
    } else {
      if (result) {
        Session.set("resultAll", result);
      } else {
        console.log("[ERROR]: getAll not found.");
      }
    }
  });
