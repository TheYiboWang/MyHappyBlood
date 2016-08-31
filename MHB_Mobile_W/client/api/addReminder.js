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
        selectAmPm: selectAmPm
      };

      console.log(reminder);
      PastReminders.insert(reminder);
      Router.go('/thankyou');
    }
});
