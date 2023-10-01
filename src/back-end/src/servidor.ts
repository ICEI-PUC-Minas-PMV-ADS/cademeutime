import Fastify, { type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { SwaggerTheme } from 'swagger-themes';
import usuarioRota from './rotas/usuario.rota.js';

async function ligarServidor(): Promise<FastifyInstance> {
  const server: FastifyInstance = Fastify({ logger: true });
  const theme = new SwaggerTheme('v3');
  const optionDark = theme.getBuffer('dark');
  const apiPrefix = 'api/v1/';

  async function registerCors(): Promise<void> {
    await server.register(cors, {
      origin: ['*'],
      methods: ['GET', 'POST', 'OPTIONS'],
    });
  }

  await registerCors();

  server.get('/healthcheck', async function () {
    return { status: 'OK' };
  });

  await server.register(swagger, {
    prefix: '/docs',
    swagger: {
      info: {
        title: 'EntryPoint API Swagger',
        description: 'Testing the Fastify swagger EntryPoint API',
        version: '0.1.0',
      },
      host: 'localhost:4000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  });

  // Register Swagger UI plugin
  await server.register(swaggerUi, {
    theme: {
      css: [{ filename: 'theme.css', content: optionDark }],
    },
    routePrefix: '/docs',
  });
  
  await server.register(usuarioRota, { prefix: apiPrefix });

  return server;
}

export default ligarServidor;
