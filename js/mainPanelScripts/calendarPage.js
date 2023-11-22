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

function loadData() {
  let today = document.querySelector(".today");
  let secondDay = document.querySelector(".secondDay");
  let thirdDay = document.querySelector(".thirdDay");
  let forthDay = document.querySelector(".forthDay");
  let fifthDay = document.querySelector(".fifthDay");
  let sixthDay = document.querySelector(".sixthDay");
  let seventhDay = document.querySelector(".seventhDay");

  let now = new Date();

  if(now.getMonth()+1 == 1 || now.getMonth()+1 == 3 || now.getMonth()+1 == 5 || now.getMonth()+1 == 7 || now.getMonth()+1 == 8 || now.getMonth()+1 == 10 || now.getMonth()+1 == 12 ) {
    if(now.getDate() <= 25) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate()+3} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate()+4} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `${now.getDate()+5} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `${now.getDate()+6} . ${now.getMonth()+1} . ${now.getFullYear()}`;
    } else if (now.getDate() == 26) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate()+3} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate()+4} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `${now.getDate()+5} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 27) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate()+3} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate()+4} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 28) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate()+3} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `3 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 29) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `3 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `4 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 30) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      forthDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `3 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `4 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `5 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 31) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      forthDay.innerHTML = `3 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `4 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `5 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `6 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    }
  } else {
    if(now.getDate() <= 24) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate()+3} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate()+4} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `${now.getDate()+5} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `${now.getDate()+6} . ${now.getMonth()+1} . ${now.getFullYear()}`;
    } else if (now.getDate() == 25) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate()+3} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate()+4} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `${now.getDate()+5} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 26) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate()+3} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate()+4} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 27) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate()+3} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `3 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 28) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate()+2} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      forthDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `3 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `4 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 29) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate()+1} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      forthDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `3 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `4 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `5 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 30) {
      today.innerHTML = `${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}`;
      secondDay.innerHTML = `1 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `2 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      forthDay.innerHTML = `3 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `4 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `5 . ${now.getMonth()+2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `6 . ${now.getMonth()+2} . ${now.getFullYear()}`;
    }
  }
}

loadData()