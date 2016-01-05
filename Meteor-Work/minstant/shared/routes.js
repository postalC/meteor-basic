// set up the main template the the router will use to build pages
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// specify the top level route, the page users see when they arrive at the site
Router.route('/', function() {
  //console.log("rendering root /");
  var route = this;
  route.render("navbar", {
    to: "header"
  });
  // -- Check if user login --
  if (Meteor.user()) {
    route.render("lobby_page", {
      to: "main"
    });
  } else {
    route.render("landing_page", {
      to: "main"
    });
  }
});

// specify a route that allows the current user to chat to another users
Router.route('/chat/:_id', function() {
  var route = this;
  route.render("navbar", {
    to: "header"
  });

  // -- Check if user login --
  if (Meteor.user()) {
    route.render("loading", {
      to: "main"
    });

    Session.set("chatId", ""); // clear chatId
    // the user they want to chat to has id equal to
    // the id sent in after /chat/...
    Meteor.call("getChat", this.params._id, function(err, chatId) {
      if (err) { // error
        console.log("ERROR: getChat, " + err);
      } else {
        if (chatId) { // looking good, save the id to the session
          //console.log("INFO: getChat, " + chatId);
          Session.set("chatId", chatId);
          route.render("chat_page", {
            to: "main"
          });
        } else {
          console.log("ERROR: getChat, chatId is empty.");
        }
      }
    });
  } else {
    route.render("landing_page", {
      to: "main"
    });
    Session.set("chatId", ""); // clear chatId
  }
});
