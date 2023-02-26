let time = 2;
let randomTop =0
let randomWidth =0
const countdown = document.getElementById("countdown")
const background = document.getElementById("target-range")
const audio = new Audio("shot.mp3");
const audioWin = new Audio("win.mp3");
const target= document.getElementById("target")
const pointsEl =document.getElementById("points")
let points = 0
let intervalId;
// target.style.display= "none";

target.addEventListener("click", function(){ 
    getRandom()
    time = 2
    points += 1
    pointsEl.textContent =("Poeng :" + points)
    target.style.marginTop = randomTop 
    target.style.marginLeft = randomWidth 
    // countdown.textContent = time
    clearInterval(intervalId);
    countdownTimer()
    audio.currentTime = 0; audio.play();
    
    if (points <9 && points >0 ) {
        countdown.textContent = time
    }
    if (points > 9 && points < 20){
        background.style.backgroundColor = "lightblue"
        target.style.height = 20 +"px";
        target.style.width = 20 +"px";

    } else if (points > 19 && points < 30){
        background.style.backgroundColor = "lightcoral"
        target.style.height = 10 +"px";
        target.style.width = 10 +"px";
        target.style.backgroundColor = "green";

    } else if (points >29)  {
        target.style.display = "none";
        background.style.backgroundColor = "gray";
        background.style.backgroundImage = "url(win.gif)"
        background.style.backgroundRepeat = "no-repeat";
        background.style.backgroundSize = "500px";
        audioWin.play();
        time= 5000
        countdown.style.display= "none";
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
        countdown.textContent = "For treigt! Trykk F5 og prøv igjen :D"
        clearInterval(intervalId);
        return;
      }
      countdown.textContent = time;
    }, 1000);
  }
