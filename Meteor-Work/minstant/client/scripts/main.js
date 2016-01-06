/**
 * Meteor Client JS
 */
Meteor.subscribe('usersData');
Meteor.subscribe('chatDialog');

/// accounts config
Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});
///
