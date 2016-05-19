Meteor.methods({
    serverNotification: function () {
        var last = PastReminders.findOne({}, {sort: {addedAt: -1}});
        var badge = 1
        if (last != null) {
        badge = last.badge + 1;
        }
        
        //Use find() function to get the user defined notifData and trigger the notification at the specified time

        PastReminders.insert({
            badge: badge,
            addedAt: new Date()
        }, function (error, result) {
            if (!error) {
                Push.send({
                    from: 'push',
                    title: 'Reminder',
                    text: 'Just a friendly reminder that you need to take your medication!',
                    badge: badge,
                    payload: {
                        title: 'Reminder',
                        historyId: result
                    },
                    query: {
                        // Ex. send to a specific user if using accounts:
                        //userId: 'xxxxxxxxx'
                    }
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
