import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpFieldVisible, setOtpFieldVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handlePhoneNumberChange = (event) => {
    // Restrict input to numbers only
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    
    if (!phoneNumber) {
      setError('Please enter a valid phone number.');
      return;
    }

    try {

      await axios.post('/api/send-otp', { mobile: phoneNumber });
      setOtpFieldVisible(true);
      setError(''); 
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerifyOtp = (event) => {
    event.preventDefault();
    console.log('OTP entered:', otp);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          p: 3,
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          bgcolor: 'background.paper'
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <Box component="form" sx={{ mt: 1 }} onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            inputProps={{ pattern: "[0-9]*" }} // Ensure only numbers
            autoComplete="off"
            autoFocus
          />
          
          {otpFieldVisible && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="otp"
              label="Enter OTP"
              name="otp"
              value={otp}
              onChange={handleOtpChange}
              autoComplete="off"
            />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            {otpFieldVisible ? 'Verify OTP' : 'Login'}
          </Button>
          
          {otpFieldVisible && (
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </Button>
          )}

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
