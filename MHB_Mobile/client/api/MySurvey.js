// surveypage.js

Template.survey.rendered=function() {
	$("#txtarea").hide();
	$('[name="selectWhy"]').hide();

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

	 })
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

		const surveyData = {
			timestamp: currentTime,
			medOrNo: medbool,
			bleedOrNo: bleedbool,
			createdBy: currentUserId
		};

		const eatingData = {
			timestamp: currentTime,
			mealTimes: meal,
			createdBy: currentUserId
		}

//Push new survey data and eating plan to user collections with associtad data
		Meteor.users.update( { _id: currentUserId }, {
			$push: {
				medicineHistory: surveyData,
				EatingPlan: eatingData
			}
		});

		Router.go('/thankyou');
	}


})
