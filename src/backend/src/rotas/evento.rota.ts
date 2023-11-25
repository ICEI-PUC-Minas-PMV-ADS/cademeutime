import { FastifyInstance } from "fastify";
import { ERotas } from "./constantes.rota.js";
import { error404 } from "./util.rota.js";
import { usuarioController } from "../controladoras/usuario.controller.js";
import { eventoLocalizarSchema, eventoModelo, eventoSchema } from "../modelos/evento/evento.schema.js";
import { eventoController } from "../controladoras/evento.controller.js";

const recurso = 'Evento';

export default async function eventoRota(
    app: FastifyInstance,
  ): Promise<void> {
    app.post(
      ERotas.eventoCadastrar,
      {
        schema: {
          body: {
            type: 'object',
            properties: eventoModelo,
            required: ['esporteId', 'latlng', 'data', 'hora'],
          },
          response: {
            200: eventoSchema,
            404: error404(recurso),
          },
        },
      },
      eventoController.cadastrar,
    );
  }

  export async function eventoLocalizarRota(
    app: FastifyInstance,
  ): Promise<void> {
 
    app.get(
      ERotas.localizarEvento,
      {
        schema: {
          querystring: {
            latlng: { type: 'string' },            
          },
          response: {
            200: eventoLocalizarSchema,
            404: error404(recurso),
          },
        },
      },
      eventoController.encontrarMaisProximo,
    );
  }