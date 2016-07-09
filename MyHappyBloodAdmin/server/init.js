import { Meteor } from 'meteor/meteor';

var bodyParser = Meteor.npmRequire( 'body-parser' );

Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

Picker.route("/patients-update",function( params, request, response, next) {

        console.log("Receiving patients: ");
        // retrieve data
        var patients= request.body;
        console.log("Patients received");
        // needs to end with a response so the other server doesn't hang.
        response.end("Patients recieved");


        Patients.remove({});
        for (var i = 0; i < patients.length; i++) {
          Patients.insert(patients[i]);
        }
        console.log(Patients.find().fetch());
        console.log("init")
});

Meteor.startup(() => {
    // code to run on server at startup

    // console.log(Meteor.settings.public.ga.account);
});
