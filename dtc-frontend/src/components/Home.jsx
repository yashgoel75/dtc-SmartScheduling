import React, { useState } from "react";
import { Container, Typography, Box, Grid, TextField, Button } from "@mui/material";
import logo from "./../assets/dtc.png";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleReset = () => {
    setFrom("");
    setTo("");
  };

  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Delhi Transport Corporation
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore the services provided by DTC, find routes, fares, and more.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: "#c7edfe",
              padding: "15px",
              borderRadius: "8px",
              position: "relative",
              marginBottom: "30px",
              boxShadow: "0 6px 16px rgb(52 105 203 / 16%)",
              zIndex: 1,
              maxHeight: '500px', 
              overflowY: 'auto', 
              overflowX: 'hidden', 
              '&::-webkit-scrollbar': {
                display: 'none', 
              },
              scrollbarWidth: 'none', 
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                mb: 2,
              }}
            >
              <Box sx={{ flexShrink: 0 }}>
                <img
                  src={logo}
                  alt="DTC Logo"
                  style={{ width: "50px", height: "50px" }}
                />
              </Box>
              <Box sx={{ ml: { sm: 2 }, mt: { xs: 2, sm: 0 } }}>
                <Typography variant="h5" component="div">
                  Plan Your Journey
                </Typography>
              </Box>
            </Box>

            <Box mb={2} sx={{ width: "100%" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "1rem", color: "black" }}
              >
                Find the best routes with the shortest route and at the lowest
                cost for your journey with our route planner.
              </Typography>
            </Box>

            <Box mb={2} sx={{ width: "100%" }}>
              <TextField
                placeholder="Type bus stand name"
                variant="outlined"
                label="From"
                fullWidth
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "grey",
                    },
                    "&:hover fieldset": {
                      borderColor: "darkgrey",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "lightgrey",
                    },
                    backgroundColor: "#f5f5f5",
                  },
                  "& .MuiInputLabel-root": {
                    color: "grey",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "darkgrey",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "black",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
                    {
                      color: "black",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "black",
                    },
                }}
              />
            </Box>

            <Box mb={2} sx={{ width: "100%" }}>
              <TextField
                placeholder="Type bus stand name"
                variant="outlined"
                label="To"
                fullWidth
                value={to}
                onChange={(e) => setTo(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "grey",
                    },
                    "&:hover fieldset": {
                      borderColor: "darkgrey",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "lightgrey",
                    },
                    backgroundColor: "#f5f5f5",
                  },
                  "& .MuiInputLabel-root": {
                    color: "grey",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "darkgrey",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "black",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
                    {
                      color: "black",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "black",
                    },
                }}
              />
            </Box>

            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Button
                  variant="text"
                  sx={{ textDecoration: "underline", color: "black" }}
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "red", color: "white" }}
                >
                  Show Route & Fare
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: "#c7edfe",
              padding: "15px",
              borderRadius: "8px",
              position: "relative",
              marginBottom: "30px",
              boxShadow: "0 6px 16px rgb(52 105 203 / 16%)",
              zIndex: 1,
              maxHeight: '350px', 
              overflowY: 'auto', 
              overflowX: 'hidden', 
              '&::-webkit-scrollbar': {
                display: 'none', 
              },
              scrollbarWidth: 'none', 
            }}
          >
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              View on Map
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233674.86576011654!2d77.06873419999999!3d28.613939599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc92b1b04b95%3A0x9d9b7d8d4a6e0a1!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1646690137664!5m2!1sen!2sus"
              width="100%"
              height="300" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: "#c7edfe",
              padding: "15px",
              borderRadius: "8px",
              position: "relative",
              marginBottom: "30px",
              boxShadow: "0 6px 16px rgb(52 105 203 / 16%)",
              zIndex: 1,
              height: '100%', 
              maxHeight: '400px', 
              overflowY: 'auto', 
              overflowX: 'hidden', 
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none', 
            }}
          >
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              About DTC
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "16px" }}>
              Welcome to Department of Delhi Transport Corporation
              Government of India, Ministry of Transport took over the local bus services of Delhi in May 1948 in the name of Delhi Transport Service when they found that the services offered by Gwalior and Northern India Transport Company Ltd., the then licensee, were inadequate. A Delhi Road Transport Authority was constituted under the Road Transport Corporation Act, 1950. This Authority became undertaking of Municipal Corporation of Delhi by an Act of Parliament in April, 1958. On the recommendation of a Working Group of Planning Commission which concluded that Delhi Transport as an extension of Municipal Corporation of Delhi had not been functioning efficiently and adequately resulting in leakage of revenue and very high operation cost, Govt. of India took over the management of the undertaking by passing the Delhi Road Transport Laws (Amendment) Act, in 1971. It took over the assets and liabilities from the erstwhile Delhi Transport Undertaking (DTU) operated by the Municipal Corporation of Delhi till 2nd Nov,1971. Thus the DTC was set up in 1971. DTC which was functioning under the administrative control of Govt. of India, was finally taken over by Govt. of NCT, Delhi on 05.08.1996.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
