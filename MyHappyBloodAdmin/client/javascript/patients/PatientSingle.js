
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

/****Helper used to GET show patient's data on a chart****/
Template.PatientSingle.helpers({
    "myChartData": function() {

        SurveyHistory = _.pluck(Patients.find({}).fetch(), "SurveyHistory");
        INRHistory = _.pluck(Patients.find({}).fetch(), "INRHistory");

        var date1 = ['Dates1'];
        var date2 = ['Dates2'];
        var BleedOrNot = ['BleedOrNot'];
        var MedOrNot = ['MedOrNot'];
        var mealPlan = ["MealPlan"];
        var INR = ['INR'];

        date1 = date1.concat(_.pluck(SurveyHistory[0], "date"));
        date2 = date2.concat(_.pluck(INRHistory[0], "date"));
        mealPlan = mealPlan.concat(_.pluck(SurveyHistory[0], "mealPlan"));
        INR =  INR.concat(_.pluck(INRHistory[0], "INR"));


        temp = _.pluck(SurveyHistory[0], "BleedOrNot").map(function(bool){
          if (bool){
            return 1.5;
          }
          else{
            return 0;
          }
        })
        BleedOrNot =  BleedOrNot.concat(temp);

        temp = _.pluck(SurveyHistory[0], "MedOrNot").map(function(bool){
          if (bool){
            return 1;
          }
          else{
            return 0;
          }
        })
        MedOrNot =  MedOrNot.concat(temp);

        return {
          size: {
              height: 350,
              width: 700
          },

          data: {
              columns: [
                  BleedOrNot,
                  MedOrNot,
                  mealPlan,
                  INR,
                  date1,
                  date2,
              ],

              xs: {
                'BleedOrNot': 'Dates1',
                'MedOrNot': 'Dates1',
                'MealPlan': 'Dates1',
                'INR': 'Dates2'
              },

              types: {
                MealPlan: 'spline',
                BleedOrNot: 'bar',
                MedOrNot: 'bar',
                INR: 'spline',
              }
          },
          bar: {
            width: 6
          },

          zoom: {
              enabled: true
          },
          subchart: {
              show: true
          },

          axis: {
              x: {
                  type: 'timeseries',
                  tick: {
                      format: function(x) { return moment(x).format('YYYY-MM-DD')}
                  }
              }
          }
        }
      }
});
