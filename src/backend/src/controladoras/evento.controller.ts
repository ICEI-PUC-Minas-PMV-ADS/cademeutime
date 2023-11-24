import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'
import { IEvento, IEventoLocalizar } from "../modelos/evento/evento.interface.js";
import 'dotenv/config';
import { Client, DistanceMatrixRow, DistanceMatrixRowElement, Language } from "@googlemaps/google-maps-services-js";

const prisma = new PrismaClient();

async function cadastrar(
    requisicao: FastifyRequest<{Body: IEvento}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const evento = await prisma.evento.create({data: requisicao.body as any });
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

        const evento = await prisma.evento.update({
            where: { id },
            data: requisicao.body as any
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
        const evento = await prisma.evento.findMany();
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
        const evento = await prisma.evento.delete({where: { id }});
        await resposta.code(200).send(evento);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

async function encontrarMaisProximo(
    requisicao: FastifyRequest<{Querystring: {latlng: string}}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        
        const { latlng } = requisicao.query;
        if(!latlng) throw new Error('Para localizar o evento mais próximo informe latitude e longitude do ponto inicial.');

        const key = process.env.GOOGLE_API_KEY;
        if(!key) throw new Error('Erro ao ler a variavel GOOGLE_API_KEY');

        const eventos = [
            {
                nome: "Evento A",
                latlng: '-29.044360726595404, -49.60599644500426'
            },
            {
                nome: "Evento B",
                latlng: '-29.07115757364247, -49.636784330808844'
            },
            {
                nome: "Evento C",
                latlng: '-29.103430446054087, -49.637721161921476'
            },
            {
                nome: "Evento D",
                latlng: '-29.09067861589867, -49.61950812027246'
            },
            {
                nome: "Evento E",
                latlng: '-29.097651410199518, -49.620121939707424'
            },
            {
                nome: "Evento F",
                latlng: '-29.09093244709195, -49.61944871778759'
            }
        ];
        
        const cliente =  new Client();
        const resultado = await cliente.distancematrix({
            params: {
                key,
                origins: [latlng],                
                destinations: eventos.map(e => e.latlng),                
                language: Language.pt_BR
            },
        });

        const elementos = resultado?.data?.rows[0]?.elements;
        if(!elementos) throw new Error('Não foi possível determinar qual o evento mais próximo');

        const localizacoes : IEventoLocalizar[] = [];
        elementos.forEach((element : DistanceMatrixRowElement, key: number) => {
            localizacoes.push({
                id: String(key + 1),
                nome: eventos[key].nome,
                latlng: eventos[key].latlng,
                distancia: {
                    texto: element.distance.text,
                    valor: element.distance.value,
                },
            });
        });        

        const localizacoesOrdenadas = localizacoes.sort((a, b) => a.distancia.valor - b.distancia.valor );

        await resposta.code(200).send(localizacoesOrdenadas);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}

export const eventoController = {
    cadastrar, atualizar, listar, deletar, encontrarMaisProximo
};