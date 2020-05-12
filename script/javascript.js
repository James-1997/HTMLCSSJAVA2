/*
    Programação Web
    Prof. Orlewilson Maia
    Aluno (a): 
    Data: 30/04/2020
    Descrição: Validar campos com JavaScript.
*/
function validarCampos() {

    // obter valor dos campos
    inputNome = document.getElementById("campoNome");
    inputCpf = document.getElementById("campoCpf");
    inputContato = document.getElementById("campoContato");
    inputEndereco = document.getElementById("campoEndereco");
    inputRenda = document.getElementById("campoRenda");

  
    // verificar campos Nome
    if(!inputNome.value) {
        inputNome.setCustomValidity("Escreva seu nome!");
        window.alert("Nome deve ser preenchido!");
    } else if(!inputCpf.value) {
        inputCpf.setCustomValidity("Escreva seu CPF!");
        window.alert("CPF deve ser preenchido!");
    } else if(!inputContato.value) {
        inputContato.setCustomValidity("Escreva seu contato!");
        window.alert("Contato deve ser preenchido!");
    } else if(!inputEndereco.value) {
        inputEndereco.setCustomValidity("Escreva seu endereço!");
        window.alert("Endereço deve ser preenchido!");
    } else if(!inputRenda.value) {
        inputRenda.setCustomValidity("Escreva sua renda!");
        window.alert("Renda deve ser preenchido!");
    } else {
        if (parseInt(inputCpf.value) && inputCpf.value.length == 11) {
            if (parseInt(inputRenda.value)) {
                window.alert("campos validados");
            } else {
                window.alert("Renda inválida!");
                inputRenda.setCustomValidity("Escreva uma renda válida!");
            }
        } else {
            window.alert("cpf não válido");
            inputCpf.setCustomValidity("Escreva um CPF válido!");
        }
    }  
}
