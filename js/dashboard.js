$(document).ready(function () {
    $('.publish-job').click(function () {
        $('body').css({'position': 'fixed', 'top': 0});
        $('.apply-modal').css('display', 'flex');
        $('.upgrade-plan').css('display', 'flex');
    });
    $('.close-modal, .apply-modal').click(function() {
        $('body').css({'position': '', 'top': ''});
        $('.apply-modal').css('display', 'none');
        $('.upgrade-plan').css('display', 'none');
    })
})