var inputs = document.querySelectorAll("input");
var select = document.querySelector("select");
var btnCreateDesk = document.querySelector(".btnCreateDesk");

btnCreateDesk.disabled = true;

function checkAllInputs() {
  if (Array.from(inputs).every((input) => input.classList.contains("valid")) && select.classList.contains("valid")) {
    btnCreateDesk.disabled = false;
  } else {
    btnCreateDesk.disabled = true;
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    validateInput(input);
    checkAllInputs();
  });
});

select.addEventListener("change", (e) => {
  select.classList.remove("valid", "invalid");
  let valid = false;
  if (select.options[select.selectedIndex].value === "default") {
    valid = false;
    document.getElementById("errorType").innerText = "Type must be chosen";
  } else {
    valid = true;
    document.getElementById("errorType").innerText = "";
  }
  select.classList.add(valid ? "valid" : "invalid");
  checkAllInputs();
});

function validateInput(input) {
  const { id, value } = input;
  input.classList.remove("valid", "invalid");
  let valid = false;
  switch (id) {
    case "deskName":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorDeskName").innerText =
          "This field is required";
        break;
      } else if (!checkTextLengthRange(value, 2, 30)) {
        valid = false;
        document.getElementById("errorDeskName").innerText =
          "This field should contain from 2 to 30 characters";
        break;
      }
      valid = true;
      document.getElementById("errorDeskName").innerText = "";
      break;
    case "deskNumber":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorDeskNumber").innerText =
          "This field is required";
        break;
      } else if (!checkTextLengthRange(value, 1, 10)) {
        valid = false;
        document.getElementById("errorDeskNumber").innerText =
          "This field should contain from 1 to 10 characters";
        break;
      }
      valid = true;
      document.getElementById("errorDeskNumber").innerText = "";
      break;
    case "floor":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorFloor").innerText = "This field is required";
        break;
      } else if (!checkIfNumber(value)) {
        valid = false;
        document.getElementById("errorFloor").innerText =
          "This field should contain only numbers";
        break;
      }
      valid = true;
      document.getElementById("errorFloor").innerText = "";
      break;
    default:
      break;
  }
  input.classList.add(valid ? "valid" : "invalid");
  return valid;
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

function checkTextLengthRange(value, min, max) {
  if (!value) {
    return false;
  }
  value = value.toString().trim();
  const length = value.length;
  if (max && length > max) {
    return false;
  }
  if (min && length < min) {
    return false;
  }
  return true;
}

function checkIfNumber(value) {
  if (!value) {
    return false;
  }
  const pattern = /^\d+$/;
  return pattern.test(value);
}
