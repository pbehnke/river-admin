$(".image-slide > img").wrap("<div class='slide'></div>");
$(".slide").wrapAll("<div id='slideshow'></div>");

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 2000);

$('a').attr({ target: "_blank" });

$('div.wy-menu a').attr({ target: "_self" })