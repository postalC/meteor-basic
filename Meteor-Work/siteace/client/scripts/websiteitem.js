// -- helper function for websites items --
Template.websiteitem.events({
  "click .js-upvote": function(event) {
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;
    //console.log("Up voting website with id " + website_id);
    // put the code in here to add a vote to a website!
    saveUpVote(website_id);
    getAll();
    return false; // prevent the button from reloading the page
  },
  "click .js-downvote": function(event) {
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;
    //console.log("Down voting website with id " + website_id);
    // put the code in here to remove a vote from a website!
    saveDownVote(website_id);
    getAll();
    return false; // prevent the button from reloading the page
  }
})
