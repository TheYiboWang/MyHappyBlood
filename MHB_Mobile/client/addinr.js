Template.addinr.rendered=function() {
	$('#test-datepicker').datepicker();
}
Template.addinr.events({
	'click input[name=submitINR]': function(event){
		event.preventDefault();
   		var documentId = this._id;
		var currentTime = new Date();
		var currentUserId = Meteor.userId();
		console.log(currentTime);
		console.log(currentUserId);	
		console.log("written");
		var f1 = document.forms[0];

		console.log(f1[0].value);
		console.log(f1[1].value);


		allINR.insert({
			timestamp: currentTime,
			dot: f1[0].value,
			tr: f1[1].value,
			createdBy: currentUserId
		})

		Router.go('/thankyou');
	}




})

// <script type="text/javascript">
// $(function() {
//   $('form').submit(function(){
//     $.post('http://example.com/upload', function() {
//       window.location = 'http://google.com';
//     });
//     return false;
//   });
// });
// </script>



