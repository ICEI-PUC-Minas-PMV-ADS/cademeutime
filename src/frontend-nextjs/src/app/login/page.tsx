"use client"

import Link from "next/link";

import arrowImg from "@/app/assets/arrow.22a4cc9d.svg";

import "./page.css";
import Image from "next/image";
import { cadastrarEvento } from "../forms/evento.cadastro.form";
import efetuarLogin from "../forms/login.form";

export default function  Login() {
  
  function handleSignIn(e : any) {
    e.preventDefault();
  }

  return (
    <div className="content">
      <div className="container">
        <header className="header">
          <span id="titulo"> Entrar </span>
          <span id="subTitulo"> Oi! Bem-vindo de volta!</span>
          <div id="feedback" className="alerta"></div>
        </header>

        <form onSubmit={(e) => efetuarLogin(e)}>
          <div className="inputContainer">
            <label htmlFor="login">E-mail</label>
            <input
              type="text"
              name="login"
              id="logins"
              placeholder="Digite seu email"              
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite sua senha"
            />
            <a id="esquecerSenha" href="#">Esqueceu sua senha?</a>
          </div>

          <button type='submit' className="button">
            Entrar <Image src={arrowImg} alt="->"></Image>
          </button>
          <div className="footer">
            <p>Você não tem uma conta?</p>
            <Link href="/register">Crie a sua conta aqui</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
