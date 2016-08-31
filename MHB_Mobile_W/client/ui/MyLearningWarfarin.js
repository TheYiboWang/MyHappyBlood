// mylearningWarfarin.js

Template.mylearningWarfarin.events ({

	'click #tt1': function(event) {
		var text1 = "<span class='largeText'> About Warfarin (Counmadin) </span> <br> <br> "  + 
		"This is a bloodthinner in tablet form. Your warfarin dose is based on what you eat and drink, what other medications you take, and how you feel. It takes a few days to a week to start working. (APA) <br> <br> Never skip a dose, and never take a double dose. If you miss a dose, take it as soon as you remember."
		 // 
		document.getElementById("p1").innerHTML = text1 + '<img src="img/mylearning_aboutwarfarin_3 warfarin tablets.png"> ' ;
	},

    'click #tt2': function(event) {
        var text2 = "<span class='largeText'> Using Other Medicines </span> <br> <br> "  + 
        "Tell your doctor about every medicine you take. The doctor needs to know about all your medicines, over-the-counter medicines, vitamins, and herbal products you used before you started taking a blood thinner. <br><br>" +
        "Medicines you get over the counter may also interact with your blood thinner. Following is a list of some common medicines that you should talk with your doctor or pharmacist about before using. <br><br>" +
        "Pain relievers, cold medicines, or stomach remedies, such as: "
         // 
        document.getElementById("p1").innerHTML = text2;
    },

    

	'click #tt3': function(event) {
		var text3 = "<span class='largeText'> Warfarin and Diet </span> <br> <br>" +
    	"Blood Thinners and Vitamin K <br>" +

    	"Coumadin or warfarin are anticoagulant medicines that thin the blood to prevent the formation of blood clots. <br>" +

    	"With anticoagulants, a consistent intake of vitamin K is needed.  Large changes in vitamin K intake may affect the way your Coumadin works. If you eat few foods rich in vitamin K, don't ... <br>" +

    	"Drinking Alcohol <br>" + 

    	"Try to AVOID alcohol while taking Warfarin. <br>" +
    	"Alcohol can affect your INR levels. It can cause the levels to increase or decrease, which would effect your blood thinner management. <br>" +

    	"If you choose to drink , limit to only 1-2 drinks. Try your best to avoid alcohol as much as possible. <br>"

		document.getElementById("p1").innerHTML = text3;
	},

	'click #tt4': function(event) {
		var text4 = "<span class='largeText'> Monitoring Labs </span> <br> <br>" +

    	"This blood test helps your doctor decide how much medicine you need." +
    	"The Prothromibin Time(PT) or the International Normalized Ratio (INR) blood test mesures how fast your blood clots and lets the doctor know if your dose needs to be changed."

    	document.getElementById("p1").innerHTML = text4;
	}



})


//innerHTML = "<span class='error'>my error</span>";

Template.mylearningWarfarin.rendered = function() {
$('input').change(function() {
    var v = $(this).val();
    $('[class="tab-content"]').css('font-size', v + 'px');
});


}