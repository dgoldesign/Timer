let circle = document.querySelector("#circle");
let circleicon = document.querySelector("#circle i");
let timerIcon = document.querySelector("header i");
let seconds = 1;
let minutes = 0;
let hours = 0;
let secText = document.querySelector("#secText");
let minText = document.querySelector("#minText");
let hourText = document.querySelector("#hourText");
let intervalid;
let rotate = 0;
circle.onclick = function (){
    //flipping icon from play to pause
if(circleicon.classList.contains("fa-play")){
    circleicon.classList.replace("fa-play", "fa-pause")
//starting timer

setInterval(
    ()=>{
        //returniing seconds to 0 if it gets to 1
        if(seconds > 50){
            seconds = 0;
        }
        rotate+=20;
        
        secText.innerHTML = `${seconds < 10 ?`0${seconds}` : seconds}`
        seconds++;
        //Rotate timer
        timerIcon.style.transform = `translate (-50%, 0) rotate(${rotate}deg)`
        // document.querySelector("#timer").innerHTML = seconds;
    }, 1000)

     //Adding rotation to timer
     timerIcon.classList.add("rotate")
}    else{
    circleicon.classList.replace("fa-pause", "fa-play")
    timerIcon.classList.remove("rotate")
}


};