/*
 *
 *  dsgvo-youtube
 *  https://github.com/Thejuse/dsgvo-youtube
 *  Version: 1.0.0
 *  MIT-Licence
 *
 */

function getUrlParameter(sParam, url) {
    var sPageURL = decodeURIComponent(url),
        sURLVariables = sPageURL.split('?'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function videoDoubleClick() {
    $('.vid-overlay').on('click', function(e){
        e.preventDefault();
        const elementID = $(this).attr('class').replace('vid-overlay', '').replace('vid-overlay-', '#vid-');
        const videoURL = $(elementID).data('videourl');
        const videoID = getUrlParameter('v', videoURL);

        $(elementID).find('.video-box').html('<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/' + videoID + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        $(elementID).addClass('video-activated');
    });
}
function videoIMG() {
    $('.youtube-video-container').each(function(){
        const videoURL = $(this).data('videourl');
        const videoID = getUrlParameter('v', videoURL);

        $(this).find('.image').css('background-image', 'url("https://i.ytimg.com/vi/' + videoID + '/maxresdefault.jpg")');
    });
}

$(document).ready(function(){
    videoDoubleClick();
    videoIMG();
});