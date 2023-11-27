const prefixo = __ENV__.API_ENDPOINT_PREFIXO;


const evento = {
  listar: async (latlng) => {  
    try {
      if(!prefixo) throw new Error('Erro ao ler a variável API_ENDPOINT_PREFIXO em .env');        
      const response = await fetch(prefixo + '/evento', { method: 'GET' });
    
      return response.json();
      
    } catch (err) {
      console.error(err);
      return [];
    }
  },
  maisProximo: async (latlng, esporteId) => {
    if(!latlng || latlng.length < 10) return;

    try {
      if(!prefixo) throw new Error('Erro ao ler a variável API_ENDPOINT_PREFIXO em .env');        
      const response = await fetch(`${prefixo}/evento/localizar?latlng=${latlng}&esporteId=${esporteId}`, { method: 'GET' });      
      return response.json();     
    } catch (err) {
      console.error(err);
      return [];
    }

  },
  cadastrar : async (body) => {

    const interval = setInterval(async () => {
      clearTimeout(interval);
      
      try {
        if(!prefixo) throw new Error('Erro ao tentar cadastrar evento');        
        const response = await fetch(prefixo + '/evento/cadastrar', { 
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          }
        });
      
        response.json();
      
      } catch (err) {
        console.error(err);
        return [];
      }
  
    }, 500);    
  }
};

export { evento };