// header.js
Template.header.events({

	'click': function(event) {

		if (!event.target.matches('.moreinfo')) {

    	var dropdowns = document.getElementsByClassName("dropdown-content");
    	var i;
    	for (i = 0; i < dropdowns.length; i++) {
      	var openDropdown = dropdowns[i];
      	if (openDropdown.classList.contains('show')) {
        	openDropdown.classList.remove('show');
      	}
    	}
  	}
	},

	'click #moreinfo':function(event) {
   		document.getElementById("myDropdown").classList.toggle("show");
	},

	'click .logout': ()=> {
		AccountsTemplates.logout();
	}

// Close the dropdown menu if the user clicks outside of it


})
