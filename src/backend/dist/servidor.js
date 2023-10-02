import Fastify from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { SwaggerTheme } from 'swagger-themes';
import usuarioRota from './rotas/usuario.rota.js';
import prismaPlugin from './plugins/prisma.js';
async function ligarServidor() {
    const app = Fastify({ logger: true });
    const theme = new SwaggerTheme('v3');
    const optionDark = theme.getBuffer('dark');
    const apiPrefix = 'api/v1/';
    async function registerCors() {
        await app.register(cors, {
            origin: ['*'],
            methods: ['GET', 'POST', 'OPTIONS'],
        });
    }
    await registerCors();
    app.get('/healthcheck', async function () {
        return { status: 'OK' };
    });
    await app.register(swagger, {
        prefix: '/docs',
        swagger: {
            info: {
                title: 'Documentação da API',
                description: 'Testando api via fastfy',
                version: '0.1.0',
            },
            host: 'localhost:3000/docs',
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
    return app;
}
export default ligarServidor;
