// -- helper function for user login --
Template.home.helpers({

  loginUser: function() {
    return Meteor.users.findOne({
      _id: Meteor.userId()
    });
  },
  staticNews: function() {
    news = [{
      "header": "Meteor pulls JavaScript technologies together",
      "image": "primary.idge.jpg",
      "tag": "HOT",
      "details": "Proponents of the Meteor JavaScript framework see the AngularJS and ReactJS frameworks as complementary to their own technology and are working to boost integration.  Detailing where the Meteor.js technology is headed, Meteor CEO Geoff Schmidt noted in a recent interview that the company has hired Uri Goldshtein, developer of Angular-Meteor integration technology, and is working on ReactJS integration. We've already found that many of our users are loving the combination of Meteor plus Angular or Meteor plus React, Schmidt said. [ JavaScript rules the Web -- but how do you harness its power? Find out in InfoWorld's special report, 'The triumph of JavaScript.' | Keep up with hot topics in app dev with InfoWorld's Strategic Developer blog. ]  While Angular and React can provide a front-end view layer, Meteor can fill in gaps like providing client-side database access, a way to push data over WebSockets, security rules, and business logic, Schmidt explained: Angular is like the propeller. It's part of the whole plane, but you are left to build the rest of the plane yourself. Meteor provides all the other parts of the plane. It provides the wing, the cockpit, and the engine. Meteor, he said, completes the story and provides an Angular or React developer with everything else they need to build a modern application without having to a integrate a dozen different technologies. While Meteor offers its own Blaze technology for user interfaces, some developers nonetheless want to use AngularJS or ReactJS, Schmidt said. This lets those community use Meteor, he added. Meteor is positioned as a complete platform for building Web and mobile apps in JavaScript. Recently, Meteor added support for Windows clients, with the release of Meteor 1.1. Meteor plans to support the ECMAScript 6 specification for JavaScript, and later this year, it will offer its Galaxy cloud-hosting solution for Meteor applications."
    }, {
      "header": "Meteor pulls JavaScript technologies together",
      "image": "primary.idge2.jpg",
      "tag": "HOT",
      "details": "Angular-Meteor, Meteor's technology for using the Angular and Meteor JavaScript frameworks together, has been upgraded this week with improvements in build capabilities and standards support.  Version 1.2.0 of the open source technology uses new Meteor build processes to make Angular developers more comfortable and productive, said Uri Goldshtein, core developer of Angular-Meteor, in a blog post. The main difference between older versions is that now, we use Angular to process regular HTML and JS files instead of .ng.html and .ng.js, he said. The build process also has been made faster through the use of Meteor 1.2 caching compilers. Need a JavaScript tool for your dev shop? InfoWorld looks at 17 JavaScript editors and IDEs ready for adoption. | Keep up with hot topics in programming with InfoWorld's Strategic Developer blog and Application Development newsletter. The new Angular package in Angular-Meteor processes JavaScript files with the Babel compiler, offering ECMAScript 2015 support, Goldshtein said. Angular developers get out-of-the-box support for ECMAScript 2015 for any JavaScript code, they write. Although Meteor views its own framework and Angular as complementary, the upgrade does feature migration capabilities. We worked hard to make migrating an existing Angular app to Meteor easier, Goldshtein said. You can migrate by simply moving your entire existing project into Meteor or by using your own tools and connecting to a Meteor server, like we demonstrated with Ionic.But a Meteor representative said the platforms together provide a usable Web development system with a database API, user account system, asset management, and other capabilities. Goldshtein said migrating to Meteor is only part of the equation. With Angular-Meteor, you can write a completely new project from scratch or take an existing Angular project and expand it into an Angular-Meteor project."
    }, {
      "header": "Learn JavaScript with 10 video courses and just pay what you want",
      "image": "JavaScript-Pay-What-You-Want.jpg",
      "tag": "",
      "details": "Among programming languages, JavaScript is one of the most popular and versatile. Via TechnoBuffalo Deals, you can pay what you want for ten courses on the subject, from the basics through to popular frameworks. Each of the courses is a standalone, but the bundle has been curated with a comprehensive JavaScript education in mind. After picking up basic JavaScript and JQuery with a hands-on introductory course, you can start to look at specialist frameworks. The courses on MeteorJS, Node.js and ExpressJS each walk you through ten server-side project builds, while the courses on D3, CouchDB and Apache Cassandra show you how to work with data. You can also gain an overview of server-side Javascript technologies, get to grips with front-end development via AngularJS, and learn how to design 3D environments with WebGL and Babylon.js. The line-up is worth $1,188 in total, but you can name your price on the CouchDB and AngularJS courses – just beat the average price paid to unlock the full bundle."
    }, {
      "header": "Learn Meteor.js From Scratch: Build a Polling App",
      "image": "meteor.jpg",
      "tag": "HOT",
      "details": "Meteor.js is an open-source platform built on Node and MongoDB. It’s not just a framework, it’s more than that. Is it comparable to Angular? Angular handles just the frontend parts of application. Meteor is more of a platform than Angular. It is both server and client-side code and handles a lot of the parts of applications that we need to create manually in Angular. We’ll be diving into a simple application in this tutorial to show off the benefits and power of Meteor. Real time built into its core: Meteor handles all of the real-time components so that as soon as you update something in your database, that change is made to all other connected users. Out of the box and very easy to use.  Full Stack Reactivity. In Meteor, realtime is the default. All layers, from database to template, update themselves automatically when necessary. Built-in build system Meteor believes that we spend too much time packaging our applications together and getting all the dependencies working together nicely. You don’t have to fiddle with a Gulp configuration anymore. Meteor handles it all for you out of the box.  Great for single page apps and mobile Packages are handled through Meteor’s pacakage management site: atmosphere.js (can also use npm and cordova packages) Connecting to external services and APIs is possible using ddp: DDP, the Distributed Data Protocol, is a simple protocol for fetching structured data from a server, and receiving live updates when that data changes. We won’t deal with this in our application today, but it’s good to know."
    }, {
      "header": "Docker, Inc Acquires Unikernel Systems Ltd with the Goal of 'Democratising Unikernel Technology'",
      "image": "shared_kernel_vs_unikernel.jpg",
      "tag": "HOT",
      "details": "Docker, Inc., the organisation behind the Docker platform, has acquired Unikernel Systems, a Cambridge, UK-based company focused on unikernel development. Docker Inc. have stated that this acquisition will enable the incorporation of unikernel-based software deployment on a ‘continuum with Linux and Windows containers’, and the company plans to ‘democratise unikernel technology’ through the existing visibility and tooling associated with the Docker ecosystem. Unikernels are specialised, single address space machine images constructed by using library-based operating systems, such as MirageOS. The use of a unikernel-based OS allows a developer to select the minimal set of libraries that correspond to the OS constructs required for their application to run. These libraries are then compiled with the application and configuration code to build a fixed-purpose ‘unikernel’ image that runs directly on a hypervisor or hardware without an intervening OS such as Linux or Windows. Unikernels are designed to reduce the OS footprint, improve security, and increase the potential for specialisation."
    }, {
      "header": "Three New Official Repos Join the Docker Library",
      "image": "neo4j.png",
      "tag": "HOT",
      "details": "We’re excited to announce that we’ve added three new Official Repos to the Docker Library. These repos are the latest additions to a growing library of curated content maintained by Docker and our partners. Docker users have pulled Official Repos nearly 300 million times, making them the most popular content in the Docker ecosystem. Please welcome Neo4j, Nuxeo, and Photon to the Docker library! (a) Neo4j is a highly scalable, robust, native graph database. It is used in mission-critical apps by thousands of leading startups, enterprises, and governments around the world. (b) Designed by developers for developers, Nuxeo is a highly customizable and extensible content-management platform for building business applications. Nuxeo features an extensible architecture, with over 150 plug-ins exposing more than 250 extension points, and future-proof upgrade patterns.  (c) Photon OS is a technology preview of a minimal Linux container host. It is designed to have a small footprint and boot extremely quickly on VMware platforms. Photon OS is intended to invite collaboration around running containerized applications in a virtualized environment."
    }, {
      "header": "New Docker tool removes a big barrier for enterprises",
      "image": "dockercon-eu-2015-100628427-large.png",
      "tag": "",
      "details": "Making containers enterprise-ready has been a theme at this week's DockerCon EU conference in Barcelona, and on Tuesday Docker itself launched a new tool with that goal in mind.  Aiming to give companies operational control while maintaining developers' productivity, Docker Universal Control Plane runs on-premises and is designed to help deploy and manage Dockerized distributed applications in production on any infrastructure.  Portability has always been one of the premier attractions of modern application containers such as Docker, so it's no surprise to see the company and community focused on enhancing and extending that portability, said Jay Lyman, a research manager with 451 Research. Enterprise container users need to be able to centrally manage containerized applications on a variety of infrastructures, and also have more fluidity and consistency between development and production environments, Lyman added. While IT operations departments often resort to building their own management tools, Docker Universal Control Plane offers centralized controls for provisioning the compute, network and storage resources to run Dockerized applications on any infrastructure. Developer teams, meanwhile, get self-service capabilities for agility as they deploy and manage applications. Although the tool is designed for use on-premises, it can manage the simultaneous deployment of Dockerized applications on Docker hosts across multiple platforms such as bare metal, virtualized, or private or public cloud, including Microsoft Azure, Digital Ocean, Amazon Web Services and SoftLayer. It also integrates with Docker Trusted Registry to create what Docker calls the only on-premises, end-to-end commercial offering that delivers Containers as a Service (CaaS). Through that, operations teams can give developers secure and manageable content via a self-service portal on programmable infrastructure. It's fully compatible with Docker Toolbox and the Docker APIs so that developers don’t have to learn new tooling to comply with operational controls."
    }, {
      "header": "Building multiplayer games with Angular",
      "image": "layout-diagram.png",
      "tag": "NEW",
      "details": "When building a game, often there is much more to it than simply building the game mechanics. There are many different types of games that can easily be built with a framework of choice. From tic-tac-toe to Magic The Gathering, there are a ton of different games that can be built with Angular. Card games, trivia games, board games, mobile hide-and-seek, etc. can be built using raw, unoptimized AngularJS.  Think about the last time you were in an Applebee’s (a chain restaurant popular in the US) and there was an interactive trivia game on the different TVs. Using a single-page-app (SPA), it can be built in an afternoon. With CSS3/HTML5, we don’t even need fancy animation libraries as 2D and 3D can be performed using only native web elements.  For instance, to run a 3D wipe of an element, we can apply CSS3 to it. Then, when we are ready for the element to transition, we can simply apply the CSS class.  What about building DOM-heavy games? Isn’t Angular really poor at handling LOTS of run-time DOM manipulations? It can be. Due to the way Angular 1.x runs, it has it’s own event handler, which adds overhead to the DOM and building any heavy pixel-heavy games can be painful. Because of the extra event loop, building a DOM-manipulation-based game in only Angular may not be the best approach. However, there are many other components to building a game, for instance, most (if not all) games have scoreboards. There are HUDS (heads up displays), chat messages, event feeds, multiplayer stats, high scoreboards. How about game invitations, providing a pay-wall to guarentee a player has access to play premium content?  These are all elements that game libraries are not optimized to provide and can be tricky & complex to build. On the other hand, web application libraries such as angular are great at building these components. While game libraries are great at handling physics, animation, and sounds, we’ll use angular to power the container.  In today’s post, we are looking at how to build the eco-system of a game using angular as the vehicle to deliver the game content, node/express to power the game’s back-end, phaser.io and socket.io to connect the two in real-time."
    }, {
      "header": "Diving Deep with Dependency Injection",
      "image": "injection-300x238.png",
      "tag": "HOT",
      "details": "One of the coolest features of AngularJS is an often-misunderstood and somewhat widely undervalued component of the framework. It is a crucial component of the framework that allows the rest of the framework to work seamlessly and efficiently. Dependency injection is what gives Angular its superpowers. Dependency injection in Angular is what allows us to write our Angular code without worrying about the order in which our code is loaded. It allows us to use the same syntax across Angular components and not concern ourselves with how dependencies arrive. It gives us the ability to write tests efficiently and not worry about how to separate production components from those in testing.  What is Dependency Injection?  Dependency injection is nothing new. It’s a software design pattern that allows us to remove hard-coded dependencies and allows us to change defined dependencies at either compile time or run time.  For almost every line of code we’ll ever write ever in any language, it’s likely that we’ll need to depend upon someone else’s code. These libraries are called dependencies (because we depend upon them for our code to run properly).  For instance, we would not write a printf method when writing in c. It is already defined for us in the libc library, thus we have created a dependency on the libc library.  At run time, our code needs to know how to find the dependencies on which we’re basing our functionality. There are only so many ways that our code can get a hold of these dependencies. Either: (1) we tell our code how to look up the dependency from a global level (2) we pass the dependencies at run time to our objects"
    }, {
      "header": "How to Learn AngularJS – Your AngularJS Sherpa",
      "image": "Sherpa-carrying-plywood-mount-everst-base-camp.jpg",
      "tag": "NEW",
      "details": "Learning AngularJS can be complex. There are an overwhelming number resources available on the web. The blog posts can be conflicting and confusing, and a simple google search can turn up 5 articles all describing the same thing in a completely different way. This guide is written to be your roadmap; your personal guide of how to learn AngularJS. We’ll we’ll through the basic concepts of AngularJS in a logical, conceptual order. This post is intended to be the first post to read when starting to learn AngularJS. Use this post as your guide and you’ll be mastering Angular in no time. Let’s get started! You might be asking “what is AngularJS anyway?” AngularJS is a javascript library that provides tools for writing rich browser applications. Even though there are a seemingly endless number of articles about the different components of AngularJS, the basics of Angular can be broken down into 5 major components: Directives, Controllers, Scopes, Services, Dependency Injection."
    }, {
      "header": "Building the 2048 game in AngularJS",
      "image": "game.png",
      "tag": "NEW",
      "details": "One of the most frequently asked questions we get is when would Angular be a poor choice to use as a framework. Our default answer is usually when writing games as Angular has it’s own event loop handling (the $digest loop) and games usually require lots of low-level DOM manipulation. This is an inaccurate description as there are many types of games where Angular can support. Even games that require heavy DOM manipulation can use the angular framework for the static parts, such as tracking high scores and game menus.  If you are anything like me (and the rest of the tech industry), you may be addicted to the popular 2048 game. The objective of the game is to get to the 2048’s tile by matching like-value tiles.  In today’s post, we’re going to build a clone of it in AngularJS, from start-to-finish, explaining the entire process of building the app. As this app is a fairly complex application."
    }];

    return news;
  },
});
