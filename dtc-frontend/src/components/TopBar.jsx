import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

const TopBar = ({ isLoggedIn }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(45deg, #c7edfe 10%, #c7f5fe 40%, #fcc8f8 0, #fcc8f8 60%, #eab4f8 0, #eab4f8 65%, #f1d580 0, #f3f798 90%)",
        color: "#000",
        height: "40px",
        boxShadow: "none",
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          minHeight: "40px",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        {!isMobile && (
          <Box display="flex" alignItems="center">
            <Typography variant="body2" sx={{ marginRight: "8px" }}>
              Follow us on :
            </Typography>
            <IconButton size="small" color="inherit">
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              color="inherit"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/transportfordelhi/",
                  "_blank"
                )
              }
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Box>
        )}

        <Box
          display="flex"
          alignItems="center"
          sx={{
            flexGrow: isMobile ? 1 : 0,
            justifyContent: isMobile ? "center" : "flex-end",
            gap: isMobile ? "35px" : "10px",
            fontWeight: isMobile ? "800" : "400",
          }}
        >
          <RouterLink
            to="/" 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body2" sx={{ marginRight: isMobile ? "8px" : "16px", fontSize: "1rem" }}>
              For Passengers
            </Typography>
          </RouterLink>
          <RouterLink
            to={isLoggedIn ? "/office" : "/login"} // Update this based on login status
            style={{
              textDecoration: "none",
              color: isLoggedIn ? "#000" : "#aaa", // Change color based on login status
              pointerEvents: isLoggedIn ? "auto" : "none", // Disable link if not logged in
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              For Corporates
            </Typography>
          </RouterLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
