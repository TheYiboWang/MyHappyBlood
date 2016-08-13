// MedHistory.js


Template.medhistory.rendered = function () {
    $("#star1").hide();
    $("#star2").hide();
    $("#star3").hide();
    $("#star4").hide();

	var currentUserId = Meteor.userId();
	var source = Meteor.users.findOne({_id: currentUserId}).surveyData;

    var ii; 
    var len = source.length;

    //check the first 7 days.
    if (len >= 7) {
        $("#star1").show();
        for(ii = 0; ii < 7; ii++) {
            var checkDay = moment(new Date()).subtract(ii, 'days').format('YYYY-MM-DD');
            if (source[len - 1 - ii].timestamp != checkDay) {
                $("#star1").hide();
                break;
            }
        }
    };

    if (len >= 14) {
        $("#star2").show();
        for(ii = 7; ii < 14; ii++) {
            var checkDay = moment(new Date()).subtract(ii, 'days').format('YYYY-MM-DD');
            if (source[len - 1 - ii].timestamp != checkDay) {
                $("#star2").hide();
                break;
            }
        }
    };

    if (len >= 21) {
        $("#star3").show();
        for(ii = 14; ii < 21; ii++) {
            var checkDay = moment(new Date()).subtract(ii, 'days').format('YYYY-MM-DD');
            if (source[len - 1 - ii].timestamp != checkDay) {
                $("#star3").hide();
                break;
            }
        }
    };

    if (len >= 28) {
        $("#star4").show();
        for(ii = 21; ii < 28; ii++) {
            var checkDay = moment(new Date()).subtract(ii, 'days').format('YYYY-MM-DD');
            if (source[len - 1 - ii].timestamp != checkDay) {
                $("#star4").hide();
                break;
            }
        }
    };



	var i; 
    var source1 = [];
    var source2 = [];
	for(i = 0; i < source.length; i++){
        if (source[i].medOrNo == true) {
            var a = source[i];
            source1.push(a);
        } else {
            var b = source[i];
            source2.push(b);
        }
    };
    for(i = 0; i < source1.length; i++){
            source1[i].start = source1[i]['timestamp'];
            source1[i].rendering = 'background';
    };
    for(i = 0; i < source2.length; i++){
            source2[i].start = source2[i]['timestamp'];
            source2[i].rendering = 'background';
    };
    	
    	// delete source[i].timestamp;

	console.log(source1);
    console.log(source2);

    /*
     calculate the percentage
    */
    var startDate  = source[0].timestamp;
    var currentDate = moment(new Date()).format('YYYY-MM-DD');
    var diff =  Math.floor(( Date.parse(currentDate) - Date.parse(startDate) ) / 86400000);
    var percentage =   (source1.length - 3) * 100 /  diff;
    percentage = Math.round(percentage * 10) / 10;
    document.getElementById("calculatePercentage").innerHTML = " Total adherence is " + percentage + "%";


	$('#calendar').fullCalendar({
    // defaultDate: '2014-11-10',
    // defaultView: 'agendaMonth',
    // height: 300,
    fixedWeekCount: false,
    allDayDefault: true,
    header: {
        left: '',
        center: 'prev title next',
        right: ''
    },
    eventSources: [
    {
    events: source2,
    color: 'red'

    },
    {
    events: source1,
    color: 'green'
    }
    ]
   

});


    // var fc = this.$('.fc');
    // this.autorun(function () {
    //     //1) trigger event re-rendering when the collection is changed in any way
    //     //2) find all, because we've already subscribed to a specific range
    //     Events.find();
    //     fc.fullCalendar('refetchEvents');
    // });
    $("#congrats").hide();
};

Template.medhistory.events({

    'click img[id=star1]': function(event) {
        $("#congrats").show();
        $("#calendar").hide();
        $("#tookOrNot").hide();
        $("#star1").hide(); $("#star2").hide(); $("#star3").hide(); $("#star4").hide();
        $("#calculatePercentage").hide();
    },

    'click div[id=congrats]': function(event) {

        $("#congrats").hide();
        Router.go('/medhistory');
        // $("#calendar").show();
        // $("#tookOrNot").show();

         // $("#star1").show(); $("#star2").show(); $("#star3").show(); $("#star4").show();
        // $("#calculatePercentage").show();
    },

})

