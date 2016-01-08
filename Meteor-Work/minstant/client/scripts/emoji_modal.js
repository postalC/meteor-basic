/////////
/// EVENTS
////////
Template.emoji_modal.events({
  "click .js-emoji-done": function(event) {
    document.getElementById("chat-textarea").focus();
  },
})
