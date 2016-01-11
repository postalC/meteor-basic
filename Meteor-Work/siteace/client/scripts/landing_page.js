// -- helper function for websites lists - top 5 - in landing_page --
Template.landing_page.helpers({
  topfive:function(){
    return Websites.find({}, {skip: 0, limit: 5});
  }
});
