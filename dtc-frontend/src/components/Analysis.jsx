import React from 'react';
import { Container, Typography, Grid, styled } from '@mui/material';
import img1 from './../assets/graph1.jpeg';
import img2 from './../assets/graph2.jpeg';
import img3 from './../assets/graph3.jpeg';

// Styled Container with centered text
const Root = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

// Styled Typography for the heading
const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

// Styled img element to ensure responsiveness, increased size on small screens, and hover effect
const Image = styled('img')(({ theme }) => ({
  width: '75%', // Default width for larger screens
  height: 'auto',
  margin: theme.spacing(2, 0), // Top and bottom margin
  maxWidth: '100%', // Ensures responsiveness
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effect
  '&:hover': {
    transform: 'scale(1.05)', // Slightly increase size on hover
    boxShadow: '0 4px 20px rgba(52, 105, 203, 0.3)', // Enhanced shadow on hover
  },
  [theme.breakpoints.down('md')]: {
    width: '85%', // Increased width for medium screens and below
  },
  [theme.breakpoints.down('sm')]: {
    width: '95%', // Further increased width for small screens
  },
}));

const Analysis = () => {
  return (
    <Root>
      <Heading variant="h3" sx={{ fontWeight: 900 }}>
        Analysis
      </Heading>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Image src={img1} alt="Graph 1" sx={{ boxShadow: '0 2px 16px rgba(52, 105, 203, 0.16)' }} />
        </Grid>
        <Grid item xs={12}>
          <Image src={img2} alt="Graph 2" sx={{ boxShadow: '0 2px 16px rgba(52, 105, 203, 0.16)' }} />
        </Grid>
        <Grid item xs={12}>
          <Image src={img3} alt="Graph 3" sx={{ boxShadow: '0 2px 16px rgba(52, 105, 203, 0.16)' }} />
        </Grid>
      </Grid>
    </Root>
  );
};

export default Analysis;
