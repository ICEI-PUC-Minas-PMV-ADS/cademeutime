import { useState } from "react";
import logoImg from "../../assets/logo.svg"
import imageHome from "../../assets/imageHome.svg"
import { Link } from "react-router-dom"
import "./styles.css"

export function Home (){
  return (
      <div>
        <header className="headerHome">
            <img src={logoImg} alt="Cadê meu time?"/>
              <div className="buttonHeader">
                <Link 
                  className="entrar"
                  to="/login">Entrar
                </Link>
                <Link 
                  className="cadastro"
                  to="/register">Cadastrar-se
                </Link>
            </div>
        </header>
        <div className="containerHome">
          <div>
            <h1>Praticar esportes com pessoas da sua região é mais divertido e seguro com o 
            {''} <a>cadê meu time?</a>
            </h1>
            <p>
              É simples! Basta se cadastrar no aplicativo e escolher o esporte que você deseja praticar. Em seguida, você poderá ver todos os eventos que estão acontecendo perto de você. 
              Se você encontrar um evento que lhe interesse, basta se inscrever para participar.
            </p>
            <div className="buttonHome">
              <Link to="/register">Junte-se ao nosso time</Link>
            </div>
          </div>
          <img src={imageHome} alt="home" />
        </div>

        <footer className="footerHome" text="© 2023 Todos os direitos reservados">
          <p>© 2023 Todos os direitos reservados</p>
        </footer>
        
      </div>
       
  )
}