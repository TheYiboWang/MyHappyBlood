// mylearningOtherMeds.js

// Template.mylearningOtherMeds.events ({

// 	'click #tt1': function(event) {
// 		var text1 = "<span class='largeText'> About Apixaban (Eliquis) </span> <br> <br> "  + 
// 		"i)   Apixaban reduces the risk of stroke and blood clots in people with a heart rhythm problem called non-valvular atrial fibrillation. <br><br>" + 
//         "ii) With atrial fibrillation, part of the heart does not beat the way it should. This can cause blood clots to form, increasing your risk of a stroke.  <br><br> " + 
//         "iii)    Take apixaban exactly as prescribed by your doctor. If you miss a dose, take it as soon as you remember. If your next dose is less than 6 hours away, skip the missed dose. Do not take a double dose. <br><br> " +
//         "iv) Avoid grapefruit and grapefruit juice while taking this medication. <br>"
// 		 // 
// 		document.getElementById("p1").innerHTML = text1 + '<img src="img/mylearning_aboutwarfarin_3 warfarin tablets.png"> ' ;
// 	},

//     'click #tt2': function(event) {
//         var text2 = "<span class='largeText'> Using Other Medicines </span> <br> <br> "  + 
//         "i) Dabigatran will reduce the risk of stroke and blood clots in people with a serious heart rhythm problem called non-valvular atrial fibrillation. <br><br>" +
//         "ii) With atrial fibrillation, part of the heart does not beat the way it should. This can cause blood clots to form, increasing your risk of a stroke. <br><br>" +
//         "iii) Take it exactly as prescribed by your doctor. If you miss a dose, take it as soon as you remember. If your next dose is less than 6 hours away, skip the missed dose. Do not take a double dose.<br><br>" +
//         "iv) You may need to stop using Dabigatran for several days before having surgery, including dental or medical procedures. Do not stop taking Dabigatran without first talking with your doctor. Your doctor will tell when to start taking Dabigatran again after your surgery or procedure/"
//          // 
//         document.getElementById("p1").innerHTML = text2;
//     },

    

// 	'click #tt3': function(event) {
// 		var text3 = "<span class='largeText'> Warfarin and Diet </span> <br> <br>" +
//     	"Blood Thinners and Vitamin K <br>" +

//     	"Coumadin or warfarin are anticoagulant medicines that thin the blood to prevent the formation of blood clots. <br>" +

//     	"With anticoagulants, a consistent intake of vitamin K is needed.  Large changes in vitamin K intake may affect the way your Coumadin works. If you eat few foods rich in vitamin K, don't ... <br>" +

//     	"Drinking Alcohol <br>" + 

//     	"Try to AVOID alcohol while taking Warfarin. <br>" +
//     	"Alcohol can affect your INR levels. It can cause the levels to increase or decrease, which would effect your blood thinner management. <br>" +

//     	"If you choose to drink , limit to only 1-2 drinks. Try your best to avoid alcohol as much as possible. <br>"

// 		document.getElementById("p1").innerHTML = text3;
// 	},

// 	'click #tt4': function(event) {
// 		var text4 = "<span class='largeText'> Monitoring Labs </span> <br> <br>" +

//     	"This blood test helps your doctor decide how much medicine you need." +
//     	"The Prothromibin Time(PT) or the International Normalized Ratio (INR) blood test mesures how fast your blood clots and lets the doctor know if your dose needs to be changed."

//     	document.getElementById("p1").innerHTML = text4;
// 	}



// })


//innerHTML = "<span class='error'>my error</span>";

Template.mylearningOtherMeds.rendered = function() {
$('input').change(function() {
    var v = $(this).val();
    $('[class="tab-content"]').css('font-size', v + 'px');
});
}