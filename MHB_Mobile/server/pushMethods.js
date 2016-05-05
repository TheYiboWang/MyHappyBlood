Meteor.methods({
    serverNotification: function () {
        var last = PastReminders.findOne({}, {sort: {addedAt: -1}});
        var badge = 1
        if (last != null) {
            badge = last.badge + 1;
        }

        PastReminders.insert({
            badge: badge,
            addedAt: new Date()
        }, function (error, result) {
            if (!error) {
                Push.send({
                    from: 'push',
                    title: 'Hello World',
                    text: 'This notification has been sent from the server',
                    badge: badge,
                    payload: {
                        title: 'Hello World',
                        historyId: result
                    },
                    query: {}
                });
            }
        });
    },
    removeHistory: function () {
        PastReminders.remove({}, function (error) {
            if (!error) {
                console.log("All past reminders removed");
            }
        });
    }
});