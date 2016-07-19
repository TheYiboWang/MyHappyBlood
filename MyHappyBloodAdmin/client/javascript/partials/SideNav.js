/****Helper used to GET all the patients' information****/

Template.SideNav.onCreated(function(){
    var self = this;
    /******autorun or autoupdate to the database if anything changes in Tempalte.******/
    self.autorun(function () {
        self.subscribe('patients');
    });
});

Template.SideNav.helpers({
    patients: ()=> {
      return Patients.find({});
    },
});
