//---- This should probably go in another Js file ---------//
var info = null;

document.addEventListener("deviceready", function(){
if(!localStorage.getItem("rp_data"))
{
  var rp_data = {data: []};
  localStorage.setItem("rp_data", JSON.stringify(rp_data));
}

info = JSON.parse(localStorage.getItem("rp_data"));
}, false);

//----------------------------------//

Template.addReminder.events({
    'submit form': function(event){

      event.preventDefault();
      console.log("Form submitted");
      console.log(event.type);
      var medicine = event.target.chooseMed.value;
      var dose = event.target.medDose.value;
      var days = [];
      $('input[name=reminderDays]:checked').each(function() {
        days.push($(this).val());
      });
      var selectHour = event.target.selectHour.value;
      var selectMinute = event.target.selectMinute.value;
      var selectAmPm = event.target.selectAmPm.value;

      const reminder = {
        medicine: medicine,
        dose: dose,
        days: days,
        selectHour: selectHour,
        selectMinute: selectMinute,
        selectAmPm: selectAmPm,
        rem_id: new Array()
      };

      //
      console.log("Add Cordova Alarm");
    //  console.log(reminder);
    //if(Meteor.isCordova){
    add_reminder(reminder);
  //  }


      //console.log(reminder);
      PastReminders.insert(reminder);
      Router.go('/thankyou');
    }
});


//----- functions for setting up cordova local notifications ---------//
function schedule(id, title, message, schedule_time)
{
    cordova.plugins.notification.local.schedule({
        id: id,
        title: title,
        message: "Hello "+message,
        firstAt: schedule_time,
        every: "week"
    });

    var array = [id, title, message, schedule_time];
    info.data[info.data.length] = array;
    localStorage.setItem("rp_data", JSON.stringify(info));

    //  console.log("Reminder added successfully");
    //navigator.notification.alert("Reminder added successfully")
}

function add_reminder(reminder)
  {

  //  console.log(reminder);

    var title = "MHB Reminder " + reminder.medicine;
    var message = reminder.medicine + " "+ reminder.dose;

    var time = reminder.selectHour + ":" + reminder.selectMinute + ":00 " +  reminder.selectAmPm;
    var week = getNext7Days(time);
    console.log(week);
    for(var i = 0; i < reminder.days.length; i++){
    var id = Math.floor((Math.random() * 1000000) + 1);
    reminder.rem_id.push(id);
    var date_time = getStartOfAlarm(reminder.days[i], week);
    console.log(date_time);
    if(Meteor.isCordova){
      cordova.plugins.notification.local.hasPermission(function(granted){
        if(granted == true)
        {
          schedule(id, title, message, date_time);
        }
        else
        {
          cordova.plugins.notification.local.registerPermission(function(granted) {
              if(granted == true)
              {
                schedule(id, title, message, date_time);
              }
              else
              {
                //  console.log("Reminder cannot be added because app doesn't have permission");
                navigator.notification.alert("Reminder cannot be added because app doesn't have permission");
              }
          });
        }
      });
    }
    }//end for loop
  }

//-------------------------------------------------------//

function formatDate(date){

	 var dd = date.getDate();
	 var mm = date.getMonth()+1;
	 var yyyy = date.getFullYear();

	 if(dd<10) {dd='0'+dd}
	 if(mm<10) {mm='0'+mm}
	 date = mm+'/'+dd+'/'+yyyy;
	 return date
}
function getNext7Days (time) {
	var weekday = new Array(7);
	weekday[0]=  "sunday";
	weekday[1] = "monday";
	weekday[2] = "tuesday";
	weekday[3] = "wednesday";
	weekday[4] = "thursday";
	weekday[5] = "friday";
	weekday[6] = "saturday";

	var result = [];
	for (var i=0; i<7; i++) {
			var d = new Date();
			d.setDate(d.getDate() + i);
			var schedule_time = new Date((formatDate(d) + " " + time).replace(/-/g, "/")).getTime();
			schedule_time = new Date(schedule_time);
			result.push( {"date":formatDate(d), "day":weekday[d.getDay()], "fulldate":schedule_time})
	}

	return(result);
}

function getStartOfAlarm(chosenDay, week){

    for(var i = 0; i < week.length; i++){
        if(chosenDay === week[i].day){
          return week[i].fulldate;
        }
    }
    return null;

}
