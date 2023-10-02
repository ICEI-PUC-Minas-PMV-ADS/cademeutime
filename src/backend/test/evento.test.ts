import { IEvento } from "../src/modelos/evento/evento.interface.js";
import ligarServidor from "../src/servidor.js";

describe('Teste de Evento', () => {
  let fastify: any;

  beforeAll(async () => {
    fastify = await ligarServidor();
  });

  afterAll(async () => {
    await fastify.close();
  });

  test('Salvando evento', async () => {
    const data : IEvento = {
      autorEvento: {id: '1'} as any,
      data: 1696213358095,
      googleMaps: 'https://maps.app.goo.gl/gJsJBvSuy77mh7LN7',
      local: 'Rua da Igreja, km 432 - Sombrio SC',
      modalidade: { id: '1' },
      nome: 'Partida de Futebol no Estádio Central',
    };

    const response = await fastify.inject({
      method: 'POST',
      url: '/evento',
      data
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe(data);
  });

  test('Atualizando evento', async () => {
    const data : IEvento = {
      data: 1696213358065,
      nome: 'Partida de Futebol no Estádio Central de Sombrio',
    } as any;
    
    const response = await fastify.inject({
      method: 'PUT',
      url: '/usuario',
      data
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe(data);
  });

  test('Listando evento', async () => {

    const data : IEvento = {
      autorEvento: {id: '1'} as any,
      data: 1696213358065,
      googleMaps: 'https://maps.app.goo.gl/gJsJBvSuy77mh7LN7',
      local: 'Rua da Igreja, km 432 - Sombrio SC',
      modalidade: { id: '1' },
      nome: 'Partida de Futebol no Estádio Central de Sombrio',
    };

    const response = await fastify.inject({
      method: 'GET',
      url: '/usuario'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe([data]);
  });

  test('Removendo evento', async () => {

    const response = await fastify.inject({
      method: 'DELETE',
      url: '/evento',
      query : { id : "1" }
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe(null);
  });

  test('Listando evento', async () => {

    const response = await fastify.inject({
      method: 'GET',
      url: '/evento'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe([]);
  });
});
