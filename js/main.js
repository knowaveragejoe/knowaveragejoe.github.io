document.addEventListener('DOMContentLoaded', function(e) {
    let menuButtons = document.querySelectorAll('.menu-button');

    menuButtons.forEach(e => {
        e.addEventListener('click', expandPanel);
    });

    function expandPanel(e) {
        let panelTarget = e.target.getAttribute('data-panel-target');
        if (!panelTarget) return;

        let panel = document.getElementById(panelTarget);
        panel.classList.toggle('hidden');
    };
});