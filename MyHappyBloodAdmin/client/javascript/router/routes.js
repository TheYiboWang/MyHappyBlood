
/**** Routes to the home page.***/
FlowRouter.route('/',{

    name: 'home',
    action() {
        /**If there exists userId, then redirect to main page**/
        if(Meteor.userId())
        {
            FlowRouter.go('main');
        }
        /**You can implement pageviews**/
        // GAnalytics.pageview();

        BlazeLayout.render('HomeLayout');
    }

});

/**** Routes to the main page.***/
FlowRouter.route('/main',{

    name: 'main',
    action() {

        /**You can implement pageviews**/
        // GAnalytics.pageview();

        BlazeLayout.render('MainLayout',{main: 'Patients'});
    }

});

/**** Routes to an individual patient ***/
FlowRouter.route('/patients/:id', {
  name: 'single-patient',
  action () {
    BlazeLayout.render('MainLayout',{main: 'PatientSingle'});
  }
});
