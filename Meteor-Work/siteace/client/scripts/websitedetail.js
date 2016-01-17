// -- helper function for website details --
Template.websitedetail.helpers({
  website: function() {
    getWebSite(Session.get("website_id"));
    return Session.get("resultDetails");
  },
  username: function(user_id) {
    if (user_id == "system") {
      return "System";
    } else {
      getUsername(user_id);
      return Session.get("resultDetailsOwnerName");
    }
  },
  commentuser: function(user_id) {
    user = Meteor.users.findOne({
      _id: user_id
    });
    if (user && user.username) {
      return user.username;
    }
    return;
  },
});

// -- event function for websites details  --
Template.websitedetail.events({
  "submit .js-comment-save": function(event) {
    // stop the form from triggering a page reload
    event.preventDefault();
    // here is an example of how to get the url out of the form:
    var title = event.target.title.value;
    var details = event.target.details.value;
    var websideId = Session.get("website_id");
    // -- Save WebSite --
    Meteor.call("saveComment", title, details, websideId,
      function(err, saved) {
        if (err) { // error
          console.log("[ERROR]: saveComment, " + err);
        } else {
          if (saved) { // ok - we have comment saved --
            // reset the form
            event.target.title.value = "";
            event.target.details.value = "";
            getWebSite(websideId);
          } else {
            console.log("[ERROR]: saveComment, comment not saved.");
          }
        }
      });
  },
})
