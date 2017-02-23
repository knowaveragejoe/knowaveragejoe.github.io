document.addEventListener('DOMContentLoaded', function(e) {
    let aboutLink = document.getElementById('about-link');

    aboutLink.addEventListener('click', e => {
        let aboutText = document.querySelector('.about');
        aboutText.classList.toggle('hidden');
    })
});