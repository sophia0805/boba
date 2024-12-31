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

function updateCountdown() {
    const newyears = new Date(new Date().getFullYear()+1, 0, 1);
    const now = new Date();
    const diff = newyears - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

let wishes = [];

function addWish() {
    const input = document.getElementById('wishInput');
    if (input.value.trim()) {
        wishes.push(input.value);
        updateWishlist();
        input.value = '';
    }
}

function removeWish(index) {
    wishes.splice(index, 1);
    updateWishlist();
}

function updateWishlist() {
    const container = document.getElementById('wishlist-items');
    container.innerHTML = wishes.map((wish, index) => `
        <div class="wishlist-item">
            <span>${wish}</span>
            <button class="btn" onclick="removeWish(${index})">❌</button>
        </div>
    `).join('');
}