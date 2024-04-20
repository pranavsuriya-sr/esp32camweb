const container = document.querySelector('.container');
const fullScreenBtn = document.querySelector('.fullscreen');
const logoutBtn = document.querySelector('.btn');


fullScreenBtn.addEventListener('click', () => {
    container.classList.toggle('fullscreen');
    if (document.fullscreenElement) {
        fullScreenBtn.classList.replace('fa-compress', 'fa-expand');
        return document.exitFullscreen();
    }
    fullScreenBtn.classList.replace('fa-expand', 'fa-compress');
    container.requestFullscreen();
});

logoutBtn.addEventListener('click', () => {
    window.location.href = 'https://akshaygrandhi123.github.io/esp32camweb/';
});