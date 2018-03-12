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
function scrollTo(to, duration) {
    if (document.body.scrollTop === to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = element.scrollTop;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop !== to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        }
        else { clearInterval(scrollInterval); }
    },10);
}

function menuScroll(elID)
{
    console.log("helo");
    var scroll = document.getElementById(elID);
    scrollTo(scroll.offsetTop, 500);
}

// partners rotation
$('.flip').click(function(){
    $(this).find('.card').toggleClass('flipped');

});

