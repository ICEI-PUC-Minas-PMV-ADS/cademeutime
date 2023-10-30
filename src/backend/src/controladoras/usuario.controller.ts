import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'
import { IUsuario } from "../modelos/usuario/usuario.interface.js";

const prisma = new PrismaClient();

async function cadastrar(
    requisicao: FastifyRequest<{Body: IUsuario}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const usuario = await prisma.usuario.create({
            data: requisicao.body as any
        });
        await resposta.code(200).send(usuario);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

async function atualizar(
    requisicao: FastifyRequest<{Body: IUsuario}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const { email } = requisicao.body;
        
        //evitar atualizacao indevida de credenciais
        delete requisicao.body.email;
        delete requisicao.body.senha;

        const usuario = await prisma.usuario.update({
            where: { email },
            data:  { ...requisicao.body },
        });

        await resposta.code(200).send(usuario);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

async function listar(
    requisicao: FastifyRequest,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const usuarios = await prisma.usuario.findMany();
        console.log(usuarios);
        await resposta.code(200).send(usuarios);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

async function deletar(
    requisicao: FastifyRequest<{Querystring: { email: string }}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const { email } = requisicao.query;
        const usuario = await prisma.usuario.delete({where: { email }});
        await resposta.code(200).send(usuario);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

export const usuarioController = {
    cadastrar, atualizar, listar, deletar
};