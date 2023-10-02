import ligarServidor from "../src/servidor.js";

describe('Teste de Servidor', () => {
  let fastify: any;

  beforeAll(async () => {
    fastify = await ligarServidor();
  });

  afterAll(async () => {
    await fastify.close();
  });

  test('verificar `/healthcheck` api', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/healthcheck',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe('OK');
  });
});
