// surveypage.js

Template.survey.rendered=function() {




	document.getElementById("date").innerHTML = "Date: <br>" + Date();
	$('[class="q2"]').hide();
	$('[class="q3"]').hide();
	$("#txtarea").hide();
	$('[name="selectWhy"]').hide();
	$('[alt="saftey-tip_all"]').hide();
	$('[class="submit-survey"]').hide();


	$('[name="yesNoBox1"]').change(function() {
		var val = $('[name="yesNoBox1"]:checked').val();
		console.log(val);
		if(val=="no"){
			$('[name="selectWhy"]').show();
			$("p1").html("<br><br>" + "If not please choose why");
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
		var val = $('[name="yesNoBox2"]:checked').val();
		if (val == "yes") {
			$('[alt="saftey-tip_all"]').show();
		} else {
			$('[alt="saftey-tip_all"]').hide();
		}
	});

}

Template.survey.events({
	'click li[class=next]': function(event) {
		if ($('[class="q2"]').is(":visible")) {
			if ($('[name="yesNoBox2"]:checked').val() == null ) {
				alert("Pleae Select Yes or No.");
			} else {
				$('[class="q2"]').hide();
				$('[class="q3"]').show();
				$('[class="submit-survey"]').show();
			}
		}
		if ($('[class="q1"]').is(":visible")) {
			if ($('[name="yesNoBox1"]:checked').val() == null ) {
				alert("Pleae Select Yes or No.");
			}else {
				$('[class="q1"]').hide();
				$('[class="q2"]').show();
			}

		}
	},

	'click li[class=previous]': function(event) {
		if ($('[class="q1"]').is(":visible")) {
			// do nothing here.
		}
		if ($('[class="q2"]').is(":visible")) {
			$('[class="q2"]').hide();
			$('[class="q1"]').show();
			$('[class="submit-survey"]').hide();
		}
		if ($('[class="q3"]').is(":visible")) {
			$('[class="q3"]').hide();
			$('[class="q2"]').show();
			$('[class="submit-survey"]').hide();
		}
	},



	'click div[class=submit-survey]': function(event){
		if ($('[name="numberOfMeals"]:checked').val() == null ) {
			alert("Pleae Select A Number");
		} else {
			event.preventDefault();

			var currentUserId = Meteor.userId();

			var medyes = document.getElementById("medyes");
			var bleedyes = document.getElementById("bleedyes");
			var meal0 = document.getElementById("meal0");
			var meal1 = document.getElementById("meal1");
			var meal2 = document.getElementById("meal2");
			var meal3 = document.getElementById("meal3");
			var meal4 = document.getElementById("meal4+");


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
			} else {
				var meal = -1;
			}

			var reasonchoose = document.getElementById("selectWhy").value;
			var reasontext = document.getElementById("txtarea").value;

			console.log(meal);
			console.log(medbool);
			console.log(bleedbool);
			const new_survey = {
				timestamp: moment(new Date()).format('YYYY-MM-DD'),
				medOrNo: medbool,
				reason1: reasonchoose,
				reason2: reasontext,
				bleedOrNo: bleedbool,
				mealTimes: meal,
				createdBy: currentUserId
			};
			console.log(new_survey);

			//Push new survey data and eating plan to user collections with associtad data
			var survey_data = Meteor.users.findOne(currentUserId).surveyData;
			var last_survey = survey_data[survey_data.length - 1];
			console.log(last_survey);
			if (survey_data.length == 0 || new_survey.timestamp != last_survey.timestamp)
			{
				Meteor.users.update( { _id: currentUserId }, {
					$push: {
						surveyData: new_survey
					}
				});
			}
			else {
				Meteor.users.update( { _id: currentUserId }, {
					$pull: {
						surveyData: last_survey
					}
				});
				Meteor.users.update( { _id: currentUserId }, {
					$push: {
						surveyData: new_survey
					}
				});
			}

			Router.go('/thankyou');
		}
	}

})
