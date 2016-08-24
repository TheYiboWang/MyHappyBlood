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
		PastReminders.remove(this._id);
	},

});
