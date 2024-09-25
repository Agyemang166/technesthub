import React from 'react';
import { Button } from '@mui/material';
import { auth } from '../../services/firebaseConfig'; // Adjust the path as needed
import { signOut } from 'firebase/auth';

const LogoutButton = () => {
  const onLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      // Optionally, navigate to the login page or display a success message
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Button 
      variant="contained" 
      color="error" 
      onClick={onLogout} 
      style={{ marginTop: '20px' }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
