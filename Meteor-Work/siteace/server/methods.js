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
  // -- Get All --
  getAll: function() {
    if (this.userId) { // we have a user
      var result = Websites.find({}, {
        sort: {
          voteUp: -1
        }
      }).fetch();
      return result;
    }
  },
  // -- Get Recommeded --
  getRecommended: function() {
    if (this.userId) { // we have a user
      // -- Check existing comment --
      var commentb4 = Websites.find({
        "comments.commentedBy": this.userId
      }, {
        fields: {
          "title": 1,
          "description": 1,
          "_id": 0
        }
      }).fetch();

      // -- Search based on existing comment --
      if (commentb4 && commentb4.length >= 1) {
        var searchterm = "coursera";
        commentb4.forEach(function(row) {
          searchterm = searchterm.concat(" ").concat(row.title);
          searchterm = searchterm.concat(" ").concat(row.description);
        });
        //console.log("here " + searchterm);
        return Meteor.call("searchText", searchterm);
      }

      // -- Default return something --
      var result = Websites.find({}, {
        skip: 0,
        limit: 3,
        sort: {
          voteUp: -1
        }
      }).fetch();
      return result;
    }
  },
  // -- Search Text --
  searchText: function(searchValue) {
    // -- if Search Term is empty --
    if (!searchValue) {
      var result = Websites.find({}, {
        sort: {
          voteUp: -1
        }
      }).fetch();
      return result;
    }
    // -- Perform Search from indexing --
    //console.log("Searching for ", searchValue);
    var cursor = Websites.find({
      $text: {
        $search: searchValue
      }
    }, {
      // `fields` is where we can add MongoDB projections. Here we're causing
      // each document published to include a property named `score`, which
      // contains the document's search rank, a numerical value, with more
      // relevant documents having a higher score.
      fields: {
        score: {
          $meta: "textScore"
        }
      },
      // This indicates that we wish the publication to be sorted by the
      // `score` property specified in the projection fields above.
      sort: {
        score: {
          $meta: "textScore"
        }
      }
    }).fetch();
    //console.log("Search Result: ", cursor);
    return cursor;
  },
  // -- Get User Name by Id --
  getUsername: function(id) {
    if (this.userId) { // we have a user
      var result = Meteor.users.findOne({
        _id: id
      });
      return result.username;
    }
  },
  // -- Get Particular Website by Id --
  getWebSite: function(id) {
    if (this.userId) { // we have a user
      var result = Websites.findOne({
        _id: id
      });
      return result;
    }
  },
  // adding new comments
  saveComment: function(inTitle, inDetail, id) {
    if (this.userId) { // we have a user
      var result = Websites.findOne({
        _id: id
      });
      if (result) { // ok - we have the website to use
        var comment = {
          title: inTitle,
          details: inDetail,
          commentedBy: this.userId,
          comentedOn: new Date()
        };
        result.comments.push(comment);
        // update the website object in the database.
        var update = Websites.update({
          _id: id
        }, result);
        return update;
      }
      return;
    }
  },
  // -- Save Up Vote --
  saveUpVote: function(id) {
    if (this.userId) { // we have a user
      var result = Websites.findOne({
        _id: id
      });
      result.voteUp += 1;
      var update = Websites.update({
        _id: id
      }, result);
      return update;
    }
  },
  // -- Save Down Vote --
  saveDownVote: function(id) {
    if (this.userId) { // we have a user
      var result = Websites.findOne({
        _id: id
      });
      result.voteDown += 1;
      var update = Websites.update({
        _id: id
      }, result);
      return update;
    }
  },
  getSiteInfo: function(url) {
    if (!this.userId) { // not logged in
      return;
    } else {
      var title, description, response = HTTP.get(url);
      if (response.statusCode === 200) {
        var $ = cheerio.load(response.content);
        title = $('title').text() || "";
        description = $('meta[name=description]').attr("content") || "";
      }
      return {
        title: title,
        description: description
      };
    }
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
