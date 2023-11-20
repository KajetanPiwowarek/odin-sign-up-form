var inputs = document.querySelectorAll("input");
var btnCreateAccount = document.querySelector(".btnCreateAccount");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    validateInput(input);
  });
});

btnCreateAccount.addEventListener("click", (event) => {
  if (inputs.every((input) => input.classList.contains("valid"))) {
    //zapisz uzytkownika i przekieruj na panel admina
    window.location.href = "./index.html";
  }
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
          "Pole jest wymagane";
        break;
      } else if (!checkTextLengthRange(value, 2, 30)) {
        valid = false;
        document.getElementById("errorFirstName").innerText =
          "Pole powinno zawierać od 2 do 30 znaków";
        break;
      }
      valid = true;
      document.getElementById("errorFirstName").innerText = "";
      break;
    case "lastName":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorLastName").innerText =
          "Pole jest wymagane";
        break;
      } else if (!checkTextLengthRange(value, 2, 30)) {
        valid = false;
        document.getElementById("errorLastName").innerText =
          "Pole powinno zawierać od 2 do 30 znaków";
        break;
      }
      valid = true;
      document.getElementById("errorLastName").innerText = "";
      break;
    case "email":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorEmail").innerText = "Pole jest wymagane";
        break;
      } else if (!checkTextLengthRange(value, 2, 60)) {
        valid = false;
        document.getElementById("errorEmail").innerText =
          "Pole powinno zawierać od 2 do 60 znaków";
        break;
      } else if (!checkEmail(value)) {
        valid = false;
        document.getElementById("errorEmail").innerText =
          "Pole powinno zawierać prawidłowy adres email";
        break;
      }
      valid = true;
      document.getElementById("errorEmail").innerText = "";
      break;
    case "phoneNumber":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorPhoneNumber").innerText =
          "Pole jest wymagane";
        break;
      } else if (!checkTextLengthRange(value, 0, 9)) {
        valid = false;
        document.getElementById("errorPhoneNumber").innerText =
          "Pole powinno zawierać maksymalnie 9 znaków";
        break;
      } else if (!checkPhoneNumber(value)) {
        valid = false;
        document.getElementById("errorPhoneNumber").innerText =
          "Pole powinno zawierać poprawny numer telefonu (np. 222333444)";
        break;
      }
      valid = true;
      document.getElementById("errorPhoneNumber").innerText = "";
      break;
    case "password":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorPassword").innerText =
          "Pole jest wymagane";
        break;
      } else if (!checkTextLengthRange(value, 5)) {
        valid = false;
        document.getElementById("errorPassword").innerText =
          "Pole powinno zawierać więcej niż 5 znaków";
        break;
      }
      valid = true;
      document.getElementById("errorPassword").innerText = "";
      break;
    case "passwordConfirm":
      if (!checkRequired(value)) {
        valid = false;
        document.getElementById("errorPasswordConfirm").innerText =
          "Pole jest wymagane";
        break;
      } else if (!checkPasswordConfirmation(value)) {
        valid = false;
        errorPasswordConfirm.innerText = "Pole powinno zawierać to samo hasło";
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

function checkPasswordConfirmation(value) {
  if (!value) {
    return false;
  }
  const password = document.getElementById("password").value;
  return value === password;
}
