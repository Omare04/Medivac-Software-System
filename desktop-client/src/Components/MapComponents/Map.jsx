import { useEffect, useState } from "react";
import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapContent() {
  const [vp, setVp] = useState({});
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    // console.log(navigator.geolocation);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("error");
    }
  }, []);

  function success(position) {
    return new Promise((resolve) => {
      setVp({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 6,
      });
      setSpinning(false);
    });
  }

  function error() {
    console.log("Cant retrieve location ");
  }

  return (
    <>
      <Map
        {...vp}
        scrollZoom={true}
        dragRotate={true}
        mapboxAccessToken="pk.eyJ1Ijoib21hcmUzMyIsImEiOiJjbHJsYWhzdm8wbHF2Mmltb2VncWpqaWtmIn0.H9Q2CJnv_k0ULjcoO1A9DA"
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/omare33/clrmfrxak004901nl0ils693i"
        attributionControl={false}
        customAttribution={{ iconColor: "red" }}
        onViewportChange={(newViewport) => setVp(newViewport)}
      >
      </Map>
      {/* <Spin spinning={spinning} fullscreen /> */}
    </>
  );
}
