
/**** Routes to the home page.***/
FlowRouter.route('/',{

    name: 'home',
    action() {
        FlowRouter.go('main');
    }
});

/**** Routes to the main page.***/
FlowRouter.route('/main',{

    name: 'main',
    action() {
        Meteor.call("send_info");
        BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
    }

});

/**** Routes to an individual patient ***/
FlowRouter.route('/patients/:id', {
  name: 'single-patient',
  action () {
    if (Meteor.userId())
    {
      BlazeLayout.render('MainLayout',{main: 'PatientSingle'});
    }
    else {
      FlowRouter.go('main');
    }
  }
});
