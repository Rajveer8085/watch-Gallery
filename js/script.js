
let name = document.getElementById("forname")
let btns = document.getElementById("btns") 
let error  =document.getElementById("error")
btns.addEventListener("click",()=>{
    if(name.value == ""){
      error.innerText = "please check fill details"
      alert("error")
    }
    else{
      
      alert("you are successfully submited")
    }
})
function date(){
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let z = "AM"
if(h>12){
  h-=12
  z = "PM"
}
document.getElementById("time").innerHTML = `${h}:${m}:${s}${z}`
}
setInterval(date,1000)

 let icon = document.getElementById("toogle")
 icon.addEventListener("click",()=>{
  let menu = document.getElementById("menu")
  if(menu.className === "for_nav"){
    menu.removeAttribute("class")
    menu.setAttribute("class","for_navs1")
  }
  else{
    menu.className = "for_nav"
  }
 })