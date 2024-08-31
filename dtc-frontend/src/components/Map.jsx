import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation } from "react-router-dom";
import L from "leaflet";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Map = () => {
  const location = useLocation();
  const { from, to, stops } = location.state || {};
  const [locations, setLocations] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    if (stops) {
      const processedData = stops.map((stop) => {
        const [lat, lng] = stop.coordinates.split(",").map(Number);
        return {
          name: stop.stopName,
          lat,
          lng,
        };
      });
      setLocations(processedData);
    }
  }, [stops]);

  const handleCardToggle = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  const renderStopList = () => (
    <List sx={{ maxHeight: '200px', overflowY: 'auto' }}>
      {locations.map((location, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText primary={location.name} />
          </ListItem>
          {index < locations.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );

  // Create an array of positions for the polyline
  const polylinePositions = locations.map((location) => [location.lat, location.lng]);

  // Set bounds to fit all locations
  const mapBounds = L.latLngBounds(polylinePositions);

  // Component to adjust map center and zoom based on bounds
  const SetMapView = () => {
    const map = useMap();
    useEffect(() => {
      if (locations.length > 0) {
        map.fitBounds(mapBounds, { padding: [50, 50] });
      }
    }, [map, mapBounds, locations]);

    return null;
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12} md={8} sx={{ height: "80vh" }}>
        <MapContainer
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <SetMapView />
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={[location.lat, location.lng]}
              icon={L.icon({
                iconUrl:
                  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl:
                  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
                shadowSize: [41, 41],
              })}
            >
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
          {locations.length > 1 && (
            <Polyline
              positions={polylinePositions}
              color="black"
              weight={3}
            />
          )}
        </MapContainer>
      </Grid>

      {/* Right Column - UI */}
      <Grid item xs={12} md={4} sx={{ height: "auto" }}>
        <Card sx={{ mb: 2, height: "auto", display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" component="div" gutterBottom>
              Route - 761
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => handleCardToggle("route")}
              endIcon={
                expandedCard === "route" ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )
              }
            >
              {expandedCard === "route" ? "Hide Route" : "Show Route"}
            </Button>
            <Collapse in={expandedCard === "route"}>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {from || "Starting Point"} to {to || "Ending Point"}
              </Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Stops:
              </Typography>
              <Box sx={{ flex: 1, overflowY: 'auto', mt: 1 }}>
                {renderStopList()}
              </Box>
            </Collapse>
          </CardContent>
        </Card>
        
        <Card sx={{ mb: 2, height: "auto", display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" component="div" gutterBottom>
              Route - By Pass Exp
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => handleCardToggle("bypass")}
              endIcon={expandedCard === 'bypass' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            >
              {expandedCard === 'bypass' ? 'Hide Route' : 'Show Route'}
            </Button>
            <Collapse in={expandedCard === "bypass"}>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {from || "Starting Point"} to {to || "Ending Point"}
              </Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Stops:
              </Typography>
              <Box sx={{ flex: 1, overflowY: 'auto', mt: 1 }}>
                {renderStopList()}
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Map;
