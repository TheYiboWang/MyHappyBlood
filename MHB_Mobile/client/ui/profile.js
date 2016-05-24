// profile.js
Template.profile.rendered = function() {
	var currentUserId = Meteor.userId();
	var n1 = Meteor.users.find({_id: currentUserId}).fetch()[0].username;
	var n2 = Meteor.users.find({_id: currentUserId}).fetch()[0].username;
	var n3 = Meteor.users.find({_id: currentUserId}).fetch()[0].username;

	document.getElementById("realname").innerHTML = n1;
	document.getElementById("username").innerHTML = n2;
	document.getElementById("medication").innerHTML = n3;


}
