import { useState } from "react";
import logoImg from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import "./header.css"
import { FcSportsMode } from "react-icons/fc";

function Header() {
  return (
      <div>
        <header className="headerHome">
            <img src={logoImg} alt="Cadê meu time?"/>
              <div className="buttonHeader">
                <Link 
                  className="entrar"
                  to="/login"><FcSportsMode
                   size={30} /> Entrar 
                </Link>
                <Link 
                  className="cadastro"
                  to="/register">Cadastrar-se
                </Link>
            </div>
        </header>
		  </div>
       
  )
}

export default Header