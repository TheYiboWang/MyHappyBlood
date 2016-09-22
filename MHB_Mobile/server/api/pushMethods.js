//Push.debug = true;

Push.allow({
    send: function(userId, notification) {
        return true; // Allow all users to send
    }
});

Meteor.methods({
    serverNotification: function(text,title) {
        var badge = 1
        Push.send({
             from: 'push',
             title: title,
             text: text,
             badge: badge, //optional, use it to set badge count of the receiver when the app is in background.
             query: {
             } // Query the appCollection
             // token: appId or token eg. "{ apn: token }"
             // tokens: array of appId's or tokens
             // payload: user data
             // delayUntil: Date
         });
    },
    userNotification: function(text,title,userId) {
        var badge = 1
        Push.send({
            from: 'push',
            title: title,
            text: text,
            badge: badge,
            sound: 'airhorn.caf',
            payload: {
                title: title,
                historyId: result
            },
            query: {
                userId: userId //this will send to a specific Meteor.user()._id
            }
        });
    },
    removeHistory: function() {
        NotificationHistory.remove({}, function(error) {
            if (!error) {
                console.log("All history removed");
            }
        });
    },
});
