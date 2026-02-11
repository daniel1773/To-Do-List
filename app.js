const error = document.getElementById("error");
const ul_tarefas = document.getElementById("tarefas");
const nome_tarefa = document.getElementById("nome_tarefa");
const prioridade_tarefa = document.getElementsByName("prioridade"); //Retorna uma lista

function add_tarefa(){  
    const span_prioridade = document.createElement("span");
    let prioridade_selecionada = "";
    
    for (let radio of prioridade_tarefa){
        if(radio.checked){
            prioridade_selecionada = radio.value;
            break;
        }
    }
    span_prioridade.textContent = prioridade_selecionada;
    span_prioridade.classList.add(prioridade_selecionada);

    if(nome_tarefa.value === "" || prioridade_selecionada === ""){
        return error.innerText = "Por favor, preencha todos os campos!";
    }
    error.innerText = ""; //Limpa a mensagem de erro
    
    const li = document.createElement("li");
    li.textContent = `${nome_tarefa.value} | `;
    li.appendChild(span_prioridade);
    ul_tarefas.appendChild(li);
}