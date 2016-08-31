import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';


function send_info() {
        var PatientsInfo = Meteor.users.find().fetch();
        console.log("sending Patients Information");

        // This url serves as a web API. You can choose your own path to form a protocol.
        // Notice that I use JSON as content type, you can use other content type according to your need.
        // Also, make sure to run the receiver app on port 3002.
        var url = "http://localhost:3002/patients-update";
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

Router.route("/patients-update", {where: "server"}).post(function() {
      // retrieve data
      var patients = this.request.body;
      // needs to end with a response so the other server doesn't hang.
      this.response.end("Patients recieved");

      for (var i = 0; i < patients.length; i++) {
        Meteor.users.update({_id: patients[i]["_id"]}, {$set: {
          profile: patients[i]["profile"]}
        });
      }
});

Meteor.startup(() => {
        // Register a meteor method for the client to call on.
        Meteor.methods(c_Methods);
});
