// routes.js
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

Router.route('/video', function() {
  this.render('video');
});

Router.route('/contact', function() {
  this.render('contact');
});
