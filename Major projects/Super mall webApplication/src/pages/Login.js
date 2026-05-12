import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Check if the logged-in user is admin
      if (user.email === "admin@gmail.com") {
        navigate('/admin'); // Redirect admin to Admin Dashboard
      } else {
        navigate('/user-dashboard'); // Redirect normal users to User Dashboard
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage('Login failed: Please check your email and password or register first.');
    }
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-3"
              required
            />
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
