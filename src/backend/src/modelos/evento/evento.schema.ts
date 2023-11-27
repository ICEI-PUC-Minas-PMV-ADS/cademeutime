const eventoModelo = {
    id: {
      type: 'string',
      description: 'Id do Evento',
    },
    nome: {
      type: 'string',
      description: 'Nome do Evento',
    },
    esporte: {
      type: 'string',
      description: 'Esporte do Evento',
    },
    local: {
      type: 'string',
      description: 'Local informado pelo Google',
    },
    data: {
      type: 'string',
      description: 'Data do Evento',
    },    
    latlng: {
      type: 'string',
      description: 'Latitude e Longitude do evento',
    },    
  };
  
  const eventoSchema = {
    description: 'Retorna schema do Evento',
    type: 'object',
    properties: eventoModelo,
  };

  const eventoListaSchema = {
    description: 'Retorna schema da lista de eventos',
    type: 'array',   
    items: {
      type: 'object',
      properties: eventoModelo
    }
  }

  const eventoLocalizarModelo = {
    id: {
        type: 'string',
        description: 'Google Place ID',
    },
    nome: {
        type: 'string',
        description: 'Nome do Evento',
    },
    esporte: {
      type: 'string',
      description: 'Esporte do Evento',
    },
    local: {
      type: 'string',
      description: 'Local informado pelo Google',
    },
    data: {
      type: 'string',
      description: 'Data do Evento',
    }, 
    latlng: {
        type: 'string',
        description: 'Localização do evento',
    },    
    distancia: {
        type: 'object',
        description: 'Distância em metros',
        properties: {
          texto: {
            type: 'string',
            description: 'Distância por extenso',
          },
          valor: {
            type: 'number',
            description: 'Distância em metros',
          },
        },
    },
  };

  const eventoLocalizarSchema = {
    description: 'Retorna schema de localizações de Evento',
    type: 'array',   
    items: {
      type: 'object',
      properties: eventoLocalizarModelo
    }
  };
    
  export {eventoSchema, eventoModelo, eventoLocalizarSchema, eventoLocalizarModelo, eventoListaSchema};