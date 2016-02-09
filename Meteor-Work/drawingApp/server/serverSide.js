points = new Meteor.Collection('pointsCollection');

Meteor.startup(function() {
if (!points.findOne()) {
      points.insert(
      	{w: 1}
      	);
    }
});

Meteor.methods({
  'clear': function () {
    points.remove({});
  }
});

