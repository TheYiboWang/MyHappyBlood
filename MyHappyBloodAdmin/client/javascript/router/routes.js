
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

        BlazeLayout.render('MainLayout',{main:'Patients'});
    }

});