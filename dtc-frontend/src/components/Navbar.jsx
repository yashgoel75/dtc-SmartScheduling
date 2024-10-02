import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from './../assets/dtc.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false
    localStorage.setItem('isLoggedIn', 'false'); // Sync with local storage
    navigate('/'); // Navigate to Home
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'white',
        color: 'black',
        boxShadow: '0 2px 16px rgba(52, 105, 203, 0.16)',
        p: 1,
      }}
    >
      <Toolbar>
        <Grid container alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
          <Grid item>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt="DTC Logo"
                style={{
                  width: 'auto',
                  height: '40px',
                  maxWidth: '100%',
                }}
              />
            </Link>
          </Grid>
          <Grid item>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
                  ml: 1,
                }}
              >
                Delhi Transport Corporation
              </Typography>
            </Link>
          </Grid>
        </Grid>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
            gap: '16px',
          }}
        >
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/analysis">
            Analysis
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          {isLoggedIn ? (
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" color="primary" component={Link} to="/login">
              Login
            </Button>
          )}
        </Box>

        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
              mt: 2,
            },
          }}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/analysis">
            Analysis
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/contact">
            Contact
          </MenuItem>
          {isLoggedIn ? (
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          ) : (
            <MenuItem onClick={handleMenuClose} component={Link} to="/login">
              Login
            </MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
