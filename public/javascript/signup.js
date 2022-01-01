async function signupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector('#firstname-signup').value.trim();
  const last_name = document.querySelector('#lastname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (first_name && last_name && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      console.log('success')
      document.querySelector('.form').reset()
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);