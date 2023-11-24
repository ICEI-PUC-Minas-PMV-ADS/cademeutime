// index.jsx
import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import CatalogoEsportes from "../../components/CatalogoEsportes"; // Importa o componente

import "./styles.css";

export function CatalogoEsporte() {
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
          <h1>Conheça nossos esportes!</h1>

          {/* Renderize o componente de catálogo aqui */}
          <CatalogoEsportes />

        </div>
      </div>

      <footer className="footerHome" text="© 2023 Todos os direitos reservados">
        <p>© 2023 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}



      
     

