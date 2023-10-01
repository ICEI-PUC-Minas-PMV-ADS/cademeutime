import { FastifyInstance } from "fastify";
import { ERotas } from "./constantes.rota";
import { usuarioModelo, usuarioSchema } from "../modelos/usuario.schema";
import { error404 } from "./util.rota";
import { usuarioController } from "../controladoras/usuario.controller";

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