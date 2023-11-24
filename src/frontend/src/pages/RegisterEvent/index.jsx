import { useState } from "react";
import { Link } from "react-router-dom";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { EventMap } from './map';

import arrowImg from "../../assets/arrow.svg";
import { localizarEventoProximo } from "../../endpoints/evento.endpoint";

import '../../maps/autocomplete.map';
import "./styles.css"

export function RegisterEvent() {
  const [esporte, setEsporte] = useState("");

  const apiKey = __ENV__.GOOGLE_API_KEY;

  const position = {
    lat: -27.590824,
    lng: -48.551262
  };
  
  const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };

  return (
    <div className="container">
      <header className="header">
      <span id="titulo"> Cadastrar Evento </span>
        <span id="subTitulo"> Chegou a hora de encontrar o seu time!</span>
      </header>

      <form>
      <div className="inputContainer">
          <label htmlFor="esporte">Esporte</label>
          <input
            type="text"
            name="esporte"
            id="esporte"
            placeholder="Nome do esporte"
            onChange={(e) => setEsporte(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="local">Local</label>
          <input
            type="text"
            name="local"
            id="local"
            placeholder="Digite o endereço do seu evento!"           
          />
          <Wrapper apiKey={apiKey} render={render} libraries={["places"]}>
            <EventMap center={position} zoom={11} />
          </Wrapper>
            
        </div>
        <div className="inputContainer">
          
        </div>

        <div className="inputContainer">
          <label htmlFor="date">Data do evento</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Digite a data do seu evento!"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="date">Horário do evento</label>
          <input
            type="time"
            name="time"
            id="time"
            placeholder="Digite a hora do seu evento!"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="button">

          Cadastrar Evento<img src={arrowImg} alt="->" />
        </button>
        <div className="footer">     

        <div className="footer">
          
          <Link to="/login">Veja seus eventos aqui!</Link>
        </div>

        </div>
      </form>
    </div>
  );
}
