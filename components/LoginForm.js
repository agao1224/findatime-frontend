/**
 * @Imports 
 */
import styles from '../styles/LoginForm.module.css'

import { useState } from 'react';

const LoginForm = ({loginStatus, setLoginStatus, eventURI, 
                    accessToken, setAccessToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginOrRegister = async () => {
    // Backend already handles cases where user exists, doesn't exist
    // Simply query from database and use the link they return you
    const loginObj = {
      username: username,
      password: password
    }

    console.log(loginObj);

    const loginResponse = await fetch(`http://localhost:5000/login/${eventURI}`, {
      method: "POST",
      body: JSON.stringify(loginObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const handleLoginResponse = async (loginResponse) => {
      try {
        return await loginResponse.json();
      } catch (err) {
        alert("Invalid credentials.");
      }
    }

    const loginData = await handleLoginResponse(loginResponse);
    console.log(loginData);

    if (loginData && loginData["accessToken"] != null) {
      setLoginStatus(true);
      alert("Login success!");
      setAccessToken(loginData["accessToken"]);
    } else {
      alert("Login failed!");
    }
  }
  
  return (
    <div>
      <p1 style={{ fontSize: "1.5rem", fontWeight: "normal"}}> 
        Login/Register 
      </p1>
      <div className={styles.loginform}>
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Username</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" 
                   value={username}
                   onChange={(event) => setUsername(event.target.value)}/>
          </div>
          <br />
          <div className="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" 
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}/>
          </div>
        </form>
      </div>
      
      <div className={styles.loginbutton}>
        <button type="button" class="btn btn-primary"
         onClick={loginOrRegister}>
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginForm;