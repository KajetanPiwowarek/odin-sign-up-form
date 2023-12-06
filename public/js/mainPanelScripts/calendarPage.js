let now = new Date();

const btnNextWeek = document.querySelector(".btnNextWeek");
const btnPrevWeek = document.querySelector(".btnPrevWeek");
const btnToday = document.querySelector(".btnToday");

const allDesks = window.allDesks;
const allUsers = window.allUsers;
const allBookings = window.allBookings;

const filterContainer = document.querySelector(".filterContainer");
const filterSelect = document.getElementById("filter");
let selectedFilter = filterSelect.value;
const filterSpecificSelect = document.getElementById("filterSpecific");
let selectedFilterSpecific = filterSpecificSelect.value;


loadData("now");


btnNextWeek.addEventListener("click", function() {
  const status = "next";
  loadData(status);
});

btnToday.addEventListener("click", function() {
  const status = "now";
  loadData(status);
});

btnPrevWeek.addEventListener("click", function() {
  const status = "prev";
  loadData(status);
});

filterSelect.addEventListener("change", addFilter);
filterSpecificSelect.addEventListener("change", applyFilter);

function addFilter() {
  selectedFilter = filterSelect.value;

  filterSpecificSelect.innerHTML =
    '<option value="default" selected>-- filter --</option>';

  if (selectedFilter === "users") {
    for (let i = 1; i < allUsers.length; i++) {
      let user = allUsers[i];
      const option = document.createElement("option");
      option.value = user.idUser;
      option.label = `${user.firstName} ${user.lastName}`;
      filterSpecificSelect.appendChild(option);
    }
  } else if (selectedFilter === "desks") {
    for (let i = 0; i < allDesks.length; i++) {
      let desk = allDesks[i];
      const option = document.createElement("option");
      option.value = desk.idDesk;
      option.label = `${desk.deskName} ${desk.deskNumber}`;
      filterSpecificSelect.appendChild(option);
    }
  } else if (selectedFilter === "-- filter --") {
    clearCalendar();
  }
}

function applyFilter() {
  selectedFilter = filterSelect.value;
  selectedFilterSpecific = filterSpecificSelect.value;
  updateCalendar(selectedFilter, selectedFilterSpecific);
}

function updateCalendar(selectedFilter, selectedFilterSpecific) {
  clearCells();

  if (selectedFilter === "users") {
    const user = allUsers.find((user) => user.idUser == selectedFilterSpecific);
    if (user) {
      const userBookings = allBookings.filter((booking) => booking.idUser == user.idUser);

      userBookings.forEach((entry) => {
        const { bookingDate, bookingTime, idDesk } = entry;
        const hour = bookingTime.substring(0, 2);
        const date = new Date(bookingDate);

        if (
          date.getFullYear() === now.getFullYear() &&
          date.getMonth() === now.getMonth()
        ) {
          const differenceInDays = date.getUTCDate() - now.getUTCDate();
          if (0 < differenceInDays && differenceInDays < 7) {
            const cellUser = document.querySelector(
              `.h${hour} .infoU${differenceInDays + 1}`
            );
            const cellDesk = document.querySelector(
              `.h${hour} .infoD${differenceInDays + 1}`
            );

            const desk = allDesks.find((desk) => desk.idDesk == idDesk);
            const userInfo = `${user.firstName} ${user.lastName}`;
            cellUser.style.color = "rgba(79, 131, 187, 0.808)";
            cellUser.textContent = userInfo;
            
            const deskInfo = `${desk.deskName} ${desk.deskNumber}`;
            cellDesk.textContent = deskInfo;
          }
        }
      });
    } else {
      console.log("User doesn't exist");
    }
  } else if (selectedFilter === "desks") {
    const desk = allDesks.find((desk) => desk.idDesk == selectedFilterSpecific);
    if (desk) {
      const deskBookings = allBookings.filter((booking) => booking.idDesk == desk.idDesk);

      deskBookings.forEach((entry) => {
        const { bookingDate, bookingTime, idUser } = entry;
        const hour = bookingTime.substring(0, 2);
        const date = new Date(bookingDate);

        if (
          date.getFullYear() === now.getFullYear() &&
          date.getMonth() === now.getMonth()
        ) {
          const differenceInDays = date.getUTCDate() - now.getUTCDate();
          if (0 < differenceInDays && differenceInDays < 7) {
            const cellUser = document.querySelector(
              `.h${hour} .infoU${differenceInDays + 1}`
            );
            const cellDesk = document.querySelector(
              `.h${hour} .infoD${differenceInDays + 1}`
            );

            const user = allUsers.find((user) => user.idUser == idUser);
            const userInfo = `${desk.deskName} ${desk.deskNumber}`;
            cellUser.style.color = "rgba(79, 131, 187, 0.808)";
            cellUser.textContent = userInfo;
            
            const deskInfo = `${user.firstName} ${user.lastName}`;
            cellDesk.textContent = deskInfo;
          }
        }
      });
    } else {
      console.log("Desk doesn't exist");
    }
  }
}

function clearCells() {
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

function loadData(status) {
  if (status == "now") {
    now = new Date();
  } else if(status == "next"){
    now.setDate(now.getDate() + 7);
  } else if (status == "prev") {
    now.setDate(now.getDate() - 7);
  }

  let today = document.querySelector(".today");
  let secondDay = document.querySelector(".secondDay");
  let thirdDay = document.querySelector(".thirdDay");
  let forthDay = document.querySelector(".forthDay");
  let fifthDay = document.querySelector(".fifthDay");
  let sixthDay = document.querySelector(".sixthDay");
  let seventhDay = document.querySelector(".seventhDay");

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

  applyFilter();
}
