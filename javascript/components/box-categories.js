const btn = document.querySelector('.main-button.-second');
const box = document.querySelector('.box-categories');

btn.addEventListener('pointerover', function() {
    box.style = "visibility: visible;"
});

btn.addEventListener('pointerout', function() {
    box.style = "visibility: hidden;"
    items.style = "visibility: hidden;"
});

const items = document.querySelector('.box-items');

box.addEventListener('pointerover', function() {
    items.style = "visibility: visible;"
});

items.addEventListener('pointerover', function() {
    items.style = "visibility: visible;"
});

items.addEventListener('pointerout', function() {
    items.style = "visibility: hidden;"
});