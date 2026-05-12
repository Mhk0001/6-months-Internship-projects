document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if user already exists
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    alert("Account already exists!");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert("Account created successfully!");
  window.location.href = "login.html";
});
