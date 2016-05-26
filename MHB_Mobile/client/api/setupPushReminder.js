Template.row.helpers({
	pastReminders: function () {
		var query = {};
		if (Session.get("checked")) {
			query = {receivedAt: {$exists: !Session.get("checked")}};
		}
		return PastReminders.find(query);
	}
});

Template.setupPushReminder.events({

	"click #removeHistory": function () {
		Meteor.call("removeHistory");
	},
	"click input[type=checkbox]": function () {
		Session.set("checked", $("input[type=checkbox]").is(":checked"));
	}, 
	
	'submit form': function(event){
    event.preventDefault();
    var documentId = this._id;
    var notificationTime =  document.getElementById('n1').value; //get form input
    console.log(notificationTime);
    var currentUserId = Meteor.userId();

		const notificationData = {
			timestamp: notificationTime,
			//notificationTime: document[0].value,
			createdBy: currentUserId
		};
	Meteor.call("serverNotification");
    Meteor.users.update( { _id: currentUserId }, {
			$push: {
				notifData: notificationData
			}
		});
	}

});

Meteor.startup(function () {
	Meteor.defer(function () {
		Session.setDefault("checked", $("input[type=checkbox]").is(":checked"));
	});

	if (Meteor.isCordova) {
		window.alert = navigator.notification.alert;
	}

	Push.addListener('message', function(notification) {
		// Called on every message
		console.log(JSON.stringify(notification))

		function alertDismissed() {
			PastReminders.update({_id: notification.payload.historyId}, {
				$set: {
					"receivedAt": new Date()
				}
			});
		}
		alert(notification.message, alertDismissed, notification.payload.title, "Ok");
	});
})
