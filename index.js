let time = 3;
let randomTop =0
let randomWidth =0
let countdown = document.getElementById("countdown")
let background = document.getElementById("target-range")
let target= document.getElementById("target")
let pointsEl =document.getElementById("points")
let points = 48
let intervalId;

target.addEventListener("click", function(){
    getRandom()
    time = 3
    points += 1
    pointsEl.textContent = points
    target.style.marginTop = randomTop 
    target.style.marginLeft = randomWidth 
    countdown.textContent = time
    clearInterval(intervalId);
    countdownTimer()

      

    if (points > 19 && points < 40){
        background.style.backgroundColor = "lightblue"
        target.style.height = 30 +"px";
        target.style.width = 30 +"px";

    } else if (points > 39 && points < 50){
        background.style.backgroundColor = "lightcoral"
        target.style.height = 25 +"px";
        target.style.width = 25 +"px";
        target.style.backgroundColor = "green";
    } else if (points >49)  {
        target.style.display = "none";
        background.style.backgroundColor = "gray";
        background.style.backgroundImage = "url(win.gif)"
        background.style.backgroundRepeat = "no-repeat";
        background.style.backgroundSize = "500px";

    }
})


function getRandom (){
    randomTop = Math.floor(Math.random()*501) +"px"
    randomWidth = Math.floor(Math.random()*501) +"px"
}



function countdownTimer() {
    intervalId = setInterval(function() {
      time = time - 1;
      if (time <= 0 && points <50) {
        target.style.display = "none";
        background.style.backgroundColor = "gray";
        background.style.backgroundImage = "url(fail.gif)"
        background.style.backgroundRepeat = "no-repeat";
        background.style.backgroundSize = "500px";
        countdown.textContent = "ALL ABOARD THE FAIL TRAIN!"
        clearInterval(intervalId);
        return;
      }
      countdown.textContent = time;
    }, 1000);
  }
