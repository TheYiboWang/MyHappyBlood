Template.NewPatient.events({
    'click .fa-close': function () {
        Session.set('newPatient', false);
    }
});