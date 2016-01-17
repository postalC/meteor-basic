// set up the main template the the router will use to build pages
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// specify the top level route, the page users see when they arrive at the site
Router.route('/', function() {
  //console.log("rendering root /");
  Session.set("searchValue", "");
  var route = this;
  route.render("navbar", {
    to: "header"
  });
  // -- Check if user login --
  if (Meteor.user()) {
    route.render("contentpage", {
      to: "main"
    });
  } else {
    route.render("landingpage", {
      to: "main"
    });
  }
});

// individual website item page
Router.route("/website/:_id", function() {
  Session.set("searchValue", "");
  //console.log("you hit /website  " + this.params._id);
  Session.set("website_id", this.params._id);
  var route = this;
  this.render("navbar", {
    to: "header"
  });
  this.render("websitedetail", {
    to: "main"
  });
  // -- Check if user login --
  if (!Meteor.user()) {
    route.render("landingpage", {
      to: "main"
    });
  }
});
