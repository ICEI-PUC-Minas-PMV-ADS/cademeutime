import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'
import { ILogin } from "../modelos/login/login.interface.js";
import { server } from "../app.js";

const prisma = new PrismaClient();

async function login(
    requisicao: FastifyRequest<{Body: ILogin}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const {email, senha} = requisicao.body;
        const usuario = await prisma.usuario.findUnique({where: {email, senha}});
        let token = '';

        if(usuario){
            token = server.jwt.sign({result: 'ok'});
        }

        await resposta.code(200).send(token);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

export const loginController = {
    login
};