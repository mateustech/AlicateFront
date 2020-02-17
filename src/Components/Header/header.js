import React from 'react';
import './header.css'

export default function DenseAppBar() {

  return (
    <React.Fragment>
      <div className="container-feed">
        <div className="navbar">
          <div className="links">
            <a href="/">Pra Você</a>
            <a>Descobrir</a>
            <a>Ao Vivo</a>
            <a href="perfil">Perfil</a>
            <a>Categorias</a>
          </div>
        </div>

      </div>
    </React.Fragment >
  );
}