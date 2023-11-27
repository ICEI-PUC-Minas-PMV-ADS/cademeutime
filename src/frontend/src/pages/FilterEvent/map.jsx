import { useEffect, useRef } from "react";
import { iniciarGeolocalizacao } from "../../services/geolocation";
import { iniciarFeedback } from "../../forms/utils.form";
import { evento } from "../../endpoints/evento.endpoint";

function coordenadaGoogle(latlng) {
  const coordenadas = latlng.split(',');
  return { lat: +coordenadas[0], lng: +coordenadas[1] };
}

function EventMap({
    zoom,
    esporteId
  }) {
    const ref = useRef();
    
  
    useEffect(() => {
      const feedback = iniciarFeedback();    

      async function success(position) {
        const center = { lat: position.coords.latitude, lng: position.coords.longitude };
                
        const map = new window.google.maps.Map(ref.current, {
          center,
          zoom,
          panControl: false,
          mapTypeControl: false,
          streetViewControl: false
        });
        
        const marker = new google.maps.Marker({
          position: center,
          label: 'EU',
          map,
          center,
        }); 
    
        marker.addListener('click', () => {
          map.setCenter(center);
          map.setZoom(16);
        });

        feedback.esconder();

        let time = 1;
        const locais = await evento.maisProximo(`${center.lat},${center.lng}`, esporteId);
        
        if(locais?.length) {
          let mensagem = `Foram encontradas ${locais.length} eventos próximos a você.`;
          if(locais.length === 1)
            mensagem=`Foi encontrado ${locais.length} evento próximo a você.`;

          feedback.exibirTexto(mensagem);
          feedback.estilo.info();
        } else {
          feedback.exibirTexto(`Sem Eventos próximos para essa modalida de esporte`);
          feedback.estilo.erro();
        }

        

        const selecionarEvento = (latlng) => {
          const position = coordenadaGoogle(latlng);
          map.setCenter(position);
          map.setZoom(16);
        };

        const ul = document.getElementById('lista-eventos');
        ul.innerHTML = '';

        const div = document.createElement("div");
          div.onclick = (e) =>  { 
            map.setCenter(center);
            map.setZoom(12);
          }
          div.innerHTML = `
            <button type='button'>
              Meu local
            </button>            
          `;
          ul.appendChild(div);
  
        for(const local of locais) {
          time++;
          const position = coordenadaGoogle(local.latlng);

          const li = document.createElement("li");
          li.onclick = (e) => { 
            selecionarEvento(local.latlng);

            const button  = document.getElementById('seletor-evento') || document.createElement('button');

            button.id = 'seletor-evento';
            button.innerText = 'Informar Presença';
            button.setAttribute('type', 'button');
            button.className = 'sm';
            button.onclick = () => window.location.href = '/cademeutime/login';
            li.appendChild(button);
            
          }

          li.innerHTML = `
            <div>
              <strong>Evento</strong>: ${local.nome}
            </div>            
            <div>
              <strong>Esporte</strong>: ${local.esporte}
            </div>
            <div>
              <strong>Distância</strong>: ${local.distancia.texto}
            </div>
            <div class='mt-2'>
              <strong>Local</strong>: ${local.local}
            </div>
            <hr>
          `;
          ul.appendChild(li);
          
          setTimeout(() => {
            const marker = new google.maps.Marker({
              position,
              label: local.distancia.texto,
              map,
              animation: google.maps.Animation.DROP
            });
  
            marker.addListener('click', () => {
              map.setCenter(position);
              map.setZoom(16);
            });
          }, time * 500);
        }

        

        map.setZoom(12);
      }
      
      function error() {
          feedback.exibirTexto("Não é possível obter sua geolocalização.");
          feedback.estilo.erro();
      }
      
      iniciarGeolocalizacao(success, error);
    });
  
    return <div ref={ref} id="map" />;
  }

  export {EventMap};