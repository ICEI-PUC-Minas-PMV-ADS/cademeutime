import Fastify, { preHandlerHookHandler, type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { SwaggerTheme } from 'swagger-themes';
import usuarioRota from './rotas/usuario.rota.js';
import prismaPlugin from './plugins/prisma.js';
import { createRequire } from "module";
import eventoRota, { eventoLocalizarRota } from './rotas/evento.rota.js';
import esporteRota from './rotas/esporte.rota.js';
import loginRota from './rotas/login.rota.js';

interface IFastfyInstance extends FastifyInstance {
  jwt: any;
  authenticate?: preHandlerHookHandler<any>
}
const require = createRequire(import.meta.url);

async function ligarServidor(): Promise<IFastfyInstance> {
  const app : IFastfyInstance = Fastify({ logger: true }) as any;
  
  const theme = new SwaggerTheme('v3');
  const optionDark = theme.getBuffer('dark');
  const apiPrefix = 'api/v1/';

  async function registerCors(): Promise<void> {
    await app.register(cors, {
      origin: ['*'],
      methods: ['GET', 'POST', 'OPTIONS'],
    });
  }

  await registerCors();

  app.decorate("authenticate", async (req: any, reply : any) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })

  app.after(() => {
    if(!app.authenticate) return;
    
    app.route({
      method: 'GET',
      url: '/auth',
      preHandler: [app.authenticate as any],
      handler: (req, reply) => {
        reply.send('Logado')
      }
    })
  })

  app.register(require('@fastify/jwt'), { secret: 'cademeutimeseila'
  });

  await app.register(swagger, {
    prefix: '/docs',
    swagger: {
      info: {
        title: 'Documentação da API',
        description: 'Testando api via fastfy',
        version: '0.1.0',
      },
      host: '/docs',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  });

  // Swagger UI plugin
  await app.register(swaggerUi, {
    theme: {
      css: [{ filename: 'theme.css', content: optionDark }],
    },
    routePrefix: '/docs',
  });

  // Prisma UI plugin
  await app.register(prismaPlugin);
  
  await app.register(usuarioRota, { prefix: apiPrefix });
  await app.register(eventoRota, { prefix: apiPrefix });
  await app.register(eventoLocalizarRota, { prefix: apiPrefix });
  await app.register(esporteRota, { prefix: apiPrefix });
  await app.register(loginRota, { prefix: apiPrefix });
  
  app.post('/signup', (req, reply) => {
    const body : any = req.body;

    if(body.login === 'rider@gmail.com' && body.senha === 'testedelogin'){
      const token = app.jwt.sign({result: 'ok'})
      reply.send({token})
    }
    
    reply.status(401).send({feedback: 'Login inválido'})
    
  });
  
  app.get('/healthcheck', async function () {
    return { status: 'OK' };
  });
  return app;
}

export default ligarServidor;
