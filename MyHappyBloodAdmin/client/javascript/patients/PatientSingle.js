Template.PatientSingle.onCreated(function(){
    var self = this;
    /******autorun or autoupdate to the database if anything changes in Tempalte.******/
    self.autorun(function () {
        self.subscribe('patients');
    });
});
/****Helper used to GET single patient information****/
Template.PatientSingle.helpers({
        patient: ()=> {
          var id = FlowRouter.getParam('id');
          return Patients.findOne({_id: id});
    }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});
