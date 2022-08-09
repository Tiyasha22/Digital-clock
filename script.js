const hourElement=document.getElementById("hour");
const  minElement=document.getElementById("minutes");
const secondELement=document.getElementById("seconds");
const ampmElement=document.getElementById("ampm");

function updateClock(){
    let hour=new Date().getHours();
    let min=new Date().getMinutes();
    let sec=new Date().getSeconds();
    let ampm="AM" 

    if (hour>12){
        hour=hour-12;
        ampm="PM"
    }
hour=hour<10?"0"+hour:hour;
min=min<10?"0"+min:min;
sec=sec<10?"0"+sec:sec;
    hourElement.innerText=hour;
    minElement.innerText=min;
    secondELement.innerText=sec;
    ampmElement.innerText=ampm

    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()