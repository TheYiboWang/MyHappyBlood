import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

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

        for (var i = 0; i < patients.length; i++) {
          if (Patients.findOne({_id: patients[i]["_id"]}))
          {
            Patients.update({_id: patients[i]["_id"]}, {$set: {
              surveyData: patients[i]["surveyData"],
              INRhistory: patients[i]["INRhistory"]}
            });
          }
          else {
            Patients.insert(patients[i]);
          }
        }
        console.log(Patients.find().fetch());
        console.log("init")
});

function send_info() {
        var PatientsInfo = Patients.find().fetch();
        console.log("sending Patients Information");

        // This url serves as a web API. You can choose your own path to form a protocol.
        // Notice that I use JSON as content type, you can use other content type according to your need.
        // Also, make sure to run the receiver app on port 3002.
        var url = "http://localhost:3000/patients-update";
        var result = HTTP.post(url, {
                        headers: {
                                "content-type": "application/json; charset=UTF-8"
                        },
                        content: JSON.stringify(PatientsInfo),
                });
        console.log("Patients Information sended");
}

const c_Methods = {
        send_info: function(arg) {
                send_info();
        }
}

Meteor.startup(() => {
    // code to run on server at startup
    Meteor.methods(c_Methods);
});
