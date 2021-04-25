
   

function digitalClock(){
 let date=new Date();
    let hours=date.getHours();
    let mins = date.getMinutes();
    let  seconds = date.getSeconds();
    let format = 'AM';


    if(hours==0){
        hours =12
    }
    if(hours >12){
        hours= hours-12
        format= "PM"
    }
    hours= hours<10? '0'+hours :hours
  mins= mins<10? '0'+mins:mins
    seconds= seconds<10? '0'+seconds :seconds 

  let   finalTime = hours +":"+mins + ":" + seconds;
  document.getElementById('time').innerText= finalTime;
  document.querySelector('small').innerText=format;


}


setInterval(digitalClock,1000)