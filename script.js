let timer = 60;
let score = 0;
let newHit = 0;

function incresscore(){
    score +=10;
    document.querySelector('#scoreval').textContent = score;
}
function makeBubble() {
    let clutter = ""

    for (let i = 1; i <= 126; i++) {
        let num = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${num}</div>`;

    }

    document.querySelector(".pbuttom").innerHTML = clutter;
}


function startTimer() {
    let timerint = setInterval(function () {

        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".pbuttom").innerHTML =`<h1>Game Over</h>`;
        }

    }, 1000)

}

function getnewhit() {

    newHit = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = newHit;

}

 document.querySelector(".pbuttom").addEventListener("click",function(bub){
    let clickednum = Number(bub.target.textContent);
    if(clickednum === newHit){
        incresscore()
        getnewhit()
        makeBubble()

    }
    
    
 })





getnewhit();
startTimer();
makeBubble();