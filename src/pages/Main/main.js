import React from 'react';
import Header from '../../components/Header/header'

import './main.css'
import Slider from "../../components/Slider/Slider";

export default function Main() {
    return (
        <div className="bg-project">
            <Header/>
            <div className="main">
                <div className="content">
                    <div className="title-featured">Carcereiros</div>
                    <div className="classification">
                        <div className="age">16</div>
                        <div className="description">Atos Criminosos, Conteúdo Sexual, Drogas</div>
                    </div>
                    <div className="synopsis">Inspirada na obra de Dráuzio Varella, a série premiada em Cannes traz a visão do agente penitenciário Adriano, que vive entre muros, grades, armas e ameaças</div>
                    <div className="options">
                        <button className="btn btn-primary" style={{ marginRight: '20px'}}>Assistir</button>
                        <button className="btn btn-outline-secondary"><span className="icon-more">+</span>Lista</button>
                    </div>
                </div>
            </div>
            <Slider category="Novidades"/>
            <Slider category="Novelas"/>
            <Slider category="Series"/>
        </div>
    );
}
