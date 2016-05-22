/****Helper used to GET all the patients' information****/
Template.SideNav.helpers({
        patients: ()=> {
        return Patients.find({});
}
});