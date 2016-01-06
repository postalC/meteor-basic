/**
 * Meteor Client Available User List Template JS
 */
Template.available_user_list.helpers({
  loginUser: function() {
      return Meteor.users.findOne({_id: Meteor.userId()});
  },
  otherUsers: function() {
    return Meteor.users.find({_id: { $ne: Meteor.userId()}});
  },
})
