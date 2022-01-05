var errorEl = document.querySelector("#error");

var errorTextBlank = function () {
  var error = "All fields are required!";
  document.querySelector(".error-field").style.display = "block";
  errorEl.textContent = error;
  setTimeout(function () {
    errorEl.textContent = "";
    document.querySelector(".error-field").style.display = "none";
  }, 2500);
};

var badDataResult = function () {
  var error = "Email or Password incorrect!";
  // console.log(err);
  document.querySelector(".error-field").style.display = "block";
  errorEl.textContent = error;
  setTimeout(function () {
    errorEl.textContent = "";
    document.querySelector(".error-field").style.display = "none";
  }, 2500);
};

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        setTimeout(() => {document.location.replace('/dashboard')}, 100);
    } else {
      badDataResult();
    }
  } else {
    errorTextBlank();
  }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);