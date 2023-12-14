function selectControl() {
    return {
        control: (baseStyles: any, state: any) => {
          return {
            ...baseStyles,
            borderColor: state.getValue().length === 0 && 'red',
          }
        },
    };
}

function iniciarFeedback() {
    const feedback: any = document.getElementById("feedback");
    feedback.onclick = (e: any) => e.target.setAttribute('mostrar', false);
    feedback.setAttribute('mostrar', false);

    return {
        input: feedback,
        esconder: () => feedback.setAttribute('mostrar', false),
        exibir: () => feedback.setAttribute('mostrar', true),
        estilo : {
            erro: () =>  feedback.setAttribute('tipo', 'erro'),
            sucesso: () => feedback.setAttribute('tipo', 'sucesso'),
            info: () => feedback.setAttribute('tipo', 'info'),
        },
        exibirTexto: (texto: any) => {
            feedback.innerHTML = texto;
            feedback.setAttribute('mostrar', true);
        }
    };
};

function resetarFormulario(inputs: any, limparSeletores: any) {
    if(limparSeletores) limparSeletores();
    for(const input of inputs){
        input.value = '';
    }
}


function tratarFomulario(inputs: any, obrigatorios: any, limparSeletores?: any) {
    const feedback = iniciarFeedback();
    
    const form: any = {};
    for(const input of inputs){
        
        input.setAttribute('invalido', false);
        input.addEventListener("input", (e: any) => input.setAttribute('invalido', e.target.value === ''));

        if(!input.name) continue;
        form[input.name] = input.value;
    }

    //busca campos vazios;
    const invalidos = obrigatorios.filter((key: any) => form[key] === '');    
    if(invalidos.length) {
        invalidos.forEach((invalido: any) =>  {            
            const input = document.querySelector(`input[name='${invalido}']`);
            if(!input) return;
            
            input.setAttribute('invalido', 'true');
        });
        
        feedback.exibirTexto('Revise o formulário nos campos em vermelho, eles são obrigatórios ou estão inválidos');
        feedback.exibir();
        feedback.estilo.erro();

        return;
    }

    if(limparSeletores) limparSeletores();

    return form;
}

export { tratarFomulario, selectControl, iniciarFeedback, resetarFormulario };