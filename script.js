let timer = 60;
let score = 0;
 let hitrn = "";
function runTimer(){
   let timerint =  setInterval(function() {
        if(timer>0){
        timer--;
    document.querySelector('#timer').innerHTML = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector('.bubble-container').innerHTML = `<h1> Game over</h1>`
        }
    },1000)
}



function makeBubble(){
    let clutter = '';

    for(i=1; i<=90; i++){
        formula = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${formula}</div>`;
        document.querySelector('.bubble-container').innerHTML = clutter;
        
    }
}

function hit(){
  hitrn = Math.floor(Math.random() * 10) ;
    document.querySelector('#hitn').innerHTML = hitrn ;


}

function scoreCount(){
score += 10;
document.querySelector('#score-set').innerHTML = score;

}

document.querySelector('.bubble-container')
.addEventListener('click',function(dets){
    clicked = (Number(dets.target.innerHTML));
if(hitrn === clicked){
    makeBubble();
hit();
scoreCount();
}
})


document.querySelector('.btn').addEventListener('click',function(){
    makeBubble();
    runTimer();
    hit();
})
