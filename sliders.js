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

let batRange = document.querySelector('#batRange');
batRange.oninput = function (){
    if(batRange.value == 1) {
        document.querySelector('#batSpan').innerHTML = 'slow';
    } else if (batRange.value == 2) {
        document.querySelector('#batSpan').innerHTML = 'fast';
    } else if (batRange.value == 3) {
        document.querySelector('#batSpan').innerHTML = 'crazy';
    }
    
}