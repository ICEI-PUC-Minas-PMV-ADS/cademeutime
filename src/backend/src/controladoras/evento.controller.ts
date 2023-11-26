import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'
import { IEvento, IEventoLocalizar } from "../modelos/evento/evento.interface.js";
import 'dotenv/config';
import { Client, DistanceMatrixRowElement, Language } from "@googlemaps/google-maps-services-js";

const prisma = new PrismaClient();

async function cadastrar(
    requisicao: FastifyRequest<{Body: IEvento}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        const { nome, esporteId, data, hora, latlng, local } = requisicao.body;
        
        const esporteBanco = await prisma.esporte.findUnique({
            where: {
                id: esporteId,
            },
        });

        if(!esporteBanco) throw new Error('Esporte não encontrado!');

        const evento = await prisma.evento.create(
            {
                data: {
                    nome,
                    esporteId,
                    latlng,
                    local,
                    data: new Date(data + " " + hora)
                }
            }
        );
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
        const eventos = await prisma.evento.findMany();
        await resposta.code(200).send(eventos);
    } catch (e) {
        await resposta.code(500).send(e);
    } finally {
        await prisma.$disconnect()
    }
}


/* async function atualizar(
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
} */

async function encontrarMaisProximo(
    requisicao: FastifyRequest<{Querystring: {latlng: string}}>,
    resposta: FastifyReply,
): Promise<void> {
    try {
        
        const { latlng } = requisicao.query;
        if(!latlng) throw new Error('Para localizar o evento mais próximo informe latitude e longitude do ponto inicial.');

        const key = process.env.GOOGLE_API_KEY;
        if(!key) throw new Error('Erro ao ler a variavel GOOGLE_API_KEY');

        const eventos = await prisma.evento.findMany({
            include: {
                esporte: true
            }
        });      
    
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
        elementos.forEach(async (element : DistanceMatrixRowElement, key: number) => {

            if(!element?.distance?.text) return; // pula se não encontra nada            
            localizacoes.push({
                id: String(key + 1),
                nome: eventos[key].nome,
                latlng: eventos[key].latlng,
                esporte: eventos[key].esporte?.nome,
                local: eventos[key].local,
                data: eventos[key].data.toString(),
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
    cadastrar, listar, encontrarMaisProximo
};