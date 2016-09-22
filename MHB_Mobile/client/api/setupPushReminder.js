Template.setupPushReminder.helpers({
	pastReminders: function () {
		// var query = {};
		// if (Session.get("checked")) {
		// 	query = {receivedAt: {$exists: !Session.get("checked")}};
		// }
		return PastReminders.find();
	}
});


Template.setupPushReminder.events({

	"click .delete": function () {
		var result = confirm("Are you sure you want to delete your reminder?");
		if (result) {
			if(Meteor.isCordova){
				cordova.plugins.notification.local.hasPermission(function(granted){
					if(granted == true)
					{
						cordova.plugins.notification.local.cancel(this.rem_id, function () {
							//	navigator.notification.alert("Delete was Successful")
							});
					}
					else
					{
							//	navigator.notification.alert("Could Not Delete entry")
			}

				//	navigator.notification.alert("Permission To delete")
		} //if permission

);

	}//if isCordova
			console.log(this.rem_id);
			PastReminders.remove(this._id);
		}

	},

});
