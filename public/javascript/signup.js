async function signupFormHandler(event) {
    event.preventDefault();

    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

  if (firstname && lastname && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        console.log('success') 
        document.querySelector('.form').reset()
        document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
  }
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);