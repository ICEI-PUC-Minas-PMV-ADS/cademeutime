import { FastifyInstance } from "fastify";
import { ERotas } from "./constantes.rota.js";
import { error404 } from "./util.rota.js";
import { esporteModelo, esporteSchema } from "../modelos/esporte/esporte.schema.js";
import { esporteController } from "../controladoras/esporte.controller.js";

const recurso = 'Esporte';

export default async function esporteRota(
    app: FastifyInstance,
  ): Promise<void> {
    app.get(
      ERotas.esporte,
      {
        schema: {         
          response: {
            200: esporteSchema,
            404: error404(recurso),
          },
        },
      },
      esporteController.listar,
    );
  }