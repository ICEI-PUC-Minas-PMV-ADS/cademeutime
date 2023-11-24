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
      <div>
        <header className="headerMap">
          <img src={logoImg} alt="Cadê meu time?"/>
        </header>
        <div className="tituleMap">
            <h1>Encontre um time perto de você!</h1>
            <p>
              Aqui, você poderá ver todos os eventos que estão acontecendo perto de você. 
              Se você encontrar um evento que lhe interesse, basta se inscrever para participar.
            </p>
        </div>
        <div className="map">
          {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '80%' }}
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
          <div className="verMais">
            <Link to="/event"> Ver mais eventos </Link>
          </div>          
        </div>
        <footer className="footerHome" text="© 2023 Todos os direitos reservados">
          <p>© 2023 Todos os direitos reservados</p>
        </footer>
      </div>
    );
  };
  
  export default MapPage;
  
