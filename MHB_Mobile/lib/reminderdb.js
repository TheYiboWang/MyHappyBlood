PastReminders = new Mongo.Collection("past_reminders");


if (Meteor.isServer) {
  Meteor.publish('PastReminders', function tasksPublication() {
    return PastReminders.find();
  });
}
