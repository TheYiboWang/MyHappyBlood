Template.registerHelper('equals', function (a, b) {
  return a === b;
});

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
        },
        patients: ()=> {
          return Patients.find({});
        }
});

/****Helper used to GET show patient's data on a chart****/
Template.PatientSingle.helpers({
    "myChartData": function() {

        var id = FlowRouter.getParam('id');
        var Patient = Patients.findOne({_id: id});
        console.log(Patient);

        var surveyData = Patient.surveyData;
        var INRhistory = Patient.INRhistory;

        var date1 = ['Dates1'];
        var date2 = ['Dates2'];
        var BleedOrNot = ['BleedOrNot'];
        var MedOrNot = ['MedOrNot'];
        var MealTimes = ["MealTimes"];
        var INR = ['INR'];

        date1 = date1.concat(_.pluck(surveyData, "timestamp"));
        console.log(date1);
        date2 = date2.concat(_.pluck(INRhistory, "dot"));
        console.log(date2);
        MealTimes = MealTimes.concat(_.pluck(surveyData, "mealTimes"));
        console.log(MealTimes);
        INR =  INR.concat(_.pluck(INRhistory, "ts"));
        console.log(INR);


        temp = _.pluck(surveyData, "bleedOrNo").map(function(bool){
          if (bool){
            return 1.5;
          }
          else{
            return 0;
          }
        })
        BleedOrNot =  BleedOrNot.concat(temp);

        temp = _.pluck(surveyData, "medOrNo").map(function(bool){
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
                  MealTimes,
                  INR,
                  date1,
                  date2,
              ],

              xs: {
                'BleedOrNot': 'Dates1',
                'MedOrNot': 'Dates1',
                'MealTimes': 'Dates1',
                'INR': 'Dates2'
              },

              types: {
                MealTimes: 'spline',
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
