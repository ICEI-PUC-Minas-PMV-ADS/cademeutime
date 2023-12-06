import React, { useState, useRef, useEffect } from "react";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FcSportsMode } from "react-icons/fc";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className="headerHome">
        <img src={logoImg} alt="Cadê meu time?" />
        <div className="buttonHeader">
          <div className="container" ref={containerRef}>
            <input type="checkbox" className="container_botao" id="menu" checked={menuOpen} onChange={toggleMenu} />
            <label htmlFor="menu" className="container_rotulo">
              <span className="cabecalho_menu_hamburguer container_img">Menu</span>
            </label>
            <ul className="lista_menu" style={{ display: menuOpen ? "block" : "none" }}>
              <li className="lista_menu_item">
                <Link to="/registerEvent" className="lista_menu_link" onClick={closeMenu}>
                  Registrar Evento
                </Link>
              </li>
              <li className="lista_menu_item">
                <Link to="/ViewEvents" className="lista_menu_link" onClick={closeMenu}>
                  Visualizar Eventos
                </Link>
              </li>
              <li className="lista_menu_item">
                <Link to="/filterEvent" className="lista_menu_link" onClick={closeMenu}>
                  Filtrar Eventos
                </Link>
              </li>
            </ul>
          </div>
          <Link className="cadastro" to="/login">
            <FcSportsMode size={30} /> Entrar
          </Link>
          <Link className="cadastro" to="/register">
            Cadastrar-se
          </Link>
        </div>
      </header>
      <hr className="separador" />
    </div>
  );
}

export default Header;
