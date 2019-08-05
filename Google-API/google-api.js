

//step 2
var jobCityInput = document.getElementById("city-title");

var autocompleteJobCityAPI = new google.maps.places.Autocomplete(jobCityInput);

// step 1
var signUpCityInput = document.getElementById("company-city-input");

var autocompleteSignUpCityAPI = new google.maps.places.Autocomplete(signUpCityInput);


// user register location
var applicantLocationInput = document.getElementById("app-location");

var autocompleteApplicantLocationAPI = new google.maps.places.Autocomplete(applicantLocationInput)

// Create account sign in city
var signInLocationInput = document.getElementById("location");

var autocompleteSignInLocationAPI = new google.maps.places.Autocomplete(signInLocationInput)