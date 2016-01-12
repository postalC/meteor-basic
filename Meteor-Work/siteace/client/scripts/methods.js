// -- Methods JS --

// -- Get Top Five --
getTopFive = function() {
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
getAll = function() {
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

// -- Get Particular Website by Id --
getWebSite = function(website_id) {
  Meteor.call("getWebSite", website_id,
    function(err, result) {
      if (err) { // error
        console.log("[ERROR]: getWebSite, " + err);
      } else {
        if (result) {
          Session.set("resultDetails", result);
        } else {
          console.log("[ERROR]: getWebSite not found.");
        }
      }
    });
}

// -- Get User Name by Id --
getUsername = function(user_id) {
    Meteor.call("getUsername", user_id,
      function(err, result) {
        if (err) { // error
          console.log("[ERROR]: getUsername, " + err);
        } else {
          if (result) {
            Session.set("resultDetailsOwnerName", result);
          } else {
            console.log("[ERROR]: getUsername not found.");
          }
        }
      });
  }
  // -- Save Up Vote --
saveUpVote = function(website_id) {
  Meteor.call("saveUpVote", website_id,
    function(err, result) {
      if (err) { // error
        console.log("[ERROR]: saveUpVote, " + err);
      } else {
        if (!result) {
          console.log("[ERROR]: saveUpVote failed.");
        }
      }
    });
}

// -- Save Down Vote --
saveDownVote = function(website_id) {
  Meteor.call("saveDownVote", website_id,
    function(err, result) {
      if (err) { // error
        console.log("[ERROR]: saveDownVote, " + err);
      } else {
        if (!result) {
          console.log("[ERROR]: saveDownVote failed.");
        }
      }
    });
}
