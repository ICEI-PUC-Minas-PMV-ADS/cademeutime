import Select from 'react-select';
import { useEffect, useState } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { EventMap } from './map';

import arrowImg from "../../assets/arrow.svg";
import { esporte } from '../../endpoints/esporte.endpoint';
import { iniciarFeedback, selectControl } from '../../forms/utils.form';


import "./styles.css"

export function FilterEvent() {
  const [esportes, setEsportes] = useState([]);
  const [localizar, setLocalizar] = useState(false);
  const [esporteSelecionado, setEsporteSelecionado] = useState(false);

  const apiKey = __ENV__.GOOGLE_API_KEY;

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
    
    if(!esporteSelecionado) {
      const feedback = iniciarFeedback();
      feedback.esconder();
    }

  },[esportes, esporteSelecionado]);
  
  const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };

  return (
    <div className="content">
      <div className='container lg'>
        <header className="header">      
          <span id="titulo">Selecionar evento</span>
          <span id="subTitulo">Escolha o esporte que deseja praticar agora.</span>
          <div id="feedback" className="alerta"></div>
        </header>
        
        <form>
          <div className="inputContainer">
            <label htmlFor="esporte-input">Esporte</label>
            <Select
              className='select'
              styles={selectControl()}
              isClearable={true}
              name="esporteId"
              options={esportes}
              onChange={(valor) => {
                setLocalizar(false)
                setEsporteSelecionado(valor)
              }}
            />
          </div>

          { localizar &&  (
            <div className='row'>
              <div className='col-7'>
                <Wrapper apiKey={apiKey} render={render}>
                  <EventMap zoom={11} esporteId={esporteSelecionado?.value} />
                </Wrapper>                
              </div>
              <div className='col-3 m-2'>
                <h2>Lista de Eventos</h2>
                <br/>
                <ol id='lista-eventos'/>
              </div>              
            </div>
          )}          
          <button id="localizar-btn" type="button" onClick={(e) => setLocalizar(true)} disabled={!esporteSelecionado}>
            Localizar mais próximo<img src={arrowImg} alt="->" />
          </button>     
        </form>
      </div>
    </div>
  );
}
