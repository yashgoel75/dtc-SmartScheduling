import React from 'react';
import { Container, Typography } from '@mui/material';

const Office = () => {
  return (
    <Container
      sx={{
        mt: 8,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Welcome to the Office
      </Typography>
      <Typography variant="body1">
        This is the office page, accessible only after logging in.
      </Typography>
    </Container>
  );
};

export default Office;
