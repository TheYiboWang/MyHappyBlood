// MealHistory.js

Template.charts2.helpers({
    "myChart2Data": function() {
      
  var currentUserId = Meteor.userId();
  var theReport = Meteor.users.findOne({_id: currentUserId}).surveyData;
         //theReport = allINR.find().fetch();

        xData = ['x'];
        yData = ['Meal History'];

        res_x = _.pluck(theReport, 'timestamp');
        console.log("res_x",res_x);
        res_x = res_x.filter(function(n){ return (n != undefined && n!="") });
        xData = xData.concat(res_x);
        console.log("xData", xData);

        res_y = _.pluck(theReport, 'mealTimes');
        res_y = res_y.filter(function(n){ return (n != undefined && n!="") });
        yData = yData.concat(res_y);
        console.log("yData", yData);
        var d = 1;

       // var chart = c3.generate({
        return {
          size: {
            height: 480,
          },
          data: {
            x: 'x',
            
            columns: [
              xData,
              yData
            ],
            labels: true
          },

          axis: {
            x: {
              type: 'timeseries',
              tick: {
                rotate: 90,
                format: '%x'
              }
            },

            y: {

              max:5,
              min:0,
              padding: {top:1, bottom:1},
              label: {
                text: 'Number of Meals',
                position:'outer-middle'
              },
              tick: {
                // count does not work here !
              },
            }
          },

        }

    }
});
