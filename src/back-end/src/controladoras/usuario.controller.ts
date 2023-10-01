import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'
import { IUsuario } from "../modelos/usuario.interface.js";
const prisma = new PrismaClient()

async function cadastrar(
    requisicao: FastifyRequest<{Body: IUsuario}>,
    resposta: FastifyReply,
): Promise<void> {
    try {      
        const post = await prisma.post.create({
            data: requisicao.body,
        });

        await resposta.code(200).send(post);
    } catch (e) {
        await resposta.code(500).send(e);
    }
}

async function atualizar(
    requisicao: FastifyRequest<{Body: IUsuario}>,
    resposta: FastifyReply,
): Promise<void> {
    try {

        // evita mudar login e senha, precisa ser tratado em outra funcao
        delete requisicao.body.senha;
        delete requisicao.body.email;

        const post = await prisma.post.update({
            data: requisicao.body,
        });

        await resposta.code(200).send(post);
    } catch (e) {
        await resposta.code(500).send(e);
    }
}

export const usuarioController = {
    cadastrar, atualizar
};