# Lista de Tarefas (To-Do List) - JavaScript Vanilla

Uma aplicação web de gerenciamento de tarefas desenvolvida com HTML, CSS e **JavaScript Puro (Vanilla JS)**. 

Este projeto vai além do básico visual, implementando um sistema de **CRUD** (Create, Read, Update, Delete) com persistência de dados local, garantindo que o usuário não perca suas tarefas ao recarregar a página.

## Funcionalidades

- **Adicionar Tarefas:** Input com validação (não permite tarefas vazias) e limpeza automática após o envio.
- **Excluir Tarefas:** Botão de remoção individual para cada item.
- **Persistência de Dados:** Uso da API `localStorage` para salvar os dados no navegador.
- **Recuperação Automática:** Ao abrir a página, o sistema lê o banco de dados local e recria a lista exatamente como foi deixada.

## Lições Aprendidas e Desafios Técnicos

Este projeto foi um grande marco no meu estudo de manipulação do DOM e lógica de programação. Abaixo, detalho os principais desafios superados:

### 1. Manipulação do DOM e Elementos Dinâmicos
Aprendi a criar elementos HTML "do zero" via JavaScript (`createElement`), adicionar classes e injetá-los na árvore do DOM (`appendChild`). Entendi na prática a diferença entre escrever código HTML estático e gerar interface dinamicamente via JS.

### 2. O Desafio do LocalStorage e JSON
Descobri que o `localStorage` do navegador aceita apenas **Strings**. 
- **Problema:** Tentar salvar meu Array de tarefas diretamente resultava em `[object Object]`.
- **Solução:** Implementei `JSON.stringify()` para converter o Array em String antes de salvar, e `JSON.parse()` para converter de volta em Array ao ler os dados.

### 3. Tratamento de Strings (Sanitização)
Como o botão "Apagar" é filho do elemento `<li>`, ao capturar o `innerText` da tarefa, a palavra "Apagar" vinha junto com o texto (ex: *"Estudar Apagar"*).
Utilizei métodos de manipulação de String para limpar os dados antes de salvar:
```javascript
// Exemplo da lógica utilizada
let textoLimpo = tarefa.innerText.replace('Apagar', '').trim();
```

### 4. Event Delegation (Delegação de Eventos)
Reforcei o uso de Event Delegation, técnica que eu já havia aplicado anteriormente no meu projeto do Timer. Em vez de adicionar um "ouvinte" para cada botão criado (o que seria custoso para a performance), adicionei um único escutador no `document`. Utilizei a propriedade `e.target` para identificar se o clique veio de um botão com a classe `.apagar` e, a partir daí, remover o elemento pai (`parentElement`).


##  Tecnologias Utilizadas
- HTML5 Semântico
- CSS3
- JavaScript (ES6+)

## Como rodar o projeto
1. Clone este repositório.
2. Abra o arquivo index.html no seu navegador.
3. Comece a criar suas tarefas!

---
Desenvolvido para fins de estudo e consolidação de lógica de programação. Obrigado pela atenção 😄