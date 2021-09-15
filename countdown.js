const element = document.querySelector(".countdown")
let sec = 10;
setInterval(()=>{
  if(sec==0){
    element.innerHTML = "HAPPY NEW YEAR";
    element.style.color="red"
  }
  if(sec<0){
    sec = 10;
    element.style.color="black"
  }
  if(sec>0){
 element.innerHTML = sec;
 element.style.color="black"
  }
    sec--;
  
},1000);