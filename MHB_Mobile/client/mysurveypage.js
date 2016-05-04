// surveypage.js





// Template.addSymptom.events({
//       /// events go here
//       		'submit form': function(event,template){
//   			    	event.preventDefault();
//   			    	var todoName = $('[name="todoName"]').val();
//   			    	Todos.insert({
//   			        	name: todoName,
//   			        	completed: false,
//                   rating: template.$('#add-rating').rateit('value'),
//   			        	createdAt: new Date()
//       					});
//   			    	$('[name="todoName"]').val('');
//               $('#add-rating').val('');
//               return false;
//   					}

//   			});





// Template.survey.helpers({
// 	'checked': function(){
// 		var isCompleted = this.completed;
//         if(isCompleted){
//             return "";
//         } else {
//             return "checked";
//         }
//         console.log("xxxxxx");
//     }
// });


// function check() {
//     var el = document.getElementById("combo");
//     var str = el.options[el.selectedIndex].text;
//     if(str == "Others") {
//         show();
//     }else {
//         hide();
//     }

// }
// function hide(){
//     document.getElementById('dummyText').style.visibility='hidden';
// }
// function show(){
//     document.getElementById('dummyText').style.visibility='visible';
// }



Template.survey.events({
	'click input[type=submit]': function(event){
		event.preventDefault();
   		var documentId = this._id;
		var currentTime = new Date();
		var currentUserId = Meteor.userId();
		console.log(currentTime);
		console.log(currentUserId);	
		console.log("written");
		var ynb1 = document.forms[0];
		if(ynb1[1].checked) {
			var number1 = 0;
		} else {
			var number1 = 1;
		}
		if(ynb1[4].checked) {
			var number2 = 1;
		} else {
			var number2 = 0;
		}
		allsurveys.insert({
			timestamp: currentTime,
			medOrNo: number1,
			bleedOrNo: number2,
			createdBy: currentUserId
		})
		
		Router.go('/thankyou');
	}

	// 'change #slct': function(event) {
	// 	var ynb1 = document.forms[0];
	// 	 if(ynb1[1].checked) {
	// 	 	$("slct").show();
	// 	 }
	// }
})

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








// <script type="text/javascript">
// function GetClock(){
// var d=new Date();
// var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
// if(nyear<1000) nyear+=1900;
// var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

// if(nhour==0){ap=" AM";nhour=12;}
// else if(nhour<12){ap=" AM";}
// else if(nhour==12){ap=" PM";}
// else if(nhour>12){ap=" PM";nhour-=12;}

// if(nmin<=9) nmin="0"+nmin;
// if(nsec<=9) nsec="0"+nsec;

// document.getElementById('clockbox').innerHTML=""+(nmonth+1)+"-"+ndate+"-"+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
// }

// window.onload=function(){
// GetClock();
// setInterval(GetClock,1000);
// }
// </script>
// <div id="clockbox"></div>





// <html>
//         <body>
         
//         <form id="myForm">
//         Name: <br><input type="text" name="Name" placeholder="Name" size="40"/><br/>
//         Phone: <br><input type="text" name="Phone No" placeholder="Phone Number"/><br/>
       
//        INBOUND: <br><select name="INBOUND" id="INBOUND" onchange="showTextArea()" placeholder="INBOUND"><option>No<option>Yes</select><br/>

//         <button type="button" onclick="ShowText();">Submit</button>
//         </form>
//         <p>Result:</p>
//         <p><textarea cols=40 rows=7 id="show" onClick='selectText(this);'></textarea></p>
          
//           <div id="location" style="display:none;"><p>Location:</p>
//         <p><textarea cols=40 rows=7  onClick='selectText(this);'></textarea>
//             </div>
//             </p>
            
//             <script>
//             function ShowText(){
             
//                 // find each input field inside the 'myForm' form:
//                 var inputs = myForm.querySelectorAll('input,select');
//                 // declare 'box' variable (textarea element):
//                 var box = document.getElementById('show');
//                 // clear the 'box':
//                 box.value = '';
//                 // loop through the input elements:
//                 for(var i=0; i<inputs.length; i++){
//                     // append 'name' and 'value' to the 'box':
//                     box.value += inputs[i].name + ': '+inputs[i].value+'\n';
//                 }
//             }M
//             function selectText(textField) 
//               {
//                 textField.focus();
//                 textField.select();
//               }
//               function showTextArea() 
//               {
//                 var e = document.getElementById("INBOUND");
//                 var strUser = e.options[e.selectedIndex].value;
                
//                 if(strUser == 'Yes')
//                   {
//                     document.getElementById('location').style.display = "block";
//                   }
//                 else
//                   {
//                     document.getElementById('location').style.display = "none";
//                     }
                
                
//               }
//             </script>
        
        
        
        
        
        
//         </body></html>