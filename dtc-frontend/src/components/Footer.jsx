import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, mt: 4, textAlign: 'center'}}>
      <Typography variant="body2" sx={{fontSize: '20px', fontWeight: 900}}>
        © 2024 Delhi Transport Corporation. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
