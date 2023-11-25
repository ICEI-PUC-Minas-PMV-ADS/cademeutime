function selectControl() {
    return {
        control: (baseStyles, state) => {
          return {
            ...baseStyles,
            borderColor: state.getValue().length === 0 && 'red',
          }
        },
    };
}

function iniciarFeedback() {
    const feedback = document.getElementById("feedback");
    feedback.onclick = (e) => e.target.setAttribute('mostrar', false);
    feedback.setAttribute('mostrar', false);

    return {
        input: feedback,
        esconder: () => feedback.setAttribute('mostrar', false),
        exibir: () => feedback.setAttribute('mostrar', true),
        estilo : {
            erro: () =>  feedback.setAttribute('tipo', 'erro'),
            sucesso: () => feedback.setAttribute('tipo', 'sucesso'),
        },
        exibirTexto: (texto) => {
            feedback.innerHTML = texto;
            feedback.setAttribute('mostrar', true);
        }
    };
};

function resetarFormulario(inputs, limparSeletores) {
    if(limparSeletores) limparSeletores();
    for(const input of inputs){
        input.value = '';
    }
}


function tratarFomulario(inputs, obrigatorios, limparSeletores) {
    const feedback = iniciarFeedback();
    
    const form = {};
    for(const input of inputs){
        
        input.setAttribute('invalido', false);
        input.addEventListener("input", e => input.setAttribute('invalido', e.target.value === ''));

        if(!input.name) continue;
        form[input.name] = input.value;
    }

    //busca campos vazios;
    const invalidos = obrigatorios.filter(key => form[key] === '');    
    if(invalidos.length) {
        invalidos.forEach(invalido =>  {            
            const input = document.querySelector(`input[name='${invalido}']`);
            if(!input) return;
            
            input.setAttribute('invalido', true);
        });
        
        feedback.exibirTexto('Revise o formulário nos campos em vermelho, eles são obrigatórios ou estão inválidos');
        feedback.exibir();
        feedback.estilo.erro();

        return;
    }

    return form;
}

export { tratarFomulario, selectControl, iniciarFeedback, resetarFormulario };