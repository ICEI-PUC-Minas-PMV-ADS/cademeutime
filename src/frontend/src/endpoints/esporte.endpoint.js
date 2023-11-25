const prefixo = __ENV__.API_ENDPOINT_PREFIXO;


const esporte = {
  listar : async () => {
    try {
      if(!prefixo) throw new Error('Erro ao ler a variável API_ENDPOINT_PREFIXO em .env');        
      const response = await fetch(prefixo + '/esporte', { method: 'GET' });
    
      return response.json();
    
    } catch (err) {
      console.error(err);
      return [];
    }   
  }
};

export { esporte };