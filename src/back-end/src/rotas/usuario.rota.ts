import { FastifyInstance } from "fastify";
import { ERotas } from "./constantes.rota.js";
import { usuarioModelo, usuarioSchema } from "../modelos/usuario.modelo.js";
import { error404 } from "./util.rota.js";
import { usuarioController } from "../controladoras/usuario.controller.js";

export default async function usuarioRota(
    server: FastifyInstance,
  ): Promise<void> {
    server.post(
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
            404: error404('Balance'),
          },
        },
      },
      usuarioController.cadastrar,
    );
  }