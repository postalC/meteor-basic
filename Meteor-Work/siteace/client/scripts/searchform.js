Template.searchform.events({
  "click .js-website-modal": function(event) {
    e.preventDefault();
    var searchterm = event.target.search.value;
    //FlowRouter.go('/search/' + q);
    return false;
  }
});
