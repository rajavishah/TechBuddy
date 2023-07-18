import { useState } from 'react';
import styles from '../styles/AuthForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
function Signup() {
  const [email, setEmail] = useState('');
  const [name,setName]=useState('');
  const [username,setUserName]=useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const router = useRouter();
  const notify = (value)=>{toast(value)}
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form fields
    const errors = {};
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setFormErrors(errors);

    // Submit form if there are no errors
    if (Object.keys(errors).length === 0) {
      // Handle signup logic here
      
        const res = await fetch(`http://localhost:5500/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
    
          },
          body: JSON.stringify({"name":name,"username":username,"email":email,"password":password}),
        }
       
        ).then(response => {
          // Checking if the response is successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Parsing the response as JSON and returning a Promise
          return response.json();
        }).then(result => {
          // Accessing the result of the Promise
          console.log(result);
          notify(result.error)
          notify(result.message)

    router.push('/api/auth/signin')

        }).catch ((error) =>{
          console.error(`Download error: ${error.message}`);
        })



      
      }
    }
  

  return (
    <div>
    
    <form onSubmit={handleSubmit} className={styles.authForm}>
      
      <h1>TechBuddy.</h1>
      <h2>Sign Up</h2>
      <ToastContainer></ToastContainer>
      <label htmlFor="name" className={styles.label}>Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`${styles.input} ${formErrors.email ? styles.inputError : ''}`}
        required
      />
      <label htmlFor="username" className={styles.label}>Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className={`${styles.input} ${formErrors.email ? styles.inputError : ''}`}
        required
      />
      <label htmlFor="email" className={styles.label}>Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${styles.input} ${formErrors.email ? styles.inputError : ''}`}
        required
      />
      {formErrors.email && <span className={styles.errorMessage}>{formErrors.email}</span>}
      <label htmlFor="password" className={styles.label}>Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`${styles.input} ${formErrors.password ? styles.inputError : ''}`}
        required
      />
      {formErrors.password && <span className={styles.errorMessage}>{formErrors.password}</span>}
      <label htmlFor="confirm-password" className={styles.label}>Confirm Password:</label>
      <input
        id="confirm-password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={`${styles.input} ${formErrors.confirmPassword ? styles.inputError : ''}`}
        required
      />
      {formErrors.confirmPassword && <span className={styles.errorMessage}>{formErrors.confirmPassword}</span>}
     
      <button type="submit" className={styles.button}>Sign up</button>
    </form>
    </div>
  );
}
Signup.skipLayout =true;
export default Signup;
