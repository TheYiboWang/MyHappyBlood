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

       // var chart = c3.generate({
        return {
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
                                      format: '%x'
                                    }
                               }
                             },

               }

    }
});
