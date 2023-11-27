import { evento } from "../endpoints/evento.endpoint";
import { iniciarFeedback, resetarFormulario, tratarFomulario } from "./utils.form";

async function cadastrarEvento(e, limparSeletores ) {
    e.preventDefault();
    const inputs = e.target.getElementsByTagName("input");
    const formulario = tratarFomulario(inputs, ['esporteId', 'local', 'latlng', 'data', 'hora', 'nome']);
    if(!formulario) return;

    const resultado = await evento.cadastrar(formulario);
    const feedback = iniciarFeedback();
    feedback.exibirTexto('Evento cadastrado com sucesso!');
    feedback.estilo.sucesso();
    
    resetarFormulario(inputs, limparSeletores);

}

export { cadastrarEvento };