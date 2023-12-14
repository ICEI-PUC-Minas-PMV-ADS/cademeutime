"use client"

import Select from 'react-select';
import { useEffect, useState } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { EventMap } from './map';

import arrowImg from "@/app/assets/arrow.22a4cc9d.svg";
import { cadastrarEvento } from "@/app/forms/evento.cadastro.form";
import { esporte } from '@/app/endpoints/esporte.endpoint';
import { selectControl } from '@/app/forms/utils.form';

import "./page.css"
import { GOOGLE_API_KEY } from '../env';
import Image from 'next/image';

export default function RegisterEvent() {
  const [esportes, setEsportes] = useState([]);

  const apiKey = GOOGLE_API_KEY;

  const position = { lat: -27.590824, lng: -48.551262 };

  useEffect(() => {
    
    const getEsporteLista = async () => {
      const lista = await esporte.listar();
      setEsportes(lista.map(x => {
        return {
          label: x.nome,
          value: x.id,
        }
      }));
    }

    if(!esportes.length) getEsporteLista();

  },[esportes]);
  
  const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };

  let esporteSeletor;
  const limparSeletores = () => {
    esporteSeletor.setValue('');
  };

  const id = Date.now().toString();

  return (
    <div className="content">
      <div className='container'>
        <header className="header">      
          <span id="titulo"> Cadastrar Evento </span>
          <span id="subTitulo"> Chegou a hora de encontrar o seu time!</span>
          <div id="feedback" className="alerta"></div>
        </header>
        <form id="evento-form" onSubmit={(e) => cadastrarEvento(e, limparSeletores)}>
          <div className="inputContainer">
            <label htmlFor="nome">Nome do Evento</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite o nome do seu evento!"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="esporte-input">Esporte</label>
            <Select
              id={id}
              className='select'
              styles={selectControl()}
              placeholder='Selecione o esporte'
                ref={ref => {
                  esporteSeletor = ref;
                }}
              name="esporteId"
              options={esportes}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="local">Local</label>
            <input
              type="text"
              name="local"
              id="local"
              placeholder="Digite o endereço do seu evento!"           
            />
            <input id="latlng" type="hidden" name="latlng"/>
            <Wrapper apiKey={apiKey} render={render as any} libraries={["places"]}>
              <EventMap center={position} zoom={11} />
            </Wrapper>
              
          </div>
          <div className="inputContainer">
            <label htmlFor="date">Data do evento</label>
            <input
              type="date"
              name="data"
              placeholder="Digite a data do seu evento!"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="date">Horário do evento</label>
            <input
              type="time"
              name="hora"
              placeholder="Digite a hora do seu evento!"
            />          
          </div>

          <button type="submit" className="button">
            Cadastrar Evento<Image src={arrowImg} alt="->" ></Image>
          </button>     
        </form>
      </div>
    </div>
  );
}
