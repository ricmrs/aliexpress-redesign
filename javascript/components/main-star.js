const $star = document.querySelectorAll('.main-star');

function hoverRate(event){
    const $origin = event.target
    const $siblings = $origin.parentNode.children
    const orange = "url('https://api.iconify.design/codicon/star-full.svg?color=%23F03D3F&height=14') center center / contain no-repeat"
    cleanRate(event)
    for(i = 0; i <= 4; i++){
        if($origin === $siblings[i]){
            rate($siblings, i, orange);
            return;
        }
    }
}

function cleanRate(event){
    const $origin = event.target
    const $siblings = $origin.parentNode.children
    const white = "url('https://api.iconify.design/codicon/star-full.svg?color=%23c4c4c4&height=14') center center / contain no-repeat"
    rate($siblings, 4, white)
}

function rate(stars, total, color){
    for(i = 0; i <= total; i++){
        stars[i].style.background = color;
    }
}

function clickRate(event){
    const $origin = event.target
    const $siblings = $origin.parentNode.children
    for(i = 0; i <= 4; i++){
        $siblings[i].removeEventListener('mouseenter', hoverRate)
        $siblings[i].removeEventListener('mouseout', cleanRate)
        $siblings[i].addEventListener('click', hoverRate)
    }
}

for(i = 0; i < $star.length; i++){
    $star[i].addEventListener('mouseenter', hoverRate)
    $star[i].addEventListener('mouseout', cleanRate)
}