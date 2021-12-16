function starRate(event){
    const $origin = event.target
    const $siblings = $origin.parentNode.children
    const white = "url('https://api.iconify.design/codicon/star-full.svg?color=%23c4c4c4&height=14') center center / contain no-repeat"
    const orange = "url('https://api.iconify.design/codicon/star-full.svg?color=%23F03D3F&height=14') center center / contain no-repeat"
    rate($siblings, 4, white)
    for(i = 0; i <= 4; i++){
        if($origin === $siblings[i]){
            rate($siblings, i, orange);
            return;
        }
    }
}

function rate(stars, total, color) {
    for(i = 0; i <= total; i++){
        stars[i].style.background = color;
    }
}