// making resizable navbar
$(document).ready(function () {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
            $('#headerLogo').attr("src","img/logo_shrink.png");
            $('#headerLogo').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
            $('#headerLogo').attr("src","img/logo.png");
            $('#headerLogo').removeClass('shrink');
        }
    });
});

// smooth transition to page parts
function scrollToAnchor(aid) {
    var aTag = $("#" + aid);
    $('html,body').animate(
        {
            scrollTop: aTag.offset().top - ($('#topNav').height())
        },'slow');
}

// partners rotation
$('.click-btn').click(function(){
    $(this).parents('.flip').find('.card').toggleClass('flipped');
});
