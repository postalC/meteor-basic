/**
 * Meteor Client JS
 */
Meteor.subscribe('usersData');

// accounts config
Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});
///
