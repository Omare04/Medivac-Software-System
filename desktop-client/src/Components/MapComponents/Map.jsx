import { useEffect, useState } from "react";
import L from "leaflet";
import { Box, Spinner } from "@chakra-ui/react";
import MapSideBar from "./MapSideBar";
import { IoIosAirplane } from "react-icons/io";
import "leaflet/dist/leaflet.css";
import { dividerColorLight } from "../../Colors";
import ReactDOMServer from "react-dom/server";

export default function MapContent() {
  const [mapIsMounted, setMapIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapIsMounted(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mapIsMounted) {
      // Initialize the map
      const map = L.map("map").setView([31.8029, -9.3158], 5);

      // Add a tile layer
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        {
          attribution: "Map tiles by Carto, CC BY 3.0",
        }
      ).addTo(map);

      const iconDataArray = [
        { latitude: 51.509865, longitude: -0.118092, color: "blue" },
        { latitude: 40.712776, longitude: -74.005974, color: "red" },
        { latitude: 35.689487, longitude: 139.691711, color: "green" },
        { latitude: -33.86882, longitude: 151.209296, color: "orange" },
        { latitude: 33.86882, longitude: -7.1406, color: "purple" },
      ];

      addFontAwesomeIconToMap(
        map,
        iconDataArray[0].latitude,
        iconDataArray[0].longitude,
        iconDataArray[0].color
      );
      addFontAwesomeIconToMap(
        map,
        iconDataArray[1].latitude,
        iconDataArray[1].longitude,
        iconDataArray[1].color
      );
      addFontAwesomeIconToMap(
        map,
        iconDataArray[2].latitude,
        iconDataArray[2].longitude,
        iconDataArray[2].color
      );
      addFontAwesomeIconToMap(
        map,
        iconDataArray[3].latitude,
        iconDataArray[3].longitude,
        iconDataArray[3].color
      );
      addFontAwesomeIconToMap(
        map,
        iconDataArray[4].latitude,
        iconDataArray[4].longitude,
        iconDataArray[4].color
      );

      return () => {
        map.remove();
      };
    }
  }, [mapIsMounted]);

  const addFontAwesomeIconToMap = (map, latitude, longitude, color) => {
    // Define icon and its properties
    const planeIcon = L.divIcon({
      className: "react-icon",
      html: ReactDOMServer.renderToString(
        <IoIosAirplane size={33} color={color} />
      ),
      iconSize: [20, 20],
    });

    // Add marker with FontAwesome Icon to the specified latitude and longitude
    L.marker([latitude, longitude], { icon: planeIcon }).addTo(map);
  };
  return (
    <>
      <Box h={"calc(100% - 50px)"} w={"100%"} display={"flex"}>
        <Box
          h={"100%"}
          w={"25%"}
          pl={2}
          pr={2}
          background={dividerColorLight}
          pt={2}
        >
          <MapSideBar />
        </Box>
        <Box h={"100%"} w={"80%"}>
          {mapIsMounted ? (
            <>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                height={"100%"}
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Box>
            </>
          ) : (
            <div
              id="map"
              style={{ height: "100%", width: "100%", zIndex: "2" }}
            ></div>
          )}
        </Box>
      </Box>
    </>
  );
}
