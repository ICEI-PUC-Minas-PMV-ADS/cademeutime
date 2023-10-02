import { ERotas } from "./constantes.rota.js";
import { error404 } from "./util.rota.js";
import { usuarioController } from "../controladoras/usuario.controller.js";
import { usuarioModelo, usuarioSchema } from "../modelos/usuario/usuario.schema.js";
const recurso = 'Usuário';
export default async function usuarioRota(app) {
    app.post(ERotas.usuario, {
        schema: {
            body: {
                type: 'object',
                properties: usuarioModelo,
                required: ['nome', 'email', 'senha'],
            },
            response: {
                200: usuarioSchema,
                404: error404(recurso),
            },
        },
    }, usuarioController.cadastrar);
    app.put(ERotas.usuario, {
        schema: {
            body: {
                type: 'object',
                properties: usuarioModelo,
                required: ['nome', 'email'],
            },
            response: {
                200: usuarioSchema,
                404: error404(recurso),
            },
        },
    }, usuarioController.atualizar);
    app.delete(ERotas.usuario, {
        schema: {
            body: {
                type: 'object',
                properties: usuarioModelo,
                required: ['id'],
            },
            response: {
                200: usuarioSchema,
                404: error404(recurso),
            },
        },
    }, usuarioController.deletar);
    app.get(ERotas.usuario, {
        schema: {
            body: {
                type: 'object',
                properties: usuarioModelo
            },
            response: {
                200: usuarioSchema,
                404: error404(recurso),
            },
        },
    }, usuarioController.listar);
}
