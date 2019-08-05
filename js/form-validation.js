$(document).ready(function(){
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	function isPhoneNumb(number){
		var regex = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
		return regex.test(number);
	}
	function isURL(linkInput){
		var regex = new RegExp( "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
		return regex.test(linkInput);
	}
	// Choose country
		$('#finland').click(function(){
			$("#select-country>p").text("Finland");
			autocompleteSignUpCityAPI.setComponentRestrictions({
		      'country': 'fi'
		    })
			$("#company-country-validation").removeClass("show-warning-incorrect-input");
		})
		$('#sweden').click(function(){
			$("#select-country>p").text("Sweden");
			autocompleteSignUpCityAPI.setComponentRestrictions({
		      'country': 'se'
		    })
			$("#company-country-validation").removeClass("show-warning-incorrect-input");
		})
		$('#norway').click(function(){
			$("#select-country>p").text("Norway");
			autocompleteSignUpCityAPI.setComponentRestrictions({
		      'country': 'no'
		    })
			$("#company-country-validation").removeClass("show-warning-incorrect-input");
		})
		$('#denmark').click(function(){
			$("#select-country>p").text("Denmark");
			autocompleteSignUpCityAPI.setComponentRestrictions({
		      'country': 'dk'
		    })
			$("#company-country-validation").removeClass("show-warning-incorrect-input");
		})
	// Step1 email validation 
		function ValidationEmail(value){
		    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		    return value.match(pattern)

		}
	// Step2Choose job category
		$('#backEndDev').click(function(){
			$('#job-category>p').text("Back End Developer");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#frontEndDev').click(function(){
			$('#job-category>p').text("Front End Developer");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#fullStackDev').click(function(){
			$('#job-category>p').text("Full Stack Developer");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#androidDev').click(function(){
			$('#job-category>p').text("Android Developer");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#iosDev').click(function(){
			$('#job-category>p').text("iOS Developer");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#businessDev').click(function(){
			$('#job-category>p').text("Business Developer");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#businessIntel').click(function(){
			$('#job-category>p').text("Business Intelligence");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#customerSer').click(function(){
			$('#job-category>p').text("Customer Service");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#designJob').click(function(){
			$('#job-category>p').text("Design");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#marketingCom').click(function(){
			$('#job-category>p').text("Marketing & Communication");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#projectMana').click(function(){
			$('#job-category>p').text("Project Management");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#salesJob').click(function(){
			$('#job-category>p').text("Sales");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
		$('#othersJob').click(function(){
			$('#job-category>p').text("Others");
			$("#job-category-validation").removeClass("show-warning-incorrect-input");
		})
	// Step2 select country selection
		$('#step2-finland').click(function(){
			$('#job-country>p').text("Finland");
			autocompleteJobCityAPI.setComponentRestrictions({
		      'country': 'fi'
		    })
			$("#job-country-validation").removeClass("show-warning-incorrect-input");
		})
		$('#step2-sweden').click(function(){
			$('#job-country>p').text("Sweden");
			autocompleteJobCityAPI.setComponentRestrictions({
		      'country': 'se'
		    })
			$("#job-country-validation").removeClass("show-warning-incorrect-input");
		})
		$('#step2-norway').click(function(){
			$('#job-country>p').text("Norway");
			autocompleteJobCityAPI.setComponentRestrictions({
		      'country': 'no'
		    })
			$("#job-country-validation").removeClass("show-warning-incorrect-input");
		})
		$('#step2-denmark').click(function(){
			$('#job-country>p').text("Denmark");
			autocompleteJobCityAPI.setComponentRestrictions({
		      'country': 'dk'
		    })
			$("#job-country-validation").removeClass("show-warning-incorrect-input");
		})
	// step 2 position selection
		$('#intern').click(function(){
			$('#job-position>p').text("Intern");
			$("#job-position-validation").removeClass("show-warning-incorrect-input");
		})
		$('#trainee').click(function(){
			$('#job-position>p').text("Trainee");
			$("#job-position-validation").removeClass("show-warning-incorrect-input");
		})
		$('#fullTime').click(function(){
			$('#job-position>p').text("Fulltime");
			$("#job-position-validation").removeClass("show-warning-incorrect-input");
		})
		$('#partTime').click(function(){
			$('#job-position>p').text("Part-time");
			$("#job-position-validation").removeClass("show-warning-incorrect-input");
		})
		$('#contract').click(function(){
			$('#job-position>p').text("Contract");
			$("#job-position-validation").removeClass("show-warning-incorrect-input");
		})
	// step 2 salary selection
		$('#paid').click(function(){
			$('#job-salary>p').text("Paid");
			$("#job-salary-validation").removeClass("show-warning-incorrect-input");
		})
		$('#unPaid').click(function(){
			$('#job-salary>p').text("Unpaid");
			$("#job-salary-validation").removeClass("show-warning-incorrect-input");
		})

		
	// Press the creat account button
	// step1
	$('#company-create-account-button').click(function(){
		console.log('hello');
		var companyName = $('#company-name'),
			companyEmail = $('#company-email'),
			companyCountry = $('#select-country>p'),
			companyCity = $('#company-city-input'),
			companyPass = $('#company-pass'),
			companyRePass = $('#company-repass');
		var allSet = true;
		if(companyEmail.val() === ""){
			$("#company-email-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if(!ValidationEmail(companyEmail.val()) && companyEmail.val() !==""){

			$("#company-email-validation>p").text("Wrong format")
			$("#company-email-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if(companyName.val() === ""){
			$("#company-name-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if(companyCountry.text() === "Select country *"){
			$("#company-country-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if(companyCity.val() === ""){
			$("#company-city-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if(companyPass.val() === ""){
			$("#company-pass-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if(companyRePass.val() === ""){
			$("#company-repass-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		else if(companyRePass.val() !== companyPass.val()){
			$("#company-repass-validation").addClass("show-warning-incorrect-input");
			$("#company-repass-validation>p").text("Doesn't match")
			allSet = false;
		}

		// chỗ này lỗi
		// chỗ này lỗi

		// if($('.regist-country-mobile')[0].selectedIndex <= 0) {
		// 	$('.regist-country-mobile').siblings('.warning-incorrect-input').addClass("show-warning-incorrect-input");
		// }




		// All are set
		if(allSet){
			// click register button to show hidden right banner
		    
			        $('.company-registration-holder').css({'display':'none'});
			        $('.public-first-job-holder').css({'display':'block'});
			        $('#step-nav1').removeClass('step-nav-point-choosen');
			        $('#step-nav2').addClass('step-nav-point-choosen');
		}
	});
	// step 2 process
	$('.image-custom input[type="file"]').change(function(e){
		$('#image-drop-display>p').text(e.target.files[0].name);
		$('#job-cv-validation').removeClass('show-warning-incorrect-input');
	})
	$('#deadline-title').click(function(){
		$('#deadline-display').css({'display':'none'});
		$('#deadline-title').css({'display':'flex'});
		
	})
	$('#deadline-title').mouseout(function(){
		if ($('#deadline-title').val() !== "") {
			$("#job-letter-validation").removeClass("show-warning-incorrect-input");
			allSet = false;
		}
	})


	// step 2 validation
	$("#step2-publish").click(function(){
		console.log('hello step 2');
		var title = $("#job-title"),
			category = $("#job-category>p"),
			country = $("#job-country>p"),
			city = $("#city-title"),
			position = $("#job-position>p"),
			salary = $("#job-salary>p"),
			image = $(".image-drop-title>p"),
			letter = $("#deadline-title"),
			description = $("#job-description"),
			requirement = $("#job-requirement");
		var allSet = true;

		if (title.val() === "") {
			$("#job-title-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if (category.text() === "Category *") {
			$("#job-category-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if (country.text() === "Country *") {
			$("#job-country-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if (city.val() === "") {
			$("#job-city-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if (position.text() === "Position *") {
			$("#job-position-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if (salary.text() === "Salary *") {
			$("#job-salary-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		// image validation here

		if (image.text() === "Drop an image") {
			$("#job-cv-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if (letter.val() === "") {
			$("#job-letter-validation").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if(allSet){
			// click register button to show hidden right banner
		    
			        $('.public-first-job-holder').css({'display':'none'});
			        $('.access-dashboard-holder').css({'display':'block'});
			        $('#step-nav2').removeClass('step-nav-point-choosen');
			        $('#step-nav3').addClass('step-nav-point-choosen');
		}
	});
	// User registration validation process data
	$('.db-cv-holder-cv input[type="file"]').change(function(e){
		$('.app-cv>p').text(e.target.files[0].name);
		$('#db-app-warning').removeClass('show-warning-incorrect-input');
	})
	$('.db-cv-holder-letter input[type="file"]').change(function(e){
		$('.app-cover>p').text(e.target.files[0].name);
		$('#db-cv-warning').removeClass('show-warning-incorrect-input');
	})
	// user registration on drop file and company drop image
	// Prevent page from redirecting
	

    $("html").on("drop", function(e) { 
    	e.preventDefault(); e.stopPropagation(); 
    });

    // Drag over
    $('.app-cv').on('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.app-cv>p').text("Drop here");
    });
    $('.app-cover').on('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.app-cover>p').text("Drop here");
    });
    $('#image-drop-display').on('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('#image-drop-display>p').text("Drop here");
    });


    // drag leave
    $('.app-cv').on('dragleave',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.app-cv>p').text("Drop cv *(.pdf, .doc, .docx)");
    })
    $('.app-cover').on('dragleave',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.app-cover>p').text("Drop cover letter *(.pdf, .doc, .docx)");
    })
    $('#image-drop-display').on('dragleave',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#image-drop-display>p').text("Drop an image");
    })
    

    // drop
    $('.app-cv').on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();

        var file = e.originalEvent.dataTransfer.files[0];
        $('.app-cv>p').text(file.name);
		$('#db-app-warning').removeClass('show-warning-incorrect-input');

        // var fd = new FormData();

        // fd.append('file', file[0]);

        // uploadData(fd);
    });
    $('.app-cover').on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();

        var file = e.originalEvent.dataTransfer.files[0];
        $('.app-cover>p').text(file.name);
		$('#db-cv-warning').removeClass('show-warning-incorrect-input');
    });
    $('#image-drop-display').on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();

        var file = e.originalEvent.dataTransfer.files[0];
        $('#image-drop-display>p').text(file.name);
		$('#job-cv-validation').removeClass('show-warning-incorrect-input');
    });



	// User registration validation
	$("#db-apply-apply").click(function(){
		allSet = true;
		if ($("#app-first-name").val() === "") {
			$("#app-first-name-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if ($("#app-last-name").val() === "") {
			$("#app-last-name-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		// email validation
		if (!ValidationEmail($("#db-email").val()) && $("#db-email").val() !== "") {
			$("#db-email-warning>p").text("Wrong format");
			$("#db-email-warning").addClass("show-warning-incorrect-input");

			allSet = false;
		}
		if($("#db-email").val() === ""){
			$("#db-email-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}

		
		// phone validation
		if(!isPhoneNumb($("#app-phone-number").val()) && $("#app-phone-number").val() !== ""){
			$("#app-phone-number-warning>p").text("9 to 10 digits");
			$("#app-phone-number-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if ($("#app-phone-number").val() === "") {
			$("#app-phone-number-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}

		if ($("#app-location").val() === "") {
			$("#app-location-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		// CV and cover letter validation
		if ($('.app-cv>p').text() === 'Drop cv *(.pdf, .doc, .docx)')  {
			$("#db-app-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		if ($('.app-cover>p').text() === 'Drop cover letter *(.pdf, .doc, .docx)') {
			$("#db-cv-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}

		// Accept term and condition
		if($(".accept-terms-condition").prop('checked') == false){
			$("#accept-terms-condition-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		else if($(".accept-terms-condition").prop('checked') == true){
			$("#accept-terms-condition-warning").removeClass("show-warning-incorrect-input");
			allSet = true;
		}

		// Personal link validation if typed
		if(!isURL($('#db-link').val()) && $('#db-link').val() !== "" || $('#db-link').val() === "" ){
			$('#per-link-warning').addClass('show-warning-incorrect-input');
			allSet = false;
		}
		if(isURL($('#db-link').val())){
			$('#per-link-warning').removeClass('show-warning-incorrect-input');
			allSet = true;
		}

		
		// About you validation
		if ($("#db-about").val() === "") {
			$("#db-about-warning").addClass("show-warning-incorrect-input");
			allSet = false;
		}

		if(allSet){
        	$(".job-application-form-desktop").css({'top': '-1000px'});
        	$('.success-apply-box').css({'top':'50%'});
		}

	})
	



	$(".accept-terms-condition").click(function(){
		$("#accept-terms-condition-warning").removeClass("show-warning-incorrect-input");
			allSet = true;
	})
	$(".app-cv").click(function(){
		$("#db-app-warning").removeClass("show-warning-incorrect-input");
	})
	$(".app-cover").click(function(){
		$("#db-cv-warning").removeClass("show-warning-incorrect-input");
	})

	
	
	// admin application
	$('.apply').click(function(e) {
		e.preventDefault();
		if($('.application-required').val() === '') {
			$(".warning-incorrect-input").addClass("show-warning-incorrect-input");
			allSet = false;
		}
		// new code
		if(!$('terms-checkbox').prop('checked', true)) {
			$(".warning-incorrect-input").addClass("show-warning-incorrect-input");
			allSet = false;
		} 
		// function isEmail(email) {
		// 	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		// 	return regex.test(email);
		// }
		let email = $('#application-email').val();
		// console.log(isEmail(email));
		if(!isEmail(email)) {
			$('#application-email').siblings('.warning-incorrect-input').addClass("show-warning-incorrect-input");
		} else {
			$('#application-email').siblings('.warning-incorrect-input').removeClass("show-warning-incorrect-input");
		}
	})
	$('.terms-checkbox').change(function() {
		if (this.checked) {
			console.log('hello')
			$(this).siblings(".warning-incorrect-input").removeClass("show-warning-incorrect-input");
			allSet = false;
		}
	}) 
	$('.sign-in').click(function(e) {
		e.preventDefault();
		if ($('.signin-required').val() === '') {
			$(".signin-required").siblings('.warning-incorrect-input').addClass("show-warning-incorrect-input");
		}

		if ($('.signin-email').val() !== '') {
			if (!isEmail($('.signin-email').val())) {
				$('.signin-email').siblings('.warning-incorrect-input').addClass("show-warning-incorrect-input");
				$('.signin-email').siblings('.warning-incorrect-input').children().text('Wrong format');
			} else {
				$('.signin-email').siblings('.warning-incorrect-input').removeClass("show-warning-incorrect-input");
			}
		}
		
	});
	$('.sign-up').click(function(e) {
		e.preventDefault();
		if ($('.signup-required').val() === '') {
			$('.signup-required').siblings(".warning-incorrect-input").addClass("show-warning-incorrect-input");
		}

		if ($('.signup-email').val() !== '') {
			if (!isEmail($('.signup-email').val())) {
				$('.signup-email').siblings('.warning-incorrect-input').addClass("show-warning-incorrect-input");
				$('.signup-email').siblings('.warning-incorrect-input').children().text('Wrong format');
			} else {
				$('.signup-email').siblings('.warning-incorrect-input').removeClass("show-warning-incorrect-input");
			}
		};
		
		if($("input[name='password']").val() !== $("input[name='repassword']").val()) {
			$("input[name='password']").siblings(".warning-incorrect-input").removeClass('show-warning-incorrect-input');
			$("input[name='repassword']").siblings(".warning-incorrect-input").addClass('show-warning-incorrect-input');
			$("input[name='repassword']").siblings(".warning-incorrect-input").children().text("Password doesn't match");
		}

		if ($('.country-selector')[0].selectedIndex <= 0) {
			$('.country-selector').siblings('.warning-incorrect-input').addClass("show-warning-incorrect-input");
		}
	})
});