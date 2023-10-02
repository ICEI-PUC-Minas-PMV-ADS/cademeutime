import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function cadastrar(requisicao, resposta) {
    try {
        const usuario = await prisma.usuario.create({
            data: requisicao.body
        });
        await resposta.code(200).send(usuario);
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
        const { email } = requisicao.body;
        //evitar atualizacao indevida de credenciais
        delete requisicao.body.email;
        delete requisicao.body.senha;
        const usuario = await prisma.usuario.update({
            where: { email },
            data: { ...requisicao.body },
        });
        await resposta.code(200).send(usuario);
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
        const usuario = await prisma.usuario.findMany();
        await resposta.code(200).send(usuario);
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
        const { email } = requisicao.body;
        const usuario = await prisma.usuario.delete({ where: { email } });
        await resposta.code(200).send(usuario);
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
