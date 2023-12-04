loadData();
clearCalendar();

const allDesks = window.allDesks;
const allUsers = window.allUsers;
const allBookings = window.allBookings;

const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", applyFilter);

function applyFilter() {
  const selectedFilter = filterSelect.value;

  updateCalendar(selectedFilter);
}

function updateCalendar(selectedFilter) {
  clearCalendar();

  allBookings.forEach((entry) => {
    const { bookingDate, bookingTime, idUser, idDesk } = entry;
    const hour = new Date(bookingTime).getUTCHours();
    const date = new Date(bookingDate);
    const today = new Date();

    if (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth()
    ) {
      const differenceInDays = date.getUTCDate() - today.getUTCDate();
      if (0 < differenceInDays < 7) {
        const cell = document.querySelector(
          `.h${hour} .info${differenceInDays + 1}`
        );
        console.log(cell);

        if (selectedFilter === "users") {
          console.log(allUsers);
          const user = allUsers.find((user) => user.idUser == idUser);
          const userInfo = `${user.firstName} ${user.lastName}`;
          cell.textContent = userInfo;
        } else if (selectedFilter === "desks") {
          const desk = allDesks.find((desk) => desk.idDesk == idDesk);
          const deskInfo = `${desk.deskName} ${desk.deskNumber}`;
          cell.textContent = deskInfo;
        } else if (selectedFilter === "-- filter --") {
          clearCalendar();
        }
      }
    }
  });
}

function clearCalendar() {
  const cells = document.querySelectorAll("td p");
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}

function openPanel() {
  document.querySelector(".panel").style.width = "200px";
  document.querySelector(".main").style.marginLeft = "200px";
  document.querySelector(".links").style.visibility = "visible";
}

function closePanel() {
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

  if (
    now.getMonth() + 1 == 1 ||
    now.getMonth() + 1 == 3 ||
    now.getMonth() + 1 == 5 ||
    now.getMonth() + 1 == 7 ||
    now.getMonth() + 1 == 8 ||
    now.getMonth() + 1 == 10 ||
    now.getMonth() + 1 == 12
  ) {
    if (now.getDate() <= 25) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate() + 3} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate() + 4} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      sixthDay.innerHTML = `${now.getDate() + 5} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      seventhDay.innerHTML = `${now.getDate() + 6} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
    } else if (now.getDate() == 26) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate() + 3} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate() + 4} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      sixthDay.innerHTML = `${now.getDate() + 5} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      seventhDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 27) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate() + 3} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate() + 4} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      sixthDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 28) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate() + 3} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      fifthDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `3 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 29) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `3 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `4 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 30) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      forthDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `3 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `4 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `5 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 31) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      forthDay.innerHTML = `3 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `4 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `5 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `6 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    }
  } else {
    if (now.getDate() <= 24) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate() + 3} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate() + 4} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      sixthDay.innerHTML = `${now.getDate() + 5} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      seventhDay.innerHTML = `${now.getDate() + 6} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
    } else if (now.getDate() == 25) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate() + 3} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate() + 4} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      sixthDay.innerHTML = `${now.getDate() + 5} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      seventhDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 26) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate() + 3} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      fifthDay.innerHTML = `${now.getDate() + 4} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      sixthDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 27) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `${now.getDate() + 3} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      fifthDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `3 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 28) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `${now.getDate() + 2} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      forthDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `3 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `4 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 29) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `${now.getDate() + 1} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      thirdDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      forthDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `3 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `4 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `5 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    } else if (now.getDate() == 30) {
      today.innerHTML = `${now.getDate()} . ${
        now.getMonth() + 1
      } . ${now.getFullYear()}`;
      secondDay.innerHTML = `1 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      thirdDay.innerHTML = `2 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      forthDay.innerHTML = `3 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      fifthDay.innerHTML = `4 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      sixthDay.innerHTML = `5 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
      seventhDay.innerHTML = `6 . ${now.getMonth() + 2} . ${now.getFullYear()}`;
    }
  }
}
