Meteor.publish('patients', function () {
    return Patients.find({author: this.userId});
});

Meteor.publish('patient', function (id) {
    check(id, String);
    return Patients.find({_id: id});
});