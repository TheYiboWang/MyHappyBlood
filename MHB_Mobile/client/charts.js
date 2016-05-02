Template.charts.helpers({
    "myChartData": function() {

         theReport = allINR.find().fetch();
        
        xData = ['x'];
        yData = ['myData'];

        res_x = _.pluck(theReport, 'dot');
        console.log("res_x",res_x);
        res_x = res_x.filter(function(n){ return (n != undefined && n!="") });
        xData = xData.concat(res_x);
        console.log("xData", xData);

        res_y = _.pluck(theReport, 'tr');
        res_y = res_y.filter(function(n){ return (n != undefined && n!="") });
        yData = yData.concat(res_y);
        console.log("yData", yData);

       // var chart = c3.generate({
        return {
                      data: {
                                x: 'x',
                                xFormat: '%x', // 'xFormat' can be used as custom format of 'x'
                                columns: [
                        //             ['x', '2013-01-01 20:20:30', '2013-01-02 20:25:30'],
                        // //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                        //             ['data1', 30, 200],
                        //             ['data2', 130, 340]
                                              xData,
                                              yData
                                         ],
                                labels: true
                            },
                      
                      axis: {
                          x: {
                              type: 'timeseries',
                              tick: {
                                      format: '%x'
                                    }
                               }
                             },
                      // regions: [
                      //             {start: new Date('2015-11-11'), end: new Date('2015-11-20')},
                      //             {start: new Date('2015/11/25'), end: new Date('30 Nov 2015')},
                      //             {start: new Date('2015-12-02'), end: new Date('2015-12-05')} // start => 2014-01-25 00:00:00, end => 2014-01-30 00:00:00
                      //           ]

               }
   
    }
});