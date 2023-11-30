import { FastifyInstance } from "fastify";
import { ERotas } from "./constantes.rota.js";
import { error404 } from "./util.rota.js";
import { loginController } from "../controladoras/login.controller.js";
import { loginModelo, loginSchema } from "../modelos/login/login.schema.js";

const recurso = 'Login';

export default async function loginRota(
    app: FastifyInstance,
  ): Promise<void> {
    app.post(
      ERotas.login,
      {
        schema: {
          body: {
            type: 'object',
            properties: loginModelo,
            required: ['email', 'senha'],
          },
          response: {
            200: loginSchema,
            404: error404(recurso),
          },
        },
      },
      loginController.login)
  }