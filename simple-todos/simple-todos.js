Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    taskList: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
  "submit .new-task": function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var textValue = event.target.textinput.value;

    // Insert a task into the collection
    Tasks.insert({
      textitem: textValue,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.textinput.value = "";
  }
  });

  Template.templateTask.events({
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: {checked: ! this.checked}
    });
  },
  "click .delete": function () {
    Tasks.remove(this._id);
  }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
