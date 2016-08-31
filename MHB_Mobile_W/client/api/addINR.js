Template.addinr.rendered=function() {
	$('#test-datepicker').datepicker();
}

/***
 * @param: event - when 'click input[name=submitINR]' event happens, execute the codes in side the function.
 * @variable: dot: date of test taken
 * @variable: ts: test score
 * @description: Ming and I were able to  find how to use Meteor user data and store data into user data associated
 * with meteor userID.****/
Template.addinr.events({

    /*WHEN CLICK SUBMISSION BUTTON EVENT HAPPENS*/
	'click input[name=submitINR]': function(event){
		event.preventDefault();
   	var documentId = this._id;

		var currentUserId = Meteor.userId();

		console.log(currentUserId);
		console.log("written");
		var f1 = document.forms[0]; //get the input fields

		console.log(f1[0].value);
		console.log(f1[1].value);


		const INRdata = {
			timestamp: moment(new Date()).format('YYYY-MM-DD'),
			dot: moment(f1[0].value).format('YYYY-MM-DD'),
			ts: Number(f1[1].value),
			createdBy: currentUserId
		};

//Push new INRdata to users collections with associated user
		Meteor.users.update( { _id: currentUserId }, {
			$push: {
				INRhistory: INRdata
			}
		});


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
