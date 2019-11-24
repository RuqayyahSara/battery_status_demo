function cbattery(){
    setTimeout(function(){
        a.innerHTML="&#xf244";
    },500);
    setTimeout(function(){
        a.innerHTML="&#xf243";
    },1000);
    setTimeout(function(){
        a.innerHTML="&#xf242";
    },1500);
    setTimeout(function(){
        a.innerHTML="&#xf241";
    },2000);
    setTimeout(function(){
        a.innerHTML="&#xf240";
    },2500);
}

var colors = document.querySelector(".fa");
var a = document.getElementById("batteryStatus");
var charging = document.getElementById("charging");
var time = document.getElementById("time");

navigator.getBattery().then(function(battery){
    // calculating battery percentage
    let level = Math.floor(battery.level * 100) + '%';
    document.getElementById("levels").innerHTML = level;
    
    // Checking battery status
    var charge = (battery.charging ? "  charging" : "  discharging") ;
    charging.innerHTML=charge;
    
    // If device is charging
    if(battery.charging===true){
    var timeLeft = battery.chargingTime / 3600;
    time.innerHTML=  ""+timeLeft.toFixed(2)+" hr (to charge)";
    setInterval(cbattery,2600);
    }
    
    // if device is uncharged
    if(battery.charging===false){
        var timeLeft = battery.dischargingTime/3600;
        time.innerHTML= ""+timeLeft.toFixed(2)+" hr (to discharge)";
    }
    
    // setting color for certain battery percentages
    if(battery.level>=0.9 && battery.level<=1.0){
    a.innerHTML="&#xf240";
    colors.style.color="rgb(75, 201, 37)";
    }
    else if(battery.level>=0.6 && battery.level<0.9){
    a.innerHTML="&#xf241";
    colors.style.color=" rgb(193, 255, 47)";
    }
    else if(battery.level>0.4 && battery.level<0.6){
    a.innerHTML="&#xf242";
    colors.style.color="rgb(237, 253, 8)";
    }
    else if(battery.level>0.25 && battery.level<=0.4){
    a.innerHTML="&#xf243";
    colors.style.color="rgb(231, 94, 31)";
    }
    else{
    a.innerHTML="&#xf244";
    colors.style.color="rgb(247, 25, 9)";
    }
  });