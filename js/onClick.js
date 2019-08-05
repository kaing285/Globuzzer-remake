
function ClickSignUp(){
    $("#su-panel-holder").removeClass("show-su-panel-holder")
    $("#su-panel-holder").addClass("show-su-panel-holder")

    $("#si-panel-holder").removeClass("hide-si-panel-holder")
    $("#si-panel-holder").addClass("hide-si-panel-holder")
}

function ClickSignIn(){
    $("#su-panel-holder").removeClass("show-su-panel-holder")
    $("#si-panel-holder").removeClass("hide-si-panel-holder")
}
$("#su-country-content-holder").hide()

$("#su-country-button").on("click", function(){
    $("#su-country-content-holder").slideToggle(250)
})
function ChooseSuCountry(country){
	$('#su-country-button>p').text(country);
	if($('#su-country-button>p').text() == 'Sweden'){
		autocompleteSignInLocationAPI.setComponentRestrictions({
			'country': 'se'
		})
	}
	if($('#su-country-button>p').text() == 'Finland'){
		autocompleteSignInLocationAPI.setComponentRestrictions({
			'country': 'fi'
		})
	}
	if($('#su-country-button>p').text() == 'Denmark'){
		autocompleteSignInLocationAPI.setComponentRestrictions({
			'country': 'dk'
		})
	}
	if($('#su-country-button>p').text() == 'Norway'){
		autocompleteSignInLocationAPI.setComponentRestrictions({
			'country': 'no'
		})
	}
}

