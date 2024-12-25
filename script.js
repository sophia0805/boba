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
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'playsinline': 1,
            'enablejsapi': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Need user interaction first
    document.addEventListener('click', function() {
        event.target.playVideo();
        event.target.unMute();
        event.target.setVolume(50);
    }, { once: true });
}