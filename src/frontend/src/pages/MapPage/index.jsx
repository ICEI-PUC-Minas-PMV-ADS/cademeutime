import { useState } from "react";
import logoImg from "../../assets/logo.svg"
import imageHome from "../../assets/imageHome.svg"
import { Link } from "react-router-dom"
import "./styles.css"
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

export function MapPage () {
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyA__xsAK-LMBlr4QEIK9JcUUAh440IwYgc",
    });
  
    const position = {
      lat: -27.590824,
      lng: -48.551262
    };
  
    return (
      <div className="map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={position}
            zoom={15}
          >
            <Marker
              position={position}
              options={{
                label: {
                  text: "Posição Teste",
                  className: "map-marker",
                },
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    );
  };
  
  export default MapPage;
  
