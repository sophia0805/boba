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