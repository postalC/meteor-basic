/**
 * Meteor Methods JS
 */
Meteor.methods({
  // -- Get Top Five --
  getTopFive: function() {
    var result = Websites.find({}, {
      skip: 0,
      limit: 5,
      sort: {
        voteUp: -1
      }
    }).fetch();
    return result;
  },
  // -- Save WebSite --
  saveWebsite: function(inUrl, inTitle, inDesc) {
    if (!this.userId) { // not logged in
      return;
    } else {
      var newWebSite = {
        title: inTitle,
        url: inUrl,
        description: inDesc,
        voteUp: 1,
        voteDown: 0,
        comments: [],
        createdBy: Meteor.userId(),
        createdOn: new Date()
      };
      var id = Websites.insert(newWebSite);
      console.log("saveWebsite method: got an id " + id);
      return id;
    }
  },
});
