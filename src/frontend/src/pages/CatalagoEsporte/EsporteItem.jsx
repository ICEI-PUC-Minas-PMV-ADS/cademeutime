// EsporteItem.jsx
import React from "react";

const EsporteItem = ({ imagemSrc, descricao }) => (
  <div className="col">
    <div className="card shadow-sm">
      <img src={imagemSrc} className="bd-placeholder-img card-img-top" alt="Esporte" />
      <div className="card-body">
        <p className="card-text">{descricao}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
);

export default EsporteItem;
