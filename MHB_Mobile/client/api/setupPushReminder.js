Template.setupPushReminder.events({

'submit form': function(event){
    event.preventDefault();
    var documentId = this._id;
    var notificationTime =  document.getElementById('n1').value;; //get form input
    console.log(notificationTime);
    var currentUserId = Meteor.userId();

		const notificationData = {
			timestamp: notificationTime,
			//notificationTime: document[0].value,
			createdBy: currentUserId
		};

    Meteor.users.update( { _id: currentUserId }, {
			$push: {
				notifData: notificationData
			}
		});
}
})
