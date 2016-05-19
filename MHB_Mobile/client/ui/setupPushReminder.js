
'submit form': function(event){
    event.preventDefault();
    var documentId = this._id;
    var playerNameVar = event.target.playerName.value;
    var notifTime = document.forms[0];

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
    event.target.playerName.value = "";
}
