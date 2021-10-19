const btn = document.querySelector('.main-button.-second');
const box = document.querySelector('.box-nav')

console.log(btn);
console.log(box);

btn.addEventListener('pointerover', function() {
    box.style = "visibility: visible;"
})

btn.addEventListener('pointerout', function() {
    box.style = "visibility: hidden;"
})