import { FastifyInstance } from "fastify";
import { ERotas } from "./constantes.rota.js";
import { error404 } from "./util.rota.js";
import { usuarioController } from "../controladoras/usuario.controller.js";
import { usuarioListaSchema, usuarioModelo, usuarioSchema } from "../modelos/usuario/usuario.schema.js";

const recurso = 'Usuário';

export default async function usuarioRota(
    app: FastifyInstance,
  ): Promise<void> {
    app.post(
      ERotas.usuario,
      {
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
      },
      usuarioController.cadastrar,
    );

   app.put(
      ERotas.usuario,
      {
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
      },
      usuarioController.atualizar,
    );

    app.delete(
      ERotas.usuario,
      {
        schema: {
          querystring: {
            type: 'object',
            properties: usuarioModelo,
            required: ['email'],
          },
          response: {
            200: usuarioSchema,
            404: error404(recurso),
          },
        },
      },
      usuarioController.deletar,
    );

    app.get(
      ERotas.usuario,
      {
        schema: {
          querystring: {
            type: 'object',
            properties: {}            
          },
          response: {
            200: usuarioListaSchema,
            404: error404(recurso),
          },
        },
      },
      usuarioController.listar,
    );
  }