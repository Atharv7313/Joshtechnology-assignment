function toggleMenu() {
    const menu = document.getElementById('menu');
    const currentLeft = menu.style.left;

    // Slide the menu in/out by changing the 'left' property
    if (currentLeft === '0px') {
        menu.style.left = '-280px'; // Slide out
    } else {
        menu.style.left = '0px'; // Slide in
    }
}
function closeMenu() {
    const menu = document.getElementById('menu');
    const currentLeft = menu.style.left;

    // Slide the menu in/out by changing the 'left' property
    if (currentLeft === '0px') {
        menu.style.left = '-280px'; // Slide out
    } else {
        menu.style.left = '0px'; // Slide in
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('tutorial-video');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playButton.classList.add('paused');
        } else {
            video.pause();
            playButton.classList.remove('paused');
        }
    });

    // Hide play button when video ends
    video.addEventListener('ended', function () {
        playButton.classList.remove('paused');
    });

    // Show play button when video is clicked
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playButton.classList.add('paused');
        } else {
            video.pause();
            playButton.classList.remove('paused');
        }
    });
});