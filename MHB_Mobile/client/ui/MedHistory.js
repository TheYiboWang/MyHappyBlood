// MedHistory.js


Template.medhistory.rendered = function () {
	var currentUserId = Meteor.userId();
	var source = Meteor.users.findOne({_id: currentUserId}).surveyData;
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
    events: source2,
    eventColor: 'red',

    events: source1,
    eventColor: 'green'
});


    // var fc = this.$('.fc');
    // this.autorun(function () {
    //     //1) trigger event re-rendering when the collection is changed in any way
    //     //2) find all, because we've already subscribed to a specific range
    //     Events.find();
    //     fc.fullCalendar('refetchEvents');
    // });
};
