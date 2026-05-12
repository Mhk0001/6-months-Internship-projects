document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Hardcoded credentials
  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem('isLoggedIn', 'true');
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password!');
  }
});
