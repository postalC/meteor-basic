/**
 * Meteor Client Register Helper JS
 */

Template.registerHelper("formatDate", function(timestamp) {
  return moment(new Date(timestamp)).fromNow();
});

Template.registerHelper('arrayify', function(obj) {
  result = [];
  for (var key in obj) {
    result.push({
      name: key,
      value: obj[key]
    });
  }
  return result;
});
