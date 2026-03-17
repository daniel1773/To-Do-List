// Adicionando novas variáveis
const error = document.getElementById("error");
const ul_tarefas = document.getElementById("tarefas");
const nome_tarefa = document.getElementById("nome_tarefa");
const prioridade_tarefa = document.getElementsByName("prioridade"); //Retorna uma lista

// Adicionando tarefas
function add_tarefa(){  
    const span_prioridade = document.createElement("span");
    let prioridade_selecionada = "";
    
    for (let radio of prioridade_tarefa){
        if(radio.checked){
            prioridade_selecionada = radio.value;
            break;
        }
    }
    span_prioridade.textContent = `  | ${prioridade_selecionada}`;
    span_prioridade.classList.add(prioridade_selecionada);

    if(nome_tarefa.value === "" || prioridade_selecionada === ""){
        return error.innerText = "Por favor, preencha todos os campos!";
    }
    error.innerText = ""; //Limpa a mensagem de erro

    const span_nome_tarefa = document.createElement("span");
    span_nome_tarefa.textContent = nome_tarefa.value.slice(0, 1).toUpperCase() + nome_tarefa.value.slice(1);
    
    const li = document.createElement("li");
    li.appendChild(span_nome_tarefa);
    li.appendChild(span_prioridade);
    ul_tarefas.appendChild(li);
}


// Mudando tema claro/escuro
const btn_tema = document.getElementById("btn-mudar-tema");

btn_tema.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
})


// Excluindo tarefas
function remove_tarefa(){
    ul_tarefas.classList.toggle("sem-marcador")

    const li_tarefas = document.querySelectorAll("#tarefas li"); //seleciona todos os "li" da lista "tarefas"

    li_tarefas.forEach((li)=>{
        const btn_delete = document.createElement("button");
        btn_delete.textContent = "❌";
        btn_delete.classList.add("btn-delete");

        btn_delete.onclick = ()=>{
            li.remove();
        }

        li.appendChild(btn_delete);
    })
}