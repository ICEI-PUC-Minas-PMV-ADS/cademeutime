import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import "../Esportes/styles.css";

export function Esportes() {
  return (
    <div>
      <header className="headerHome">
        <img src={logoImg} alt="Cadê meu time?" />
        <div className="buttonHeader">
          <Link className="entrar" to="/login">
            Entrar
          </Link>
          <Link className="cadastro" to="/register">
            Cadastrar-se
          </Link>
        </div>
      </header>
      <div className="containerHome">
        <div>
       <h1>Conheça nossos esportes e descubra qual é o seu time!</h1>
          

          <p><div className="buttonPage">
            <Link className="registerEvent" to="/registerEvent">
              Cadastrar Evento
            </Link>
            <Link className="evento" to="/eventDescription">
              Ver eventos disponíveis
            </Link>
          </div>

          </p>         
          
        </div>
      </div>
      
      <footer className="footerHome">
        <p>© 2023 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}


