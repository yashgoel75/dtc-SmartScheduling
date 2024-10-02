import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Hardcoded credentials
  const correctUsername = 'admin';
  const correctPassword = '1234';

  // Handle login
  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true); // Set login state to true
      localStorage.setItem('isLoggedIn', 'true'); // Sync with local storage
      navigate('/office'); // Navigate to Office page
    } else {
      alert('Invalid username or password.');
    }
  };

  // Check if both fields are filled
  const isLoginDisabled = username.trim() === '' || password.trim() === '';

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 4,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, py: 1.5, fontSize: '16px', textTransform: 'none' }}
          onClick={handleLogin}
          disabled={isLoginDisabled} // Disable button if fields are empty
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
