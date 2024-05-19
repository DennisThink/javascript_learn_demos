//Calling showTime function at every second
setInterval(showTime,1000);

//Defining showTime function
function showTime(){
    //Getting current time and date
    let curTime = new Date();
    let hour = curTime.getHours();
    let min = curTime.getMinutes();
    let sec = curTime.getSeconds();
    am_pm = "AM";

    //Settinig time for 12 Hrs format
    if(hour >= 12){
        if(hour > 12) {
            hour -= 12;
        }
        am_pm="PM";
    }else if (hour == 0){
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10? "0"+hour:hour;
    min = min < 10 ? "0"+min:min;
    sec = sec < 10 ? "0"+sec:sec;

    let curTimeShow = hour+":"+
                      min+":"+
                      sec+" "+
                      am_pm;

    //Displaying the time
    document.getElementById("clock").innerHTML=curTimeShow;
}
showTime();