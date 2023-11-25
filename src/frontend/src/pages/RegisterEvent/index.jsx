import { useState } from "react";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.svg";
import { auth } from "../../services/firebaseConfig";
import "./styles.css";


export function RegisterEvent() {
  const [esporte, setEsporte] = useState("");

  return (
    <div className="container">
      <header className="header">
      <span id="titulo"> Cadastrar Evento </span>
        <span id="subTitulo"> Chegou a hora de encontrar o seu time!</span>
      </header>

      <form>
      <div className="inputContainerRegisterEvent">
          <label htmlFor="esporte">Esporte</label>
          <input
            type="text"
            name="esporte"
            id="esporte"
            placeholder="Nome do esporte"
            onChange={(e) => setEsporte(e.target.value)}
          />
        </div>

        <div className="inputContainerRegisterEvent">
          <label htmlFor="local">Local</label>
          <input
            type="text"
            name="local"
            id="local"
            placeholder="Digite o endereço do seu evento!"
            onChange={(e) => setLocal(e.target.value)}
          />
        </div>

        <div className="inputContainerRegisterEvent">
          <label htmlFor="date">Data do evento</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Digite a data do seu evento!"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="inputContainerRegisterEvent">
          <label htmlFor="date">Horário do evento</label>
          <input
            type="time"
            name="time"
            id="time"
            placeholder="Digite a hora do seu evento!"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="buttonRegisterEvent">

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
