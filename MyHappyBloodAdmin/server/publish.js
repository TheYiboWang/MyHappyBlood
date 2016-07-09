
Meteor.publish('patients', function () {
    return Patients.find({});
});

Patients.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});
