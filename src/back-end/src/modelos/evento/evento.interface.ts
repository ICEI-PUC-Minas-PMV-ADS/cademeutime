import { IEsporte } from "../esporte/esporte.interface.js";
import { IUsuario } from "../usuario/usuario.interface.js";

export interface IEvento {
    id?: string;
    modalidade: IEsporte;
    nome: string;
    data: number;
    local: string;
    autorEvento: IUsuario;
    googleMaps: string;
}