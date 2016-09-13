// MyConditionHistory.js

Template.conditionhistory.conditionHistory = function () {
	var currentUserId = Meteor.userId();
	var source = Meteor.users.findOne({_id: currentUserId}).surveyData;
	return source;
}