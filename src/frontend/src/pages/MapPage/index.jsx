import logoImg from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { useJsApiLoader, GoogleMap, Marker, StandaloneSearchBox } from '@react-google-maps/api';

import "./styles.css"

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
            id='google-map-script'
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
            <StandaloneSearchBox>
              <input
                type='text'
                placeholder='Customized your placeholder'
                style={inputStyle}
              />
            </StandaloneSearchBox>
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
  
