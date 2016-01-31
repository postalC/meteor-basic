Router.configure({
  layoutTemplate: 'layout'
});

// specify the top level route, the page users see when they arrive at the site
Router.route('/', function() {
  var route = this;
  route.render("navbar", {
    to: "header"
  });
  // -- Check if user login --
  if (Meteor.user()) {
    route.render("home", {
      to: "main"
    });
  } else {
    route.render("landing", {
      to: "main"
    });
  }
});
