import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function listar(
    requisicao: FastifyRequest,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const esportes = await prisma.esporte.findMany();        
        await resposta.code(200).send(esportes);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

export const esporteController = { listar };