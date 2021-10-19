const categElect = document.querySelector('.main-categorie.-electronics');
const items = document.querySelector('.box-items');

categElect.addEventListener('pointerover', function() {
    items.style = "visibility: visible;"
});

categElect.addEventListener('pointerout', function() {
    items.style = "visibility: hidden;"
});

items.addEventListener('pointerover', function() {
    items.style = "visibility: visible;"
});

items.addEventListener('pointerout', function() {
    items.style = "visibility: hidden;"
});