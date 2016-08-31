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
    // console.log(len);

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
        var today = moment(new Date()).format('YYYY-MM-DD');
        var lastSubmitDay = source[len - 1].timestamp;
        var diff =  Math.floor(( Date.parse(today) - Date.parse(lastSubmitDay)) / 86400000);

        // console.log(today);
        // console.log(lastSubmitDay);
        // console.log(diff);

        for(ii = 7; ii < 14; ii++) {
            var checkDay = moment(new Date()).subtract(ii, 'days').format('YYYY-MM-DD');
            // console.log(source[len - 1 - ii + diff].timestamp);
            // console.log(checkDay);
            // console.log(source[len - 1 - ii + diff].timestamp != checkDay);
            if (source[len - 1 - ii + diff].timestamp != checkDay) {
                $("#star2").hide();
                break;
            }
        }
    };

    if (len >= 21) {
        $("#star3").show();
        var today = moment(new Date()).format('YYYY-MM-DD');
        var lastSubmitDay = source[len - 1].timestamp;
        var diff =  Math.floor(( Date.parse(today) - Date.parse(lastSubmitDay)) / 86400000);
        for(ii = 14; ii < 21; ii++) {
            var checkDay = moment(new Date()).subtract(ii, 'days').format('YYYY-MM-DD');
            // console.log(source[len - 1 - ii + diff].timestamp);
            // console.log(checkDay);
            // console.log(source[len - 1 - ii + diff].timestamp != checkDay);
            if (source[len - 1 - ii + diff].timestamp != checkDay) {
                $("#star3").hide();
                break;
            }
        }
    };

    if (len >= 28) {
        $("#star4").show();
        var today = moment(new Date()).format('YYYY-MM-DD');
        var lastSubmitDay = source[len - 1].timestamp;
        var diff =  Math.floor(( Date.parse(today) - Date.parse(lastSubmitDay)) / 86400000);
        for(ii = 21; ii < 28; ii++) {
            var checkDay = moment(new Date()).subtract(ii, 'days').format('YYYY-MM-DD');
            if (source[len - 1 - ii + diff].timestamp != checkDay) {
                $("#star4").hide();
                break;
            }
        }
    };

    /*
        count number of stars
    */
    var count = 0;
    if ($('#star1').is(":visible")) count++;
    if ($('#star2').is(":visible")) count++;
    if ($('#star3').is(":visible")) count++;
    if ($('#star4').is(":visible")) count++;
    document.getElementById("numberOfStars").innerHTML 
        = "You have "  + count +  " / 4 stars based on past 4 weeks."// show emicon  


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
    if (source.length > 0) {
        var startDate  = source[0].timestamp;
        var currentDate = moment(new Date()).format('YYYY-MM-DD');
        var diff =  1 + Math.floor(( Date.parse(currentDate) - Date.parse(startDate) ) / 86400000);
        var percentage =   (source1.length) * 100 /  diff;
        percentage = Math.round(percentage * 10) / 10;
        document.getElementById("calculatePercentage").innerHTML = " Total adherence is " + percentage + "%";
    }

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
        $("#calculatePercentage").hide();
    },

    'click img[id=star2]': function(event) {
        $("#congrats").show();
        $("#calendar").hide();
        $("#tookOrNot").hide();
        $("#calculatePercentage").hide();
    },

    'click img[id=star3]': function(event) {
        $("#congrats").show();
        $("#calendar").hide();
        $("#tookOrNot").hide();
        $("#calculatePercentage").hide();
    },

    'click img[id=star4]': function(event) {
        $("#congrats").show();
        $("#calendar").hide();
        $("#tookOrNot").hide();
        $("#calculatePercentage").hide();
    },

    'click div[id=congrats]': function(event) {
        $("#congrats").hide();
        $("#calendar").show();
        $("#tookOrNot").show();
        $("#calculatePercentage").show();

        // Router.go('/medhistory');
        // $("#calendar").show();
        // $("#tookOrNot").show();

         // $("#star1").show(); $("#star2").show(); $("#star3").show(); $("#star4").show();
        // $("#calculatePercentage").show();
    },

})

