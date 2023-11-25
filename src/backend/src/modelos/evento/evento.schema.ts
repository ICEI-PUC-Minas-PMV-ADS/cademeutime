const eventoModelo = {
    id: {
      type: 'string',
      description: 'Id do Evento',
    },
    data: {
      type: 'string',
      description: 'Data do Evento',
    },
    hora: {
      type: 'string',
      description: 'Hora do Evento',
    },
    latlng: {
      type: 'string',
      description: 'Latitude e Longitude',
    },    
  };
  
  const eventoSchema = {
    description: 'Retorna schema do Evento',
    type: 'object',
    properties: eventoModelo,
  };

  const eventoLocalizarModelo = {
    id: {
        type: 'string',
        description: 'Google Place ID',
    },
    nome: {
        type: 'string',
        description: 'Nome do Evento',
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
    
  export {eventoSchema, eventoModelo, eventoLocalizarSchema, eventoLocalizarModelo};