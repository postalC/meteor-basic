this.Documents =  new Mongo.Collection('documents')
if (Meteor.isClient) {
  // // -- 1 Sec Interval --
  // Meteor.setInterval(function(){
  //   Session.set("current_date", new Date());
  // }, 1000);
  //
  // Template.display_date.helpers({
  //   current_date:function(){
  //     return Session.get("current_date");
  //   }
  // });

  Template.editor.helpers({
    docId:function(){
      var docs = Documents.findOne();
      if (docs){
        return docs._id;
      } else {
        return undefined;
      }
    },
    // template helper that configures the CodeMirror editor
    // you might also want to experiment with the ACE editor
    config:function(){
      return function(editor2){
        editor2.setOption("lineNumbers", true);
        editor2.setOption("mode", "html");
        editor2.on("change", function(cm_editor, info){
          //console.log(cm_editor.getValue());
          $("#viewer_iframe").contents().find("html").html(cm_editor.getValue());
        });
      }
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Documents.findOne()){
      Documents.insert({title:"new docs"});
    }
  });
}
