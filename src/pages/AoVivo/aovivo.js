import React from 'react';
// Styles
import './aovivo.css';
import Header from '../../Components/Header/header'
import bg from '../../assents/bgInterac.jpg'
// Componentes
import PlayArrowIcon from '@material-ui/icons/PlayArrow';



export default function AoVivo() {
  return (
    <div className="container">
      <Header />
      <div className="container1">
        <img src={bg} alt="Imagem de exemplo" />
      </div>
      <div className="container2">
        <div className="info">

        </div>
        <div className="play">
          <div className="button"><PlayArrowIcon /></div>
        </div>
      </div>
    </div >
  );
}
