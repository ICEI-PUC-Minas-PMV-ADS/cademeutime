import { iniciarFeedback } from "@/app/forms/utils.form";

function iniciarGeolocalizacao(success: any, error: any) {
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

  