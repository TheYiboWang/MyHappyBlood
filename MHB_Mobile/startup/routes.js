// routes.js
Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template

      this.render('login');
      // console.log("User ID"+userId);
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});


Router.route('/home', function() {
  this.render('home');
});


Router.route('/helppage', function () {
  this.render('helppage');
});

Router.route('/profile', function() {
  this.render('profile');
});

Router.route('/myprogress', function() {
  this.render('myprogress');
});

Router.route('/mylearningpage', function() {
  this.render('mylearningpage');
});
Router.route('/mymedspage', function() {
  this.render('mymedspage');
});
Router.route('/mysurveypage', function() {
  this.render('mysurveypage');
});
Router.route('/helpInstructions', function() {
  this.render('helpInstructions');
});
Router.route('/warfarin/', function() {
  this.render('mylearningWarfarin');
});
Router.route('/safetytips/', function() {
  this.render('mylearningSafety');
});

Router.route('/setupPushReminder/', function() {
  this.render('setupPushReminder');
});


// Router.route('mylearningWarfarin', {
//   // get parameter via this.params
//   path: '/mylearningpage/warfarin'
// });

// Router.route('mylearningWarfarinDiet', {
//   path: '/mylearningpage/diet'
// });
Router.route('/addinr', function() {
  this.render('addinr');
});

Router.route('/thankyou', function() {
  this.render('thankyou');
});

Router.route('/inrhistory', function() {
  this.render('inrhistory');
});
Router.route('/medhistory', function() {
  this.render('medhistory');
});
Router.route('/mealshistory', function() {
  this.render('mealshistory');
});
Router.route('/video', function() {
  this.render('video');
});

Router.route('/contact', function() {
  this.render('contact');
});
Router.route('/aboutus', function() {
  this.render('aboutus');
});
