export interface IEvento {
    id: string,
    nome: string,
    esporteId: string,
    data: string,
    hora: string,
    latlng: string,
}

export interface IEventoLocalizar {
    id?: string;
    nome: string;
    latlng: string;    
    distancia: {
        texto : string;
        valor: number;
    };
}
