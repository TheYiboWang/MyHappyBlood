
Template.Patients.onCreated(function(){
    var self = this;
    /******autorun or autoupdate to the database if anything changes in Tempalte.******/
    self.autorun(function () {
        self.subscribe('patients');
    });
});
/****Helper used to GET all the patients' information****/
Template.Patients.helpers({
        patients: ()=> {
        return Patients.find({});
    }
});

Template.Patients.events({
    'click .new-patient': function () {
        Session.set('newPatient', true);
    }
});