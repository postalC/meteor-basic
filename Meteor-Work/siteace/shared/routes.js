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
