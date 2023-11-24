const prefixo = __ENV__.API_ENDPOINT_PREFIXO;

const localizarEventoProximo = async (latlng) => {

    console.log(latlng);
    if(!latlng || latlng.length < 10) return;

   const interval = setInterval(async () => {
      clearTimeout(interval);
      
      try {
        if(!prefixo) throw new Error('Erro ao ler a variável API_ENDPOINT_PREFIXO em .env');        
        const response = await fetch(prefixo + '/evento/localizar?latlng=' + latlng, { method: 'GET' });
      
        response.json();
      
      } catch (err) {
        console.error(err);
        return [];
      }

    }, 500);    
}

export { localizarEventoProximo };