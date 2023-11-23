import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import EsporteItem from "./EsporteItem";
import "./styles.css";

export function CatalogoEsporte() {
  const esportes = [
    { descricao: "Descrição do Esporte 1", imagemSrc: "caminho/para/imagem-esporte1.jpg" },
    { descricao: "Descrição do Esporte 2", imagemSrc: "caminho/para/imagem-esporte2.jpg" },
    // Adicione mais esportes conforme necessário
  ];

  return (
    <div>
      <Header />
      <div className="containerCatalogo">
        <div>
          <h1>Descubra seu esporte favorito!</h1>
          <p>Aqui está o catálogo de esportes:</p>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {esportes.map((esporte, index) => (
              <EsporteItem key={index} {...esporte} />
            ))}
          </div>

          <div className="buttonHome">
            <Link to="/register">Junte-se ao nosso time</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

