// script.js
document.addEventListener('DOMContentLoaded', () => {
    const infoBoxes = document.querySelectorAll('.info-box');

    infoBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.05)';
            box.style.transition = 'transform 0.3s ease';
        });

        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
        });
    });
});