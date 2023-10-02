import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function cadastrar(requisicao, resposta) {
    try {
        const evento = await prisma.evento.create({ data: requisicao.body });
        await resposta.code(200).send(evento);
    }
    catch (e) {
        await resposta.code(500).send(e);
    }
    finally {
        await prisma.$disconnect();
    }
}
async function atualizar(requisicao, resposta) {
    try {
        const { id } = requisicao.body;
        //remove id para não atualizar o id
        delete requisicao.body.id;
        const evento = await prisma.evento.update({
            where: { id },
            data: requisicao.body
        });
        await resposta.code(200).send(evento);
    }
    catch (e) {
        await resposta.code(500).send(e);
    }
    finally {
        await prisma.$disconnect();
    }
}
async function listar(requisicao, resposta) {
    try {
        const evento = await prisma.evento.findMany();
        await resposta.code(200).send(evento);
    }
    catch (e) {
        await resposta.code(500).send(e);
    }
    finally {
        await prisma.$disconnect();
    }
}
async function deletar(requisicao, resposta) {
    try {
        const { id } = requisicao.body;
        const evento = await prisma.evento.delete({ where: { id } });
        await resposta.code(200).send(evento);
    }
    catch (e) {
        await resposta.code(500).send(e);
    }
    finally {
        await prisma.$disconnect();
    }
}
export const usuarioController = {
    cadastrar, atualizar, listar, deletar
};
