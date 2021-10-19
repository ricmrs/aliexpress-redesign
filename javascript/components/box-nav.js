const btn = document.querySelector('.main-button.-second');
const box = document.querySelector('.box-nav')

btn.addEventListener('pointerover', function() {
    box.style = "visibility: visible;"
})

btn.addEventListener('pointerout', function() {
    box.style = "visibility: hidden;"
})