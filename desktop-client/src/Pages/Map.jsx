import React from "react";
import Header from "../Layout/Header";
import MapComponent from "../Components/MapComponents/Map";
import MapSideBar from "../Components/MapComponents/MapSideBar";

function Map() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "flex-start",
          overflow:"auto",
          background: "#1e1e25",
        }}
      >
        <MapSideBar></MapSideBar>

        <div style={{ minHeight: "100%", width: "100%"}}>
          <MapComponent />
        </div>
      </div>
    </>
  );
}

export default Map;
