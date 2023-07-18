import { useState } from "react";
import styles from '@/styles/Login.module.css'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle login logic here
    };
  
    return (
<form onSubmit={handleSubmit} className={styles.loginForm}>
      <label htmlFor="email" className={styles.label}>Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
        required
      />
      <label htmlFor="password" className={styles.label}>Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>Log in</button>
    </form>
    );
  }
  

Login.skipLayout =true;
export default Login;

