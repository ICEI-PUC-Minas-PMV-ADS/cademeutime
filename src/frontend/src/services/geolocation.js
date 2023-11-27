import { iniciarFeedback } from "../forms/utils.form";

function iniciarGeolocalizacao(success, error) {
    const feedback = iniciarFeedback();    

    if (!navigator.geolocation) {
        feedback.exibirTexto("Geolocalização não é suportado em seu browser.");
    } else {
        feedback.exibirTexto("Carregando geolocalização...");
        feedback.estilo.info();
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

export {iniciarGeolocalizacao}

  