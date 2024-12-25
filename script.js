const globe = document.getElementById('snowGlobe');
const snowflakes = document.querySelectorAll('.snow');

globe.addEventListener('click', function() {
    const globeElement = this.querySelector('.globe');
    const snowGlobe = document.querySelector('.snowGlobe');

    snowGlobe.classList.remove('shaking');
    void globeElement.offsetWidth;
    snowGlobe.classList.add('shaking');

    globeElement.classList.remove('snow-active');
    void globeElement.offsetWidth;
    globeElement.classList.add('snow-active');
});

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'o6wJSwbKbds',
        height: '0',
        width: '0',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'volume': 30  // Set volume to 50%
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    player.playVideo();
}