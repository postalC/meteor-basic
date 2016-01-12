// -- Methods JS --

// -- Get Top Five --
getTopFive = function () {
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
}

// -- Get All --
getAll = function () {
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
}
