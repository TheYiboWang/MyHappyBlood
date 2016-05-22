
*Directories

/client: client directory contains all the ui and files that will be loaded to the web server.
    /css: all the .styl and css files go here.
    /html: all the html files go here.
        /layouts: this dir contains all the BlazeLayout files
        /partials: this dir contains repeatedly used components
        /patients: this contains all the html files regarding patients
    /javascript
        /routes: routes.js will redirect the urls.
        /patients: all subscriptions, events, helpers for templates regarding patients created here.

/collections: this contains all the mongoDB collections
    /patients: this contains all the database related to the patients

/server: all the server files go here. Especially, files that need to be loaded prior to static files
    -init.js: initializations
    -publish.js: publish the data collections to the application in which we can utilize to display on front end.


Packages:

//To use data from a Meteor collection inside a React component, we can use an Atmosphere package react-meteor-data which allows us to create a "data container" to feed Meteor's reactive data into React's component hierarchy.
//We need to install that package alongside a NPM package it utilizes, react-addons-pure-render-mixin:
meteor npm install --save react-addons-pure-render-mixin
meteor add react-meteor-data

//To enable the accounts system and UI, we need to add the relevant packages. In your app directory, run the following command:
meteor add accounts-ui accounts-password


//ex)update the class of the <li> element in the Task component to reflect it's privacy status. We'll use the classnames NPM Package
meteor npm install --save classnames

//add a test driver for the Mocha JavaScript test framework. write a test that exercises one of our Methods (which form the "write"
//part of our app's API), and verifies it works correctly.
meteor add practicalmeteor:mocha

// can now run our app in "test mode" by calling out a special command and specifying to use the driver (you'll need to stop the
//regular app from running, or specify an alternate port with --port XYZ)
meteor test --driver-package practicalmeteor:mocha

Meteor Commands:
Meteor.user().username //Get the loggedin username
Meteor.userId() //Get the logged in user's _id
meteor remove insecure //Instead of the client code directly calling insert, update, and remove,
//it will instead call methods that will check if the user is authorized to complete the action
//and then make any changes to the database on the client's behalf.



MongoDB commands:
meteor mongo
db.name.insert({ text: "Hello world!", createdAt: new Date() });