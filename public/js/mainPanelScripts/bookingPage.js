const allDesks = window.allDesks;

const floorDropdown = document.getElementById("floor");
const deskDropdown = document.getElementById("desk");

floorDropdown.addEventListener("change", updateDeskOptions);

function updateDeskOptions() {
  const selectedFloor = floorDropdown.value;

  deskDropdown.innerHTML =
    '<option value="default" selected>-- desk --</option>';

  for (let i = 0; i < allDesks.length; i++) {
    let desk = allDesks[i];
    if (desk.floor === selectedFloor) {
      const option = document.createElement("option");
      option.value = desk.idDesk;
      option.label = `${desk.deskName} ${desk.deskNumber} | ${desk.type}`;
      deskDropdown.appendChild(option);
    }
  }
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
