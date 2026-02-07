const error = document.getElementById("error");
const ul_tarefas = document.getElementById("tarefas");
const nome_tarefa = document.getElementById("nome_tarefa");
const prioridade_tarefa = document.getElementsByName("prioridade"); //Retorna uma lista


function add_tarefa(){
    let prioridadeSelecionada = "";
    
    for (let radio of prioridade_tarefa){
        if(radio.checked){
            prioridadeSelecionada = radio.value;
            break;
        }
    }

    if(nome_tarefa.value === "" || prioridadeSelecionada === ""){
        return error.innerText = "Por favor, preencha todos os campos!";
    }

    error.innerText = ""; //Limpa a mensagem de erro
    ul_tarefas.innerHTML += `<li>${nome_tarefa.value} | ${prioridadeSelecionada}</li>`;
}