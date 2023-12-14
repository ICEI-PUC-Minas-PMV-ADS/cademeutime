"use client"

import React, { useState, useRef, useEffect } from "react";

import logoImg from '@/app/assets/logo.71dbab42.svg';
import { FcSportsMode } from "react-icons/fc";

import "./header.css";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logado, setLogado] = useState('false');
  const containerRef = useRef<any>(null);

  useEffect(() => {
    
    const logadoStatus : any = localStorage.getItem('logado');
    setLogado(logadoStatus);

    const handleOutsideClick = (event: any) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [logado]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className="headerHome">
        <Link href="/">
          <Image src={logoImg} alt="Cadê meu time?" />
        </Link>
        <div className="buttonHeader">
        { logado && <div className="container" ref={containerRef}>
            <input type="checkbox" className="container_botao" id="menu" checked={menuOpen} onChange={toggleMenu} />
            <label htmlFor="menu" className="container_rotulo">
              <FcSportsMode size={30} />
              <span className="cabecalho_menu_hamburguer container_img">Menu</span>
            </label>
            
              <ul className="lista_menu" style={{ display: menuOpen ? "block" : "none" }}>
               <li className="lista_menu_item">
                <Link 
                  onClick={() => { 
                    window.location.href = "/registerEvent";
                    closeMenu();
                  }}
                  className="lista_menu_link"
                  href={"/registerEvent"}
                >
                  Registrar Evento
                </Link>
              </li>
              <li className="lista_menu_item">
                <Link 
                  onClick={() => { 
                    window.location.href = "/viewEvents";
                    closeMenu();
                  }}
                  href="/viewEvents"
                  className="lista_menu_link"
                >
                  Visualizar Eventos
                </Link>
              </li>
              <li className="lista_menu_item">
                <Link 
                  onClick={() => { 
                    window.location.href = "/filterEvent";
                    closeMenu();
                  }}
                  href="/filterEvent"
                  className="lista_menu_link"
                >
                  Filtrar Eventos
                </Link>
              </li>
              <li className="lista_menu_item">
                <Link 
                  onClick={() => { 
                    localStorage.clear();
                    window.location.href = "/";                    
                  }}
                  href="/"
                  className="lista_menu_link"
                >
                  Sair
                </Link>
              </li>
            </ul>
          </div>}
          { !logado && 
            (<>
              <Link className="cadastro" href="/login">
                Entrar
              </Link>
              <Link className="cadastro" href="/register">
                Cadastre-se
              </Link>
            </>)
          }
        </div>
      </header>
      <hr className="separador" />
    </div>
  );
}

export default Header;
