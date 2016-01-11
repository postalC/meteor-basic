/**
 * Meteor Client Website Form Template JS
 */

// -- Events --
Template.websiteform.events({
  "click .js-website-modal": function(event) {
    $("#addModal").modal("show");
  },
  "submit .js-website-save": function(event) {
    // stop the form from triggering a page reload
    event.preventDefault();
    // here is an example of how to get the url out of the form:
    var url = event.target.url.value;
    var title = event.target.title.value;
    if (!title) {
      title = url;
    }
    var desc = event.target.description.value;
    console.log(
      "[INFO] URL: " + url);
    console.log("[INFO] Title: " + title);
    console
      .log("[INFO] Description: " + desc);
    // -- Save WebSite --
    Meteor.call("saveWebsite", url, title, desc,
      function(err, saved) {
        if (err) { // error
          console.log("[ERROR]: saveWebsite, " + err);
          //TODO: check duplicate URL
        } else {
          if (saved) { // ok - we have website saved --
            // reset the form
            event.target.url.value = "";
            event.target.title.value = "";
            event.target.description.value = "";
            $("#addModal").modal("hide");
          } else {
            console.log("[ERROR]: saveWebsite, website not saved.");
          }
        }
      });
  }
});
