import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'
import { IEvento } from "../modelos/evento/evento.interface.js";

const prisma = new PrismaClient();

async function cadastrar(
    requisicao: FastifyRequest<{Body: IEvento}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const evento = await prisma.Evento.create({
            data: requisicao.body,
        });
        await resposta.code(200).send(evento);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

async function atualizar(
    requisicao: FastifyRequest<{Body: IEvento}>,
    resposta: FastifyReply,
): Promise<void> {
    try {

        const { id } = requisicao.body;
        
        //remove id para não atualizar o id
        delete requisicao.body.id;

        const evento = await prisma.Evento.update({
            where: { id },
            data:  { ...requisicao.body },
        });

        await resposta.code(200).send(evento);
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
        const evento = await prisma.Evento.findMany();
        await resposta.code(200).send(evento);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

async function deletar(
    requisicao: FastifyRequest<{Body: IEvento}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const { id } = requisicao.body;
        const evento = await prisma.Evento.delete({where: { id }});
        await resposta.code(200).send(evento);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

export const usuarioController = {
    cadastrar, atualizar, listar, deletar
};