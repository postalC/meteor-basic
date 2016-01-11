/**
 * Meteor Client JS
 */
Meteor.subscribe('usersData');
Meteor.subscribe('websitesList');

/// accounts config
Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});
///
