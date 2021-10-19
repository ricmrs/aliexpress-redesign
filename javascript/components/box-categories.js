const btn = document.querySelector('.main-button.-second');
const box = document.querySelector('.box-categories');

btn.addEventListener('pointerover', function() {
    box.style = "visibility: visible;"
});

btn.addEventListener('pointerout', function() {
    box.style = "visibility: hidden;"
});