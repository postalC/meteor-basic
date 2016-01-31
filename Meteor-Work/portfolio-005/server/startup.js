/**
 * Meteor Server - Start-up JS
 */

// start up script that creates some users for testing
// users have the username 'test@test.com'
// and the password testtest
Meteor.startup(function() {
  if (!Meteor.users.findOne()) {
    Meteor.users.insert({
      username: "Master",
      profile: {
        username: "Master"
      },
      emails: [{
        address: "test@test.com"
      }],
      roles: [
        "blogAdmin"
      ],
      services: {
        password: {
          bcrypt: "$2a$10$9WiWP9ZnlidVAums.wP9selXqGoMEfMdmaOkG5b3ti7ClrbechDm6"
        },
        resume: {
          loginTokens: [{
            when: new Date(),
            hashedToken: "H4Ylzs0CZlb+nHf5aXCa6cZFM07FzHY1z4TNndMgSlU="
          }]
        }
      },
      "createdAt": new Date()
    });
  }
});
