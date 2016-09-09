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

		var result = confirm("Want to delete?");
		if (result) {
			PastReminders.remove(this._id);
		}
		
	},

});
