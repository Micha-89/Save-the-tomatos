let tomatosRange = document.querySelector('#tomatosRange');
document.querySelector('#numberTomatos').innerHTML = tomatosRange.value;
document.querySelector('#tomatosSpan').innerHTML = tomatosRange.value;
tomatosRange.oninput = function (){
    document.querySelector('#numberTomatos').innerHTML = tomatosRange.value;
    document.querySelector('#tomatosSpan').innerHTML = tomatosRange.value;
}

let livesRange = document.querySelector('#livesRange');
document.querySelector('#livesSpan').innerHTML = livesRange.value;
livesRange.oninput = function (){
    document.querySelector('#livesSpan').innerHTML = livesRange.value;
}

let timerRange = document.querySelector('#timerRange');
document.querySelector('#timerSpan').innerHTML = timerRange.value;
timerRange.oninput = function (){
    document.querySelector('#timerSpan').innerHTML = timerRange.value;
}