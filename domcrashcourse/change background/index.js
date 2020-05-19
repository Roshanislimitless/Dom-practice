document.querySelector('button:nth-child(1)').addEventListener('click', manualChange);
document.querySelector('button:nth-child(2)').addEventListener('click', autoColorChange);
document.querySelector('button:nth-child(3)').addEventListener('click', manualStop);
document.querySelectorAll('button').forEach(any=>any.style.margin = '200px')
let r = 255;
let g = 255;
let b = 255;

function colorChange(){
     r = Math.floor(255 * Math.random());
    g = Math.floor(255 * Math.random());
    b = Math.floor(255 * Math.random());
    document.body.style.background = "rgb("+r+", "+g+", "+b+")";
}
function manualChange(){
     manualStop();
     colorChange();

}
let myInterval;
function autoColorChange(){
    manualStop()
    myInterval = setInterval(colorChange, 1000)
}

function manualStop(){
    clearInterval(myInterval);
}