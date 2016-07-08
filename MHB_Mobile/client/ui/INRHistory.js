Template.charts.helpers({
    "myChartData": function() {

        var currentUserId = Meteor.userId();
        var theReport = Meteor.users.findOne({_id: currentUserId}).INRhistory;
         //theReport = allINR.find().fetch();

        xData = ['x'];
        yData = ['INR Test Result'];

        res_x = _.pluck(theReport, 'dot');
        console.log("res_x",res_x);
        res_x = res_x.filter(function(n){ return (n != undefined && n!="") });
        xData = xData.concat(res_x);
        console.log("xData", xData);

        res_y = _.pluck(theReport, 'ts');
        res_y = res_y.filter(function(n){ return (n != undefined && n!="") });
        yData = yData.concat(res_y);
        console.log("yData", yData);

        var th = 8;
        var tl = 2;
       // var chart = c3.generate({
        return {
          size: {
             height: 640,
          },
                data: {
                        x: 'x',
                        xFormat: '%x', // 'xFormat' can be used as custom format of 'x'
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
                                  count: 10,
                                  rotate: 75,
                                      format: '%x'
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
                grid: {
                  y: {
                    lines:[{value: tl, text:'low threshold'},
                            {value: th, text:'high threshold'}],
         

                  }
                },

                // subchart: {
                //   show: true
                // },

               zoom: {
                enable: true
               },


        }

    }
});