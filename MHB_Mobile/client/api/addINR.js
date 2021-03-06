Template.addinr.rendered=function() {
	$('.test-datepicker').datepicker();
}

/***
 * @param: event - when 'click input[name=submitINR]' event happens, execute the codes in side the function.
 * @variable: dot: date of test taken
 * @variable: ts: test score
 * @description: Ming and I were able to  find how to use Meteor user data and store data into user data associated
 * with meteor userID.****/
Template.addinr.events({

    /*WHEN CLICK SUBMISSION BUTTON EVENT HAPPENS*/
	'click [class="submit-INR"]': function(event){

		event.preventDefault();
   	var documentId = this._id;

		var currentUserId = Meteor.userId();

		console.log("currentUserId:", currentUserId);

		var f1 = document.forms[0]; //get the input fields

		console.log(f1[0].value);
		console.log(f1[1].value);

	if (f1[0].value == null || f1[0].value == "" || f1[1].value == null || f1[1].value =="") {
      alert("Please Fill All Required Field");
      return false;
     } else if (f1[1].value < 0 || f1[1].value > 10) {
     	alert("Your INR input is invalid");
      return false;
     } else {
      	console.log("running else")
		const new_INR = {
			timestamp: moment(new Date()).format('YYYY-MM-DD'),
			dot: moment(f1[0].value).format('YYYY-MM-DD'),
			ts: Number(f1[1].value),
			createdBy: currentUserId
		};

//Push new INRdata to users collections with associated user

		var INRhistory = Meteor.users.findOne(currentUserId).INRhistory;
		var last_INR = INRhistory[INRhistory.length - 1];
		console.log(INRhistory);
		if (INRhistory.length == 0 || new_INR.timestamp != last_INR.timestamp)
		{
			Meteor.users.update( { _id: currentUserId }, {
				$push: {
					INRhistory: new_INR
				}
			});
		}
		else {
			Meteor.users.update( { _id: currentUserId }, {
				$pull: {
					INRhistory: last_INR
				}
			});
			Meteor.users.update( { _id: currentUserId }, {
				$push: {
					INRhistory: new_INR
				}
			});
		}

		Router.go('/thankyou');
		}
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
