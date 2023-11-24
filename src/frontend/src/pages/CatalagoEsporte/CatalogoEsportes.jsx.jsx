// CatalogoEsportes.jsx
import React from "react";

const CatalogoEsportes = () => {
  // Coloque lógica de carregamento de produtos aqui
  const esportes = [
    { id: 1, nome: "Esporte 1", participantes: 5 },
    { id: 2, nome: "Esporte 2", participantes: 10 },
    // Adicione mais esportess conforme necessário
  ];

  return (
    <div className="catalogoEsportes">
      <h2>Catálogo de Esportes</h2>
      <ul>
        {esportes.map((esporte) => (
          <li key={esporte.id}>
            <strong>{esporte.nome}</strong>
            <p>Participantes: R${esportes.participantes}</p>
            {/* Adicione mais detalhes conforme necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogoEsportes;

