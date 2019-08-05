$(document).ready(function(){
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}


	// Click sign up to sign up
	$('#su').click(function(){
		allFilled = true;
		if($('#company-name').val() === ''){
			$('#warning-incorrect-input-for-su-name').addClass('show-warning-incorrect-input');
			allFilled = false;
		}
		if($('#su-email').val() === ''){
			$('#warning-incorrect-input-for-su-email').addClass('show-warning-incorrect-input');
			allFilled = false;
		}
		if($('#su-email').val() === ''){
			$('#warning-incorrect-input-for-su-email').addClass('show-warning-incorrect-input');
			allFilled = false;
		}
		else if(!isEmail($('#su-email').val())){
			$('#warning-incorrect-input-for-su-email>p').text("Wrong format");
			$('#warning-incorrect-input-for-su-email').addClass('show-warning-incorrect-input');
			allFilled = false;
		}
		if($('#su-country').text() === "Select country *"){
			$('#warning-incorrect-input-for-su-country').addClass('show-warning-incorrect-input');
			allFilled = false;
		}
		if($('#location').val() === ""){
			$('#warning-incorrect-input-for-su-location').addClass('show-warning-incorrect-input');
			allFilled = false;
		}
		if($('#password').val() === ""){
			$('#warning-incorrect-input-for-su-password').addClass('show-warning-incorrect-input');
			allFilled = false;
		}
		if($('#repassword').val() === ""){
			$('#warning-incorrect-input-for-su-repass').addClass('show-warning-incorrect-input');
			allFilled = false;
		}
		if($('#password').val() !== $('#repassword').val()){
			$('#warning-incorrect-input-for-su-repass>p').text('Password does not match')
			$('#warning-incorrect-input-for-su-repass').addClass('show-warning-incorrect-input');
			allFilled = false;
		}


		


	})
	$('#su-country-button').click(function(){
			$('#warning-incorrect-input-for-su-country').removeClass('show-warning-incorrect-input');
	})
})