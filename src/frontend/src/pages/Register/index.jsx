import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.svg";
import { auth } from "../../services/firebaseConfig";
import "./styles.css";

export function Register() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  const [formData, setFormData] = useState ({
    nome: '',
    email: '',
    senha: '',
  })
  
  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handleForm = async (event) => {
    const prefixo = __ENV__.API_ENDPOINT_PREFIXO;
    try {
      event.preventDefault()
      const response = await fetch(prefixo + '/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
    
    const json = await response.json()
    
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
            Cadastrar <img src={arrowImg} alt="->" />
          </button>
          <div className="footer">
            <p>Você já tem uma conta?</p>
            <Link to="/login">Acesse sua conta aqui</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
