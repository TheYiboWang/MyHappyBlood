// MedHistory.js


Template.medhistory.rendered = function () {
	var currentUserId = Meteor.userId();
	var source = Meteor.users.find({_id: currentUserId}).fetch()[0].medicineHistory;
	var i;
	for(i = 0; i < source.length; i++){
    	source[i].start = source[i]['timestamp'];
    	source[i].rendering = 'background';
    	delete source[i].timestamp;
	}
	console.log(source);

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
    events: source,
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