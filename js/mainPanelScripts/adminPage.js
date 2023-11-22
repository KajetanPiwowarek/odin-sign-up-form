function openPanel(){
  document.querySelector(".panel").style.width = "200px";
  document.querySelector(".main").style.marginLeft = "200px";
  document.querySelector(".links").style.visibility = "visible";
}

function closePanel(){
  document.querySelector(".panel").style.width = "70px";
  document.querySelector(".main").style.marginLeft = "70px";
  document.querySelector(".links").style.visibility = "hidden";
}