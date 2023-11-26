export interface IEvento {
    id: string,
    nome: string,
    esporteId: string,
    data: string,
    hora: string,
    local: string,
    latlng: string,
}

export interface IEventoLocalizar {
    id?: string;
    nome: string;
    latlng: string;
    esporte?: string;
    local: string;
    data: string;  
    distancia: {
        texto : string;
        valor: number;
    };
}
