import { useContext, useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import styles from "../../styles/EditProfile.module.scss"
import { UserContext } from '@/contexts/UserContext';
const EditProfileForm = () => {

 
  let {user}=useContext(UserContext);
 
  const [formData, setFormData] = useState(user);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
    setPasswordError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: handle form submission
  
    try{
      const res = await fetch(`http://localhost:5500/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
         'x-access-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmMGJhZjBhZGNlZTNjMzVmZDVlZTQiLCJpYXQiOjE2ODE5MTE0ODN9.q3qtFx7HbfLbZje1BLgn3q7RsIfVgW2rnVsMDIfnXbg"
        },
        body: JSON.stringify(formData),
      }
     
      ) ;console.log(res)}catch (error) {
        console.error(`Download error: ${error.message}`);
      }
   
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // TODO: handle password change submission
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      // TODO: update password
      alert('Password updated successfully!');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    }
  };
  return (
    <div className={styles.formContainer}>
    <form onSubmit={handleSubmit} className={styles.editProfileForm}>
        <h3>Edit Profile</h3>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="username">Username</label>
        <Input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>

      <Button type="submit" size="lg" color="primary" className="submit-button">
        Save Changes
      </Button>
      <Button  size="lg" color="error" className="submit-button">
        Delete Account
      </Button>
    </form>

    <form onSubmit={handlePasswordSubmit} className={styles.passwordChangeForm}>
    <h3>Update password</h3>
      <div className={styles.formGroup}>
        <label htmlFor="currentPassword">Current Password</label>
        <Input
          type="password"
          name="currentPassword"
          value={passwordData.currentPassword}
          onChange={handlePasswordChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="newPassword">New Password</label>
        <Input
          type="password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handlePasswordChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword">Confirm New Password</label>
        <Input
          type="password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handlePasswordChange}
        />
        {passwordError && <span className="error-message">{passwordError}</span>}
      </div>

      <Button type="submit" size="lg" color="secondary" className="submit-button">
        Change Password
      </Button>
    </form>
  </div>
  );
};



EditProfileForm.auth = false;
export default EditProfileForm;