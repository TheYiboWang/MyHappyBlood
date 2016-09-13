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
			PastReminders.remove(this._id);
		}
		
	},

});
