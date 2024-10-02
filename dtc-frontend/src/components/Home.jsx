import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "./../assets/dtc.png";
import stopsData from "./../assets/json_route_761.json";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [stops, setStops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stopList = stopsData.map((item) => ({
      stopName: item.StopName,
      coordinates: item.Coordinates,
    }));

    setStops(stopList);
  }, []);

  const handleReset = () => {
    setFrom("");
    setTo("");
  };

  const handleShowRoute = () => {
    const fromIndex = stops.findIndex(stop => stop.stopName === from);
    const toIndex = stops.findIndex(stop => stop.stopName === to);
  
    if (fromIndex === -1 || toIndex === -1) return;
  
    const stopsBetween = stops.slice(fromIndex, toIndex + 1);
  
    // Navigate to the map page with the route details
    navigate("/map", { state: { from, to, stops: stopsBetween } });
  };

  const isShowRouteButtonDisabled = !from || !to;

  return (
    <Container>
      <Box sx={{ width: "100%", height: "40%", mb: 5 }}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
          swipeable
        >
           <div>
            <img
              src="https://dtc.delhi.gov.in/sites/default/files/styles/home_banner/public/DTC/banner-images/delhi_transport_corporation_web_banner-1.png?itok=-owYFwNz"
              alt="DTC Banner 1"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://dtc.delhi.gov.in/sites/default/files/styles/home_banner/public/DTC/banner-images/delhi_transport_corporation_web_banner.png?itok=7hTzU_v6"
              alt="DTC Banner 2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://dtc.delhi.gov.in/sites/default/files/styles/home_banner/public/DTC/banner-images/delhi_transport_corporation_web_banner_2.png?itok=zbcgSxAO"
              alt="DTC Banner 3"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://dtc.delhi.gov.in/sites/default/files/styles/home_banner/public/DTC/banner-images/dtc_web_banner3.jpg?itok=6a1C4kIw"
              alt="DTC Banner 4"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://dtc.delhi.gov.in/sites/default/files/styles/home_banner/public/DTC/banner-images/delhi_transport_corporation_web_banner_1.png?itok=MHdUxyH-"
              alt="DTC Banner 5"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Carousel>
      </Box>

      <Box sx={{ my: 7 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: "40px", fontWeight: "700" }}>
          Welcome to Delhi Transport Corporation
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontSize: "20px" }}>
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
              maxHeight: "500px",
              overflowY: "auto",
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
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
                <img src={logo} alt="DTC Logo" style={{ width: "50px", height: "50px" }} />
              </Box>
              <Box sx={{ ml: { sm: 2 }, mt: { xs: 2, sm: 0 } }}>
                <Typography variant="h5" component="div">
                  Plan Your Journey
                </Typography>
              </Box>
            </Box>

            <Box mb={5} sx={{ width: "100%" }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1rem", color: "black" }}>
                Find the best routes with the shortest route and at the lowest cost for your journey with our route planner.
              </Typography>
            </Box>

            <Autocomplete
              options={stops.map((stop) => stop.stopName || "")}
              renderInput={(params) => (
                <TextField {...params} label="From" variant="outlined" />
              )}
              value={from}
              onChange={(event, newValue) => setFrom(newValue)}
              sx={{
                mb: 5,
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            />

            <Autocomplete
              options={stops.map((stop) => stop.stopName || "")}
              renderInput={(params) => (
                <TextField {...params} label="To" variant="outlined" />
              )}
              value={to}
              onChange={(event, newValue) => setTo(newValue)}
              sx={{
                mb: 5,
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            />

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
                  onClick={handleShowRoute}
                  disabled={isShowRouteButtonDisabled}
                >
                  Show Route
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
              // marginBottom: "30px",
              boxShadow: "0 6px 16px rgb(52 105 203 / 16%)",
              zIndex: 1,
              maxHeight: "550px",
              overflowY: "auto",
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              View on Map
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233674.86576011654!2d77.06873419999999!3d28.613939599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc6b5c16bfb3%3A0x7f0d6d781f5b650!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1634921196111!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
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
              height: "100%",
              maxHeight: "400px",
              // overflowY: "auto",
              // overflowX: "hidden",
              // "&::-webkit-scrollbar": {
              //   display: "none",
              // },
              // scrollbarWidth: "none",
            }}
          >
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
              About DTC
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "17px" }}>
              Welcome to Department of Delhi Transport Corporation Government of
              India, Ministry of Transport took over the local bus services of
              Delhi in May 1948 in the name of Delhi Transport Service when they
              found that the services offered by Gwalior and Northern India
              Transport Company Ltd., the then licensee, were inadequate. A
              Delhi Road Transport Authority was constituted under the Road
              Transport Corporation Act, 1950. This Authority became undertaking
              of Municipal Corporation of Delhi by an Act of Parliament in April
              1958.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
