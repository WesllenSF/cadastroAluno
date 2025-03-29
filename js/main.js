"use strict";
var escola;
(function (escola) {
    // Chama o Botão
    const cadastrar = document.getElementById("cadastrar");
    const calc = document.getElementById("calc");
    // Chama o Input
    const campoNome = document.getElementById("campoNome");
    const campoNasc = document.getElementById("campoNasc");
    const campoCPF = document.getElementById("campoCPF");
    const campoEndereco = document.getElementById("campoEndereco");
    const campoTelefone = document.getElementById("campoTelefone");
    const campoMatricula = document.getElementById("campoMatricula");
    const campoCurso = document.getElementById("campoCurso");
    const campoEscola = document.getElementById("campoEscola");
    const campoNota1 = document.getElementById("campoNota1");
    const campoNota2 = document.getElementById("campoNota2");
    const campoNota3 = document.getElementById("campoNota3");
    const campoNota4 = document.getElementById("campoNota4");
    let p;
    cadastrar.addEventListener("click", () => {
        p = new escola.Aluno(parseInt(campoMatricula.value));
        // Converte os campos para "Variaveis"
        p.nome = campoNome.value;
        p.nascimento = parseInt(campoNasc.value);
        p.cpf = campoCPF.value;
        p.endereco = campoEndereco.value;
        p.telefone = campoTelefone.value;
        p.curso = campoCurso.value;
        p.escola = campoEscola.value;
        // Imprime o texto
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("nascimento").textContent = p.calcularIdade(2025).toString();
        document.getElementById("cpf").textContent = p.cpf;
        document.getElementById("endereco").textContent = p.endereco;
        document.getElementById("telefone").textContent = p.telefone;
        document.getElementById("matricula").textContent = p.matricula.toString();
        document.getElementById("curso").textContent = p.curso;
        document.getElementById("escola").textContent = p.escola;
    });
    calc.addEventListener("click", () => {
        // Pega as Notas
        p.nota1 = parseInt(campoNota1.value);
        p.nota2 = parseInt(campoNota2.value);
        p.nota3 = parseInt(campoNota3.value);
        p.nota4 = parseInt(campoNota4.value);
        // Exibe a Nota
        document.getElementById("mostrarNota").textContent = p.calcularMedia().toString();
    });
})(escola || (escola = {}));
