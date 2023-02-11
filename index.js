let randomTop =0
let randomWidth =0
let background = document.getElementById("target-range")
let target= document.getElementById("target")
let pointsEl =document.getElementById("points")
let points = 0

target.addEventListener("click", function(){
    getRandom()
    points += 1
    pointsEl.textContent = points
    target.style.marginTop = randomTop 
    target.style.marginLeft = randomWidth 

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