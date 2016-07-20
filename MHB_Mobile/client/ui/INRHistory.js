Template.charts.onCreated(function(){
    var self = this;
    /******autorun or autoupdate to the database if anything changes in Tempalte.******/
    self.autorun(function () {
        self.subscribe('patients');
    });
});

Template.charts.helpers({
    "myChartData": function() {

        var currentUserId = Meteor.userId();
        var theReport = Meteor.users.findOne({_id: currentUserId}).INRhistory;


        xData = ['x'];
        yData = ['INR Test Result'];

        res_x = _.pluck(theReport, 'dot');
        xData = xData.concat(res_x);
        res_y = _.pluck(theReport, 'ts');
        yData = yData.concat(res_y);


        var th = 8;
        var tl = 2;
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
            labels: true,
          },

          axis: {
              x: {
                  type: 'timeseries',
                  tick: {

                      rotate: 90,
                      format: function(x) { return moment(x).format('YYYY-MM-DD')}
                  }
              },

                      y: {
                        max:10,
                        min:0,
                        padding: {top:1, bottom:1},
                        label: {
                          text: 'INR Test Result',
                          position:'outer-middle'
                        }
                      }
                    },

                    regions: [
                    {axis: 'y', start: 0, end: tl, class: 'regionY1'},
                    {axis: 'y', start: tl, end: th, class: 'regionY3'},
                    {axis: 'y', start: th, end: 10, class: 'regionY2'},
                    ],

              grid: {
                y: {
                  lines:[{value: tl, text:'low threshold'},
                          {value: th, text:'high threshold'}],
                }
              },



             zoom: {
              enable: true
             },


        }

    }
});
