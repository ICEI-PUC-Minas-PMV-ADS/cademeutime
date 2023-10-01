import { FastifyReply, FastifyRequest } from "fastify";

async function cadastrar(
    request: FastifyRequest,
    reply: FastifyReply,
): Promise<void> {
    try {
        await reply.code(200).send('cadastro-cliente');
    } catch (e) {
        await reply.code(500).send(e);
    }
}

export const usuarioController = {
    cadastrar
};