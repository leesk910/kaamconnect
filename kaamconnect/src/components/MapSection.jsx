import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom blue location icon
const userIcon = L.divIcon({
  className: "user-location-icon",
  html: `
    <div class="user-location-pulse">
      <div class="user-location-dot"></div>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

// Map automatically moves when position changes
function MapUpdater({ position }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 15, {
      animate: true,
      duration: 1.5,
    });
  }, [position, map]);

  return null;
}

// My Location button
function LocationButton({ onClick }) {
  return (
    <button className="my-location-btn" onClick={onClick}>
      📍 My Location
    </button>
  );
}

function MapSection() {
  const defaultPosition = [21.1900, 81.2840];

  const [position, setPosition] = useState(defaultPosition);
  const [accuracy, setAccuracy] = useState(100);
  const [locationStatus, setLocationStatus] = useState(
    "Detecting your location..."
  );

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Location is not supported by your browser");
      return;
    }

    setLocationStatus("Finding your location...");

    navigator.geolocation.getCurrentPosition(
      (location) => {
        const userPosition = [
          location.coords.latitude,
          location.coords.longitude,
        ];

        setPosition(userPosition);
        setAccuracy(location.coords.accuracy);
        setLocationStatus("Your current location");
      },
      (error) => {
        setLocationStatus("Unable to get your location");
        console.log("Location error:", error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="map-section">
      <MapContainer
        center={defaultPosition}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <MapUpdater position={position} />

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Location Accuracy Circle */}
        <Circle
          center={position}
          radius={accuracy}
          pathOptions={{
            color: "#4285f4",
            fillColor: "#4285f4",
            fillOpacity: 0.12,
            weight: 1,
          }}
        />

        {/* User Location Blue Dot */}
        <Marker position={position} icon={userIcon}>
          <Popup>
            <strong>KaamConnect 📍</strong>
            <br />
            {locationStatus}
          </Popup>
        </Marker>

        {/* My Location Button */}
        <LocationButton onClick={getUserLocation} />
      </MapContainer>
    </div>
  );
}

export default MapSection;