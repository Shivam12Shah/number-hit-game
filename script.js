
var botm = document.querySelector("#botm");

var top = document.querySelector("#top")
var timer = 60;
var scrore = 0;
var hitVal;
function bubbleCreate(){
    botm.innerHTML = "";
    for(var i=0; i<90; i++){
        var rn= Math.floor(Math.random()*10);
        botm.innerHTML += `<div class="bubble">${rn}</div>`
    }
    
}

function startTimer(){
    setInterval(function(){
        timer--;
        if(timer>=0){
            document.querySelector("#timmer-div").textContent = `${timer}`;
        }
        else{
            botm.innerHTML = "";
            
            botm.innerHTML = `<div id="game">
            <h1>Your score <span>${scrore}</span></h1>
            <h1>Game over</h1>
            
        </div>`;
        }
    },1000)
}


function getHit(){
    hitVal =Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = `${hitVal}`
}


function score(){
    scrore+=10;
    document.querySelector("#score").textContent = `${scrore}`
}


bubbleCreate();
getHit();
startTimer();

botm.addEventListener("click", function(dets){
    if(Number(dets.target.textContent) === hitVal){
        score();
        bubbleCreate();
        getHit();
    }
    else{

    }
})