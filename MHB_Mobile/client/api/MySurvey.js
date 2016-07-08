// surveypage.js

Template.survey.rendered=function() {
	document.getElementById("date").innerHTML = "Date:" + Date();
	$("#txtarea").hide();
	$('[name="selectWhy"]').hide();
	$('[alt="saftey-tip_all"]').hide();

	 $('[name="yesNoBox1"]').change(function() {
  		var val = $('[name="yesNoBox1"]:checked').val();
  		console.log(val);
     	if(val=="no"){
         	$('[name="selectWhy"]').show();
         	 $("p1").html("If not please choose why");
     	} else {
            $('[name="selectWhy"]').hide();
            $("p1").html("");
            $("#txtarea").hide();
     	}
	 });

	 $('[name="selectWhy"]').change(function() {
	 	var val = $('[name="selectWhy"]').val();
	 	if (val=="other") {
	 		$("#txtarea").show();
	 	} else {
	 		$("#txtarea").hide();
	 	}

	 });

	 $('[name="yesNoBox2"]').change(function() {
	 	console.log('aaaaa');
	 	var val = $('[name="yesNoBox2"]:checked').val();
	 	  		console.log(val);
	 	if (val == "yes") {
	 		$('[alt="saftey-tip_all"]').show();
	 	} else {
	 		$('[alt="saftey-tip_all"]').hide();
	 	}
	 });
}

Template.survey.events({
	'click input[type=submit]': function(event){
		event.preventDefault();

		var currentTime = new Date();
		var currentUserId = Meteor.userId();

		var medyes = document.getElementById("medyes");
		var bleedyes = document.getElementById("bleedyes");
		var meal0 = document.getElementById("meal0");
		var meal1 = document.getElementById("meal1");
		var meal2 = document.getElementById("meal2");
		var meal3 = document.getElementById("meal3");

		if(medyes.checked) {
			var medbool = true;
		} else {
			var medbool = false;
		}

		if(bleedyes.checked) {
			var bleedbool = true;
		} else {
			var bleedbool = false;
		}

		if(meal0.checked){
			var meal = 0;
		}
		else if (meal1.checked) {
			var meal = 1;
		}
		else if (meal2.checked) {
			var meal = 2;
		}
		else if (meal3.checked) {
			var meal = 3;
		}
		else if (meal4.checked) {
			var meal = 4;
		}

		console.log(meal);
		console.log(medbool);
		console.log(bleedbool);
		const surveyD = {
			timestamp: currentTime,
			medOrNo: medbool,
			bleedOrNo: bleedbool,
			mealTimes: meal,
			createdBy: currentUserId
		};
		console.log(surveyD);

//Push new survey data and eating plan to user collections with associtad data
		Meteor.users.update( { _id: currentUserId }, {
			$push: {
				surveyData: surveyD
			}
		});

		Router.go('/thankyou');
	}


})
