namespace escola{

    // Chama o Botão
    const cadastrar = document.getElementById("cadastrar") as HTMLButtonElement;
    const calc = document.getElementById("calc") as HTMLButtonElement;


    // Chama o Input
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoNasc = document.getElementById("campoNasc") as HTMLInputElement;
    const campoCPF = document.getElementById("campoCPF") as HTMLInputElement;
    const campoEndereco = document.getElementById("campoEndereco") as HTMLInputElement;
    const campoTelefone = document.getElementById("campoTelefone") as HTMLInputElement;
    const campoMatricula = document.getElementById("campoMatricula") as HTMLInputElement;
    const campoCurso = document.getElementById("campoCurso") as HTMLInputElement;
    const campoEscola = document.getElementById("campoEscola") as HTMLInputElement;
    const campoNota1 = document.getElementById("campoNota1") as HTMLInputElement;
    const campoNota2 = document.getElementById("campoNota2") as HTMLInputElement;
    const campoNota3 = document.getElementById("campoNota3") as HTMLInputElement;
    const campoNota4 = document.getElementById("campoNota4") as HTMLInputElement;

    
    let p: Aluno;

    cadastrar.addEventListener("click", ()=>{
        
        p = new Aluno(parseInt(campoMatricula.value));
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
        
        p = new Aluno(parseInt(campoMatricula.value));

        // Converte os campos para "Variaveis"
        p.nota1 = parseInt(campoNota1.value);
        p.nota2 = parseInt(campoNota2.value);
        p.nota3 = parseInt(campoNota3.value);
        p.nota4 = parseInt(campoNota4.value);
    
        // Exibe a Nota
        document.getElementById("mostrarNota").textContent = p.calcularMedia().toString();
    });
}