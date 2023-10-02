import { IEsporte } from "../esporte/esporte.interface.js";
import { IUsuario } from "../usuario/usuario.interface.js";

export interface IEvento {
    id?: string;
    modalidade: IEsporte;
    nome: string;
    data: Date;
    local: string;
    autorEvento: IUsuario;
}