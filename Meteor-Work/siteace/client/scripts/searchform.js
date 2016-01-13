Template.searchform.events({
  "click .js-website-search": function(event) {
    event.preventDefault();
    var searchValue = $("#searchValue").val();
    if (searchValue) {
      Session.set("searchValue", searchValue);
      searchText(searchValue);
    } else {
      Session.set("searchValue", "");
    }
  }
});
