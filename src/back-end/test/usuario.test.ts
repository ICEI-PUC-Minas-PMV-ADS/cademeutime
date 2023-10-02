import { IEvento } from "../src/modelos/evento/evento.interface.js";
import { IUsuario } from "../src/modelos/usuario/usuario.interface.js";
import ligarServidor from "../src/servidor.js";

describe('Teste de Usuário', () => {
  let fastify: any;

  beforeAll(async () => {
    fastify = await ligarServidor();
  });

  afterAll(async () => {
    await fastify.close();
  });

  test('Salvando usuario', async () => {
    const data : IUsuario = {
      email: "dev.cantuaria@gmail.com",
      senha: "123456",
      nome: "Ríder Rocha Cantuária"
    };
    const response = await fastify.inject({
      method: 'POST',
      url: '/usuario',
      data
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe(data);
  });

  test('Atualizando usuario', async () => {
    const data : IUsuario = {
      email: "dev.cantuaria@gmail.com",
      nome: "Ríder Rocha"
    };
    const response = await fastify.inject({
      method: 'PUT',
      url: '/usuario',
      data
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe(data);
  });

  test('Listando usuarios', async () => {

    const data : IUsuario = {
      id: "1",
      email: "dev.cantuaria@gmail.com",
      nome: "Ríder Rocha",
      senha: "123456",
    };

    const response = await fastify.inject({
      method: 'GET',
      url: '/usuario'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe([data]);
  });

  test('Removendo usuarios', async () => {

    const response = await fastify.inject({
      method: 'DELETE',
      url: '/usuario',
      query : { id : "1" }
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe(null);
  });

  test('Listando usuarios', async () => {

    const response = await fastify.inject({
      method: 'GET',
      url: '/usuario'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe([]);
  });
});
