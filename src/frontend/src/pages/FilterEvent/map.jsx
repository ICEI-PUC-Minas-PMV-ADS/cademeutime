import { useEffect, useRef } from "react";
import { iniciarGeolocalizacao } from "../../services/geolocation";
import { iniciarFeedback } from "../../forms/utils.form";
import { evento } from "../../endpoints/evento.endpoint";

function EventMap({
    zoom,
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
        const locais = await evento.maisProximo(`${center.lat}, ${center.lng}`);
        
        feedback.exibirTexto(`Foram encontradas ${locais.length} eventos próximos a você.`);
        feedback.estilo.info();

        for(const local of locais) {
          time++;
          const coordenadas = local.latlng.split(',');
          const position = { lat: +coordenadas[0], lng: +coordenadas[1] };
          
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