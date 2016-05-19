Template.setupPushReminder.events({

'submit form': function(event){
    event.preventDefault();
    var documentId = this._id;
    var notifTime = document.forms[0]; //get form input

		const notificationData = {
			timestamp: currentTime,
			notificationTime: f1[0].value,
			createdBy: currentUserId
		};

    Meteor.users.update( { _id: currentUserId }, {
			$push: {
				notifData: notificationData
			}
		});
}
})
