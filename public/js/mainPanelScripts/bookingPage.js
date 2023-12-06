const user = window.user;
const allDesks = window.allDesks;
const allBookings = window.allBookings;

const bookingDate = document.getElementById("bookingDate");
const bookingTimeDropdown = document.getElementById("bookingTime");
const floorDropdown = document.getElementById("floor");
const deskDropdown = document.getElementById("desk");

bookingDate.addEventListener("change", updateTimeOptions);
bookingTimeDropdown.addEventListener("change", updateFloorOptions);
floorDropdown.addEventListener("change", updateDeskOptions);

function updateTimeOptions() {
  const selectedDate = bookingDate.value;

  const bookingsForSelectedDate = allBookings.filter(booking => {
    const bookingDate = new Date(booking.bookingDate).toISOString().split("T")[0];
    return bookingDate === selectedDate;
  });

  const allTimes = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  const availableTimes = allTimes.filter(time => {
    return !bookingsForSelectedDate.some(booking => {
      const bookingTime = booking.bookingTime.substring(0, 5);
      return bookingTime === time;
    });
  }).sort((a, b) => a - b);

  bookingTimeDropdown.innerHTML =
    '<option value="default" selected>-- time --</option>' +
    availableTimes.map(time => `<option value="${time}">${time}</option>`).join('');
}

function updateFloorOptions() {
  const selectedTime = bookingTimeDropdown.value;
  const selectedDate = bookingDate.value;

  const possibleFloors = [...new Set(allDesks.map(desk => desk.floor))];

  const desksPerFloor = {};
  allDesks.forEach(desk => {
    if (!desksPerFloor[desk.floor]) {
      desksPerFloor[desk.floor] = 0;
    }
    desksPerFloor[desk.floor]++;
  });

  const bookedDesksPerFloor = {};
  allBookings
    .filter(booking => {
      const bookingDate = new Date(booking.bookingDate)
          .toISOString()
          .split("T")[0];
        const bookingTime = booking.bookingTime.substring(0, 5);
      return (
        bookingDate === selectedDate &&
        bookingTime === selectedTime
      );
    })
    .forEach(booking => {
      const desk = allDesks.find(d => d.idDesk === booking.idDesk);
      if (!bookedDesksPerFloor[desk.floor]) {
        bookedDesksPerFloor[desk.floor] = 0;
      }
      bookedDesksPerFloor[desk.floor]++;
    });

  const availableFloors = possibleFloors.filter(floor => {
    const availableDesks = desksPerFloor[floor] - (bookedDesksPerFloor[floor] || 0);
    return availableDesks > 0;
  }).sort((a, b) => a - b);

  floorDropdown.innerHTML =
    '<option value="default" selected>-- floor --</option>' +
    availableFloors.map(floor => `<option value="${floor}">${floor}</option>`).join('');
}


function updateDeskOptions() {
  const selectedFloor = floorDropdown.value;
  const selectedTime = bookingTimeDropdown.value;
  const selectedDate = bookingDate.value;

  deskDropdown.innerHTML =
    '<option value="default" selected>-- desk --</option>';

  const bookedDesksOnSelectedFloor = allBookings
    .filter(booking => {
      const bookingDate = new Date(booking.bookingDate)
          .toISOString()
          .split("T")[0];
        const bookingTime = booking.bookingTime.substring(0, 5);
      return (
        bookingDate === selectedDate &&
        bookingTime === selectedTime &&
        allDesks.find(desk => desk.idDesk === booking.idDesk && desk.floor === selectedFloor)
      );
    })
    .map(booking => booking.idDesk);

  const availableDesksOnSelectedFloor = allDesks
    .filter(desk => desk.floor === selectedFloor && !bookedDesksOnSelectedFloor.includes(desk.idDesk))
    .sort((a, b) => a.deskName.localeCompare(b.deskName));

  availableDesksOnSelectedFloor.forEach(desk => {
    const option = document.createElement("option");
    option.value = desk.idDesk;
    option.label = `${desk.deskName} ${desk.deskNumber} | ${desk.type}`;
    deskDropdown.appendChild(option);
  });
}


var inputs = document.querySelectorAll("input");
var selects = document.querySelectorAll("select");
var btnBook = document.querySelector(".btnBook");

btnBook.disabled = true;

function checkAllInputs() {
  if (
    Array.from(inputs).every((input) => input.classList.contains("valid")) &&
    Array.from(selects).every((select) => select.classList.contains("valid"))
  ) {
    btnBook.disabled = false;
  } else {
    btnBook.disabled = true;
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    validateInput(input);
    checkAllInputs();
  });
});

selects.forEach((select) => {
  select.addEventListener("change", (e) => {
    validateSelect(select);
    checkAllInputs();
  });
});

function validateSelect(select) {
  const { id, value } = select;
  select.classList.remove("valid", "invalid");
  let valid = false;
  switch (id) {
    case "bookingTime":
      if (value === "default") {
        valid = false;
        document.getElementById("errorBookingTime").innerText =
          "Please select a time";
      } else {
        valid = true;
        document.getElementById("errorBookingTime").innerText = "";
      }
      break;
    case "floor":
      if (value === "default") {
        valid = false;
        document.getElementById("errorFloor").innerText =
          "Please select a floor";
      } else {
        valid = true;
        document.getElementById("errorFloor").innerText = "";
      }
      break;
    case "desk":
      if (value === "default") {
        valid = false;
        document.getElementById("errorDesk").innerText = "Please select a desk";
      } else {
        valid = true;
        document.getElementById("errorDesk").innerText = "";
      }
      break;
    default:
      break;
  }
  select.classList.add(valid ? "valid" : "invalid");
  return valid;
}

function validateInput(input) {
  const { id, value } = input;
  input.classList.remove("valid", "invalid");
  let valid = false;
  switch (id) {
    case "bookingDate":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorBookingDate").innerText =
          "Please select a date";
        break;
      } else if (!checkIfDateExpired(value)) {
        valid = false;
        document.getElementById("errorBookingDate").innerText =
          "You cannot select an expired date";
        break;
      }
      valid = true;
      document.getElementById("errorBookingDate").innerText = "";
      break;
    default:
      break;
  }
  input.classList.add(valid ? "valid" : "invalid");
  return valid;
}

function checkRequired(value) {
  if (!value) {
    return false;
  }
  value = value.toString().trim();
  if (value == "") {
    return false;
  }
  return true;
}

function checkIfDateExpired(value) {
  if (!value) {
    return false;
  }
  const inputDateParts = value.split("-");
  const inputDate = new Date(
    parseInt(inputDateParts[0]),
    parseInt(inputDateParts[1]) - 1,
    parseInt(inputDateParts[2])
  );
  const currentDate = new Date();
  return inputDate > currentDate;
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
