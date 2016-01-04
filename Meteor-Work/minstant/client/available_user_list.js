/**
 * Meteor Client Available User List Template JS
 */
Template.available_user_list.helpers({
  users: function() {
    return Meteor.users.find();
  }
})
