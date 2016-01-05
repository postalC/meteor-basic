/**
 * Meteor Client Register Helper JS
 */

Template.registerHelper("formatDate", function(timestamp) {
    return moment(new Date(timestamp)).fromNow();
});
