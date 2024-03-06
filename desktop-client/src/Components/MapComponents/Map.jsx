import React from "react";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaPlane } from "react-icons/fa6";
import { renderToString } from "react-dom/server";
import ReactDOMServer from "react-dom/server";

function MapComponent() {
  useEffect(() => {
    // Check if map container is already initialized
    const existingMap = L.DomUtil.get("map");
    if (!existingMap) {
      // If not initialized, create a new map
      const map = L.map("map").setView([51.505, -0.09], 13);

      // Add a tile layer to the map (you can use other tile providers)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      const marker = L.marker([51.505, -0.09], { icon: AircraftIcon });
      marker.addTo(map);
    }
  }, []); // Empty dependency array ensures the useEffect runs only once during component mount

  return (
    <>
      <div id="map" style={{ height: "95vh", width: "100%", overflow: "none" }}>
        {/* Set position: relative on the map container */}
      </div>
    </>
  );
}

const AircraftIcon = L.divIcon({
  className: "aircraft-marker",
  html: ReactDOMServer.renderToString(<FaPlane size={33} color="red" />),
});

export default MapComponent;
