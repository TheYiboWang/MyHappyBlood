

'submit form': function(event){
    event.preventDefault();
    var documentId = this._id;
	var currentTime = new Date(); //Store date as an iso date object
	var currentUserId = Meteor.userId();
    var playerNameVar = event.target.playerName.value;
    Meteor.users.update( { _id: currentUserId }, {
			$push: {
				INRhistory: INRdata
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
		});
    event.target.playerName.value = "";
}
