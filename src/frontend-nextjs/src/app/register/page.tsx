"use client"

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import arrowImg from "@/app/assets/arrow.22a4cc9d.svg";

import "./page.css";
import { API_ENDPOINT_PREFIXO } from "../env";
import { iniciarFeedback, tratarFomulario } from "../forms/utils.form";

export default function Register() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [formData, setFormData] = useState ({
    nome: '',
    email: '',
    senha: '',
  })
  
  const handleFormEdit = (event: any, name: any) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handleForm = async (e: any) => {
    e.preventDefault();
    
    const prefixo = API_ENDPOINT_PREFIXO;
    try {
      const response = await fetch(prefixo + '/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });


      const feedback = iniciarFeedback();
        if(!response) {
            feedback.exibirTexto('Cadastro deu Falha!');
            feedback.estilo.erro();
            return;
        } else {
          feedback.exibirTexto('Cadastro realizado com sucesso!');
          feedback.estilo.sucesso();
        }
    
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);

    
    
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <div className="content">
      <div className="container">
        <header className="header">
          <span id="titulo"> Cadastrar </span>
          <span id="subTitulo"> Faça seu cadastro e encontre seu time hoje mesmo!</span>
          <div id="feedback" className="alerta"></div>
        </header>

        <form onSubmit={handleForm}> 
          <div className="inputContainer">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="nome"
              id="name"
              placeholder="Nome Completo"
              required
              value={formData.nome}
              onChange={(e) => {handleFormEdit(e, "nome")}}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu email"
              required
              value={formData.email}
              onChange={(e) => {handleFormEdit(e, "email")}}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="senha"
              id="password"
              placeholder="Digite sua nova senha"
              required
              value={formData.senha}
              onChange={(e) => {handleFormEdit(e, "senha")}}
            />
          </div>

          <button type="submit" className="button">
            Cadastrar <Image src={arrowImg} alt="->" />
          </button>
          <div className="footer">
            <p>Você já tem uma conta?</p>
            <Link href="/login">Acesse sua conta aqui</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
