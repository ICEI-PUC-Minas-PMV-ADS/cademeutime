import { login } from "../endpoints/login.endpoint";
import { iniciarFeedback, tratarFomulario } from "./utils.form";

async function efetuarLogin(e: any) {
     
        e.preventDefault();
        const inputs = e.target.getElementsByTagName("input");
        const formulario = tratarFomulario(inputs, ['login', 'senha']);
        if(!formulario) return;

        const resultado = await login.logar(formulario);        
        const feedback = iniciarFeedback();
        if(!resultado) {
            feedback.exibirTexto('Login deu Falha!');
            feedback.estilo.erro();
            return;
        }

        if(resultado.status !== 200) {
            feedback.exibirTexto('Usário ou Senha inválida!');
            feedback.estilo.erro();
            return;
        }
        
        feedback.exibirTexto('Login Realizado com Sucesso!');
        feedback.estilo.sucesso();

        localStorage.setItem('logado', 'true');

        setTimeout(() => {
            window.location.href = '/viewEvents';
        }, 1500);

}

export default efetuarLogin;