var inputs = document.querySelectorAll("input");
var btnContainer = document.querySelector(".btnContainer");
var btnCreateAccount = document.querySelector(".btnCreateAccount");

btnCreateAccount.disabled = true;

function checkAllInputs() {
  if (Array.from(inputs).every((input) => input.classList.contains("valid"))) {
    btnCreateAccount.disabled = false;
    btnCreateAccount.style.backgroundColor = "rgba(79, 131, 187, 0.808)";
  } else {
    btnCreateAccount.disabled = true;
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    validateInput(input);
    checkAllInputs();
  });
});

function validateInput(input) {
  const { id, value } = input;
  input.classList.remove("valid", "invalid");
  let valid = false;
  switch (id) {
    case "firstName":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorFirstName").innerText =
          "This field is required";
        break;
      } else if (!checkTextLengthRange(value, 2, 30)) {
        valid = false;
        document.getElementById("errorFirstName").innerText =
          "This field should contain from 2 to 30 characters";
        break;
      }
      valid = true;
      document.getElementById("errorFirstName").innerText = "";
      break;
    case "lastName":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorLastName").innerText =
          "This field is required";
        break;
      } else if (!checkTextLengthRange(value, 2, 30)) {
        valid = false;
        document.getElementById("errorLastName").innerText =
          "This field should contain from 2 to 30 characters";
        break;
      }
      valid = true;
      document.getElementById("errorLastName").innerText = "";
      break;
    case "email":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorEmail").innerText = "This field is required";
        break;
      } else if (!checkTextLengthRange(value, 2, 60)) {
        valid = false;
        document.getElementById("errorEmail").innerText =
          "This field should contain from 2 to 60 characters";
        break;
      } else if (!checkEmail(value)) {
        valid = false;
        document.getElementById("errorEmail").innerText =
          "This field should contain a correct email";
        break;
      }
      valid = true;
      document.getElementById("errorEmail").innerText = "";
      break;
    case "phoneNumber":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorPhoneNumber").innerText =
          "This field is required";
        break;
      } else if (!checkTextLengthRange(value, 0, 9)) {
        valid = false;
        document.getElementById("errorPhoneNumber").innerText =
          "This field should contain a maximum of 9 characters";
        break;
      } else if (!checkPhoneNumber(value)) {
        valid = false;
        document.getElementById("errorPhoneNumber").innerText =
          "This field should contain a valid phone number";
        break;
      }
      valid = true;
      document.getElementById("errorPhoneNumber").innerText = "";
      break;
    case "password":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorPassword").innerText =
          "This field is required";
        break;
      } else if (!checkTextLengthRange(value, 5)) {
        valid = false;
        document.getElementById("errorPassword").innerText =
          "This field should contain more than 5 characters";
        break;
      } else if (!checkPassword(value)) {
        valid = false;
        document.getElementById("errorPassword").innerText =
          "This field should contain at least one number, one symbol, one uppercase letter and one lowercase letter";
        break;
      }
      valid = true;
      document.getElementById("errorPassword").innerText = "";
      break;
    case "passwordConfirm":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorPasswordConfirm").innerText =
          "This field is required";
        break;
      } else if (!checkPasswordConfirmation(value)) {
        valid = false;
        errorPasswordConfirm.innerText = "The field should contain the same password";
        break;
      }
      valid = true;
      document.getElementById("errorPasswordConfirm").innerText = "";
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

function checkEmail(value) {
  if (!value) {
    return false;
  }
  value = value.toString().trim();
  const re =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(value);
}

function checkPhoneNumber(value) {
  if (!value) {
    return false;
  }
  const pattern = /(\d{9})/;
  return pattern.test(value);
}

function checkPassword(value) {
  if (!value) {
    return false;
  }
  const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  return pattern.test(value);
}

function checkPasswordConfirmation(value) {
  if (!value) {
    return false;
  }
  const password = document.getElementById("password").value;
  return value === password;
}
