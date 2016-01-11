// -- helper function for websites lists - top 5 - in landing_page --
Template.landingpage.helpers({
  topfive: function() {
    var result = Websites.find({}, {
      skip: 0,
      limit: 5,
      sort: {
        voteUp: -1
      }
    });
    console.log("Here " + result.title);
    return result;
    // return Meteor.call("getTopFive",
    //   function(err, callback) {
    //     if (err) { // error
    //       console.log("[ERROR]: getTopFive, " + err);
    //     } else {
    //       if (callback) { // ok - we have website saved --
    //         console.log("Here " + callback.length);
    //         websites = new Array();
    //         websites = [{
    //           title: 123
    //         }, {
    //           title: 111
    //         }];
    //         // var i = 0;
    //         // for (var i = 0; i < callback.length; i++) {
    //         //   console.log("Here " + " i " + callback[i]._id);
    //         //   websites.push fixObjectKeys(callback[i]);
    //         // };
    //         console.log("Here " + websites);
    //         return websites;
    //       } else {
    //         console.log("[ERROR]: getTopFive not found.");
    //       }
    //     }
    //   });
  }
});

// this renames object keys by removing hyphens to make the compatible
// with spacebars.
function fixObjectKeys(obj) {
  var newObj = {};
  for (key in obj) {
    var key2 = key.replace("-", "");
    newObj[key2] = obj[key];
  }
  return newObj;
}
