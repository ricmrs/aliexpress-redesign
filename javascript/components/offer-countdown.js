window.onload = function() {
    const countdown = 12 * 60 * 60;
    display = document.querySelector('.wrapper-offer .countdown');
    startTimer(countdown, display);
}

function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function(){
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10); 
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + "h: " + minutes + "min: " + seconds + "s";

        if(--timer < 0){
            timer = duration;
        }
    }, 1000);  
}


