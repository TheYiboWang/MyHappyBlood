Meteor.methods({
    serverNotification: function () {
        var last = PastReminders.findOne({}, {sort: {addedAt: -1}});
        var badge = 1
        if (last != null) {
        badge = last.badge + 1;
        }
        
        //Use find() function to get the user defined notifData and trigger the notification at the specified time

        var s1 = Meteor.users.find({_id: currentUserId}).fetch()[0].notifData;
        var len = s1.length;
        var s2 = s1[len-1].timestamp;

        PastReminders.insert({
            badge: badge,
            addedAt: s2
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
