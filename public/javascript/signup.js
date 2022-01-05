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
  var error = "User email already exists!";
  // console.log(err);
  document.querySelector(".error-field").style.display = "block";
  errorEl.textContent = error;
  setTimeout(function () {
    errorEl.textContent = "";
    document.querySelector(".error-field").style.display = "none";
  }, 2500);
};

var badPasswordResult = function () {
  var error = "Invalid Password!";
  document.querySelector(".error-field").style.display = "block";
  errorEl.textContent = error;
  setTimeout(function () {
    errorEl.textContent = "";
    document.querySelector(".error-field").style.display = "none";
  }, 2500);
};

async function signupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector("#firstname-signup").value.trim();
  const last_name = document.querySelector("#lastname-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  
  var low = /[a-z]/g;
  var up = /[A-Z]/g;
  var num = /[0-9]/g;
  var lowOk = low.test(password);
  var upOk = up.test(password);
  var numOk = num.test(password);
  debugger;
  if (password.length > 7 && password.length < 33 && lowOk && upOk && numOk) {
    
    if(first_name && last_name && email && password) {
     
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setTimeout(() => {
          document.location.replace("/dashboard");
        }, 100);
      } else {
         badDataResult();
      }
    }
  } else {
    badPasswordResult();
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
