points = new Meteor.Collection('pointsCollection');
var canvas;

// we use these for drawing more interesting shapes
var lastX = 0;
var lastY = 0;
var strokeWidth = 1;
Session.set("format", "line");
var thickness = 5;
Session.get("sliderVal", thickness);
var strokeColor = "black";

Meteor.startup(function() {
  canvas = new Canvas();

  Deps.autorun(function() {
    var data = points.find({}).fetch();

    if (canvas) {
      canvas.draw(data);
    }
  });
});

Template.wall.events({
  "click .save": function() {
    $(".export").remove()
    var svg = document.getElementById('my-svg');
    svg.setAttribute('width', 800);
    var svgData = new XMLSerializer().serializeToString(svg);
    var canvas = document.createElement("canvas");
    var svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width * 3;
    canvas.height = svgSize.height * 3;
    var ctx = canvas.getContext("2d");
    var img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

    img.onload = function() {
      ctx.drawImage(img, 100, 100, canvas.width, canvas.height);
      var link = canvas.toDataURL("image/png")
      $(".preview").append('<a type="button" href=' +
        link +
        ' class="btn btn-lg btn-warning btn-block" target="_blank"><span class="glyphicon glyphicon-eye-open"> Preview</span></a>'
      )
    };
    svg.setAttribute('width', '100%');
  },

  "click button.clear": function(event) {
    Meteor.call('clear', function() {
      canvas.clear();
    });
  },

  //choose a color. Initialise the last vals, otherwise a stray line will appear.
  "click .colors button": function(event) {
    var width = $(".color-picked").css("width");
    $(".color-picked").css("height", width)
    var color = event.target.style.backgroundColor;
    $(".color-picked").css("background-color", color);
    if (color === "rgb(255, 255, 255)") {
      $(".color-picked").css('border', '1px solid #000000');
    } else {
      $(".color-picked").css('border', '');
    }
  },

  "click button.circle": function() {
    Session.set("format", "circle");
  },

  "click button.line": function() {
    Session.set("format", "line");
  },

  "click button.red": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#FF0000";
  },
  "click button.black": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#000000";
  },
  "click button.white": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#FFFFFF";
  },
  "click button.blue": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#0000FF";
  },
  "click button.silver": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#C0C0C0";
  },
  "click button.gray": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#808080";
  },
  "click button.brown": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#800000";
  },
  "click button.yellow": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#FFFF00";
  },
  "click button.green": function() {
    lastX = 0;
    lastY = 0;
    //  strokeColor = "#0080000";
    strokeColor = "#228B22";
  },
  "click button.olive": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#808000";
  },
  "click button.lime": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#00FF00";
  },
  "click button.aqua": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#00FFFF";
  },
  "click button.teal": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#008080";
  },
  "click button.navy": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#000080";
  },
  "click button.fushia": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#FF00FF";
  },
  "click button.purple": function() {
    lastX = 0;
    lastY = 0;
    strokeColor = "#800080";
  },

});
Template.wall.helpers({
  sliderVal: function() {
    var slider = points.findOne();
    if (slider && slider.w !== undefined) {
      Template.instance().$('#slider').data('uiSlider').value(slider.w);
      return slider.w;
    }
  }
});
Template.wall.onRendered(function() {
  var handler = _.throttle(function(event, ui) {
    var val = points.findOne({});
    console.log(val)
    thickness = ui.value
    Session.set("sliderVal", thickness);
    points.update({
      _id: val._id
    }, {
      $set: {
        w: thickness
      }
    })
  }, 50, {
    leading: false
  });

  if (!this.$('#slider').data('uiSlider')) {
    $('#slider').slider({
      slide: handler,
      min: 0,
      max: 40,
    });
  }
});

var markPoint = function() {

  var offset = $('#canvas').offset();

  // In the first frame, lastX and lastY are 0.
  // This means the line gets drawn to the top left of the screen
  // Which is annoying, so we test for this and stop it happening.

  if (lastX == 0) { // check that x was something not top-left. should probably set this to -1
    lastX = (event.pageX - offset.left);
    lastY = (event.pageY - offset.top);
  }
  points.insert({
    //this draws a point exactly where you click the mouse
    // x: (event.pageX - offset.left),
    // y: (event.pageY - offset.top)});


    //We can do more interesting stuff
    //We need to input data in the right format
    //Then we can send this to d3 for drawing


    //1) Algorithmic mouse follower
    // x: (event.pageX - offset.left)+(Math.cos((event.pageX/10  ))*30),
    // y: (event.pageY - offset.top)+(Math.sin((event.pageY)/10)*30)});

    //2) draw a line - requires you to change the code in drawing.js
    x: (event.pageX - offset.left),
    y: (event.pageY - offset.top),
    x1: lastX,
    y1: lastY,
    // We could calculate the line thickness from the distance
    // between current position and last position
    //w: 0.05*(Math.sqrt(((event.pageX - offset.left)-lastX) * (event.pageX - offset.left)
    //  + ((event.pageY - offset.top)-lastY) * (event.pageY - offset.top))),
    // Or we could just set the line thickness using buttons and variable
    w: thickness,
    // We can also use strokeColor, defined by a selection
    c: strokeColor,


  }); // end of points.insert()

  lastX = (event.pageX - offset.left);
  lastY = (event.pageY - offset.top);

}

Template.canvas.events({
  'click': function(event) {
    markPoint();
  },
  'mousedown': function(event) {
    Session.set('draw', true);
  },
  'mouseup': function(event) {
    Session.set('draw', false);
    lastX = 0;
    lastY = 0;
  },
  'mousemove': function(event) {
    if (Session.get('draw')) {
      markPoint();
    }
  }
});
