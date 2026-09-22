/* 
==================================================================================
LIVRARIA PÁGINA VIVA - SCRIPT.JS (ETAPA 5 - MANIPULAÇÃO DE DOM)
==================================================================================
O JavaScript atua no navegador do usuário (client-side) permitindo dinamismo e 
interatividade em tempo real. Ele escuta eventos disparados pelo usuário (como o clique 
no botão "Adicionar ao carrinho"), manipula os elementos da árvore DOM (criando e 
inserindo <li> na lista do carrinho e incrementando o contador) e atualiza a interface 
instantaneamente sem a necessidade de recarregar a página. Essa camada de comportamento 
contrasta diretamente com o HTML, que provê a estrutura semântica estática, e o CSS, 
que é responsável pela apresentação e estilo visual.
==================================================================================
*/

// Seleção de elementos do DOM estritamente utilizando document.getElementById
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaCarrinho = document.getElementById("carrinho");
const contadorBadge = document.getElementById("contador");

// Variável para controle do número total de itens adicionados
let totalItens = 0;

// Título do livro selecionado para exibição nos itens do carrinho
const tituloDoLivro = "Babel, ou A Necessidade de Violência";

/**
 * Função responsável por adicionar o item ao carrinho e atualizar a interface
 */
function adicionarAoCarrinho() {
    // 1. Cria um novo elemento <li> semântico
    const novoItem = document.createElement("li");

    // 2. Incrementa a contagem de itens
    totalItens++;

    // 3. Define o texto do novo item exibido via .textContent (evitando XSS)
    novoItem.textContent = "1x " + tituloDoLivro;

    // 4. Insere o novo <li> na lista do carrinho via appendChild
    listaCarrinho.appendChild(novoItem);

    // 5. Atualiza o contador exibido no cabeçalho via .textContent
    if (contadorBadge) {
        contadorBadge.textContent = totalItens;
    }
}

// Registra o evento de clique no botão passando Apenas a referência da função
// (Sem invocar com parênteses e sem usar propriedade onClick inline)
botaoAdicionar.addEventListener("click", adicionarAoCarrinho);
