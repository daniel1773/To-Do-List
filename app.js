// Adicionando novas variáveis
const error = document.getElementById("error");
const ul_tarefas = document.getElementById("tarefas");
const nome_tarefa = document.getElementById("nome_tarefa");
const prioridade_tarefa = document.getElementsByName("prioridade"); //Retorna uma lista



// Limpar "textarea"
function limpar_textarea_tarefa(input_texto){
    input_texto.value = ""; // "value" mexe na parte interna do objeto, "textContent" mexe na parte HTML
}



// Adicionando tarefas
function adicionar_tarefa(){  
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

    limpar_textarea_tarefa(nome_tarefa);
}



// Mudando tema claro/escuro
const btn_tema = document.getElementById("btn-mudar-tema");

btn_tema.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
})



// Ferramenta de excluir tarefas
let modo_excluir = null;

function ativar_excluir_tarefas(){
    ul_tarefas.classList.toggle("sem-marcador");
    adicionar_botoes_excluir();

    modo_excluir = true;
}

function desativar_excluir_tarefas(){
    const todos_btn_delete = document.querySelectorAll(".btn-delete");

    todos_btn_delete.forEach((btn)=>{
        btn.remove();
    });

    modo_excluir = false;
}

function adicionar_botoes_excluir(){
    const li_tarefas = document.querySelectorAll("#tarefas li"); //seleciona todos os "li" com ID "tarefas" em forma de NodeList

    li_tarefas.forEach((li)=>{
        if(li.querySelector(".btn-delete")){
            return;
        } //resolve o problema de criar botoes duplicados

        const btn_delete = document.createElement("button");
        btn_delete.textContent = "❌";
        btn_delete.classList.add("btn-delete");

        li.appendChild(btn_delete);
        
        //exclui o "li" que o botao está atualmente
        btn_delete.onclick = ()=>{
            li.remove();
        }
    })
}

/// Alternar "onclick" entre "ativar" e "desativar"
function alternar_modo_excluir(){
    if(modo_excluir == false || modo_excluir == null){
        ativar_excluir_tarefas();
    }
    else if(modo_excluir == true){
        desativar_excluir_tarefas();
    }
}