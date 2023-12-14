import { API_ENDPOINT_PREFIXO } from "../env";

const prefixo = API_ENDPOINT_PREFIXO;


const login = { 
  logar : async (body: any) : Promise<any> => {
 
    try {
      const endpoint = prefixo.replace('/api/v1','') + '/signup';
      if(!prefixo) throw new Error('Erro ao tentar cadastrar evento');     
      const response = await fetch(endpoint, { 
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        }
      });
        
      return response;
      
    } catch (err) {
      console.error(err);
      return;
    }  
  }
};

export { login };