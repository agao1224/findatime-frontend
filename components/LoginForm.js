/**
 * @Imports 
 */
import styles from '../styles/LoginForm.module.css'

import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div>
      <p1 style={{ fontSize: "1.5rem", fontWeight: "normal"}}> 
        Login/Register 
      </p1>
      <div className={styles.loginform}>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Username</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" 
                   value={username}
                   onChange={(event) => setUsername(event.target.value)}/>
          </div>
          <br />
          <div class="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" 
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}/>
          </div>
        </form>
      </div>
      
      <div className={styles.loginbutton}>
        <button type="button" class="btn btn-primary">Login/Register</button>
      </div>
    </div>
  )
}

export default LoginForm;