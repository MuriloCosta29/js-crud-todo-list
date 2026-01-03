const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', function(e) {
    // 13 é o código da tecla Enter.
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});



function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li); // Passamos o 'li' como parâmetro para o botão saber onde ser criado
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' '; // Adiciona espaço para separar o texto do botão
    const botao = document.createElement('button');
    botao.innerText = 'Apagar';
    botao.setAttribute('class', 'apagar');
    li.appendChild(botao);
}

// Event Delegation: Monitora cliques no documento para lidar com elementos criados dinamicamente
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // Remove o elemento pai (li) do botão clicado
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    // Utiliza 'let' pois a referência da variável muda a cada iteração
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        // Remove a palavra 'Apagar' do texto e limpa espaços extras
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    // Converte o array para JSON string para permitir armazenamento no LocalStorage
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    // Se não houver dados salvos, encerra a execução para evitar erros
    if (!listaDeTarefas) return;

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();