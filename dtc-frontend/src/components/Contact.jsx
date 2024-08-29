import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2, 
        mt: 10
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          padding: 4,
          border: '1px solid #d3d3d3', // Light grey border
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow
          backgroundColor: '#ffffff', // White background for the container
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: '600', fontSize: '37px', mb: 5 }}>
          Contact Us
        </Typography>
        <Box mb={5}>
          <Typography variant="body1" sx={{ fontSize: '20px' }}>
            <strong>Delhi Transport Corporation (HQ)</strong><br />
            Government of National Capital Territory of Delhi<br />
            I.P. Estate: New Delhi-110002
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontSize: '20px' }}>
            <strong>Phone No.:</strong><br />
            +91-11-23370236
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
