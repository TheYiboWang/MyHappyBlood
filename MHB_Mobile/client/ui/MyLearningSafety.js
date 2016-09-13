Template.mylearningSafety.events ({

	'click #st1': function(event) {
		var text1 = "<span class='largeText'> Important Reminder </span> <br> "  + 
		"<ul>" +
        "<li> Bleeding is the most common side effect of blood thinners and can occur from anywhere. </li>" +
        "<li> Take your bllod thinner as directed by your doctor. </li>" +
        "<li> Go for blood tests as directed. </li>" +
        "<li> Never skip a dose. </li>" +
        "<li> Never take a double dose. </li>" +
        "</ul>" + 
        "<span class='largeText'> Travel Precautions </span> <br> <br>"

		document.getElementById("p1").innerHTML = text1;
	},

    'click #st2': function(event) {
        var text2 = "<span class='largeText'> Telling Others </span> <br> "  + 
        "<ul>" +
        "<li> Keep a current list of all the medicines you take. </li>" +
        "<li> Ask your doctor about whether you should wear a medical alert bracelet or necklace. </li>" +
        "<li> Go for blood tests as directed. </li>" +
        "</ul>"
          document.getElementById("p1").innerHTML = text2;
    },

    

	'click #st3': function(event) {
		var text3 = "<span class='largeText'> Telling Your Doctor </span> <br> " +
    	"<ul>" +
        "<li> Always tell your doctor about all the medicines you are taking. </li>" +
        "<li> Tell your doctor when you start taking new mdicine, when you stop taking a medicine, and if the amount of medicine you are taking changes.</li>" +
        "<li> When you visit your doctor, bring a list of current medicines, over-the-counter drugs-such as aspirin-and any vitamins and </li>" +
        "</ul>"
		document.getElementById("p1").innerHTML = text3;
	},


})

Template.mylearningSafety.rendered = function() {
$('input').change(function() {
    var v = $(this).val();
    $('[class="tab-content container"]').css('font-size', v + 'px');
});
}