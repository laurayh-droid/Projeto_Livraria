# 📚 Livraria Página Viva - Catálogo Online & Cadastro de Livros

Este projeto é uma aplicação web completa desenvolvida para a livraria **"Página Viva"**, reunindo os conceitos fundamentais de **HTML5 Semântico**, **CSS3 (Flexbox, CSS Grid e Responsividade)** e **JavaScript Vanilla (Manipulação de DOM e Eventos)**.

A página apresenta a ficha detalhada e o catálogo do livro de fantasia e ficção histórica **"Babel, ou A Necessidade de Violência"**, escrito pela autora **R. F. Kuang**.

---

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível e indexável.
- **CSS3**:
  - Seletores de Elemento, Classe, ID e Pseudo-classes (`:hover`).
  - Layout Unidimensional com **Flexbox** (`display: flex`).
  - Layout Bidimensional com **CSS Grid** (`display: grid`).
  - Responsividade com **Media Queries** (`@media`) e Unidades Relativas (`rem`, `%`, `em`).
- **JavaScript Vanilla (ES6+)**: Escuta de eventos (`addEventListener`), criação de elementos no DOM (`createElement`, `appendChild`) e atualização dinâmica via `.textContent`.
- **Git & GitHub**: Controle de versão e hospedagem do repositório.

---

## 📁 Estrutura de Arquivos do Projeto

```text
projeto_livraria/
├── index.html          # Página principal da livraria com estrutura semântica HTML5
├── estilo.css          # Arquivo principal de estilização CSS3 (Flexbox, Grid e Media Queries)
├── style.css           # Arquivo complementar de estilos sincronizado
├── README.md           # Documentação completa do projeto
├── img/                # Imagens do projeto
│   ├── capa-livro.jpg  # Capa oficial do livro Babel (R. F. Kuang)
│   └── coruja-logo.jpg # Logotipo da Livraria Página Viva
└── js/
    └── script.js       # Script JavaScript para interatividade do carrinho e contador
```

---

## 📑 Resumo das Etapas Concluídas

### 🔹 Etapa 1 – Estrutura Semântica em HTML
- **Cabeçalho (`<header>`)**: Logotipo com ícone de coruja e título "Livraria Página Viva", além do menu `<nav>` com os links *Início*, *Catálogo* e *Contato*.
- **Conteúdo Principal (`<main>`)**:
  - `<article>` envelopando os dados autônomos do livro: título, autor, capa (`<img>` com `alt` descritivo), preço, sinopse em 3 parágrafos, botão de ação (`#btn-adicionar`) e lista de destaques (`<ul>`).
  - `<table>` com `<thead>`, `<tbody>` e `<caption>` comparando formatos (Físico, E-book e Audiobook) por preço e prazo.
  - Seção `<section id="contato">` servindo de destino para o link interno do menu (`href="#contato"`).
- **Rodapé (`<footer>`)**: Nome da livraria e e-mail institucional de contato.
- **Justificativa Escrita**: Comentário HTML no final do `index.html` explicando o uso de cada tag semântica versus `<div>` genéricas.

### 🔹 Etapa 2 – Seletores, Especificidade e Cascata em CSS
- Estilização externa vinculada via `<link rel="stylesheet" href="estilo.css">`.
- Uso de **Seletor de Elemento** (`body`, `p`, `h2`), **Seletor de Classe** (`.nav-link`, `.card-livro`), **Seletor de ID** (`#btn-adicionar`, `#contato`) e **Pseudo-classe** (`.nav-link:hover`, `#btn-adicionar:hover`).
- **Experimento de Especificidade**: Aplicação simultânea de regra por classe (`.btn-carrinho`) e ID (`#btn-adicionar`) definindo cores de fundo distintas, com comentário explicativo sobre o cálculo de especificidade `(0, 1, 0, 0)` versus `(0, 0, 1, 0)` e a atuação do `!important`.

### 🔹 Etapa 3 – Layout com Flexbox e Grid
- **Flexbox no Menu (`display: flex`)**: Alinhamento em linha única horizontal e justificativa em comentário CSS sobre layout unidimensional.
- **Flexbox no Cartão do Livro (`display: flex`)**: Organização da capa e coluna de informações lado a lado, com suporte a quebra fluida (`flex-wrap`).
- **CSS Grid na Grade de Formatos (`display: grid`)**: Distribuição dos cartões de formato em uma grade bidimensional de duas dimensões (`grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))`).
- **Botão Destacado**: Estilização chamativa com padding generoso, sombra e efeito no `:hover`.

### 🔹 Etapa 4 – Responsividade
- Tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` incluída no `<head>`.
- Media queries (`@media (max-width: 600px)`) para adaptação completa a dispositivos móveis:
  - Cabeçalho ultra compacto com logo e botões do menu mantidos na horizontal lado a lado.
  - Empilhamento vertical legível do cartão do livro (`.livro-corpo`).
  - Tabela comparativa com suporte a rolagem horizontal (`overflow-x: auto`).
  - Uso prioritário de unidades relativas (`rem`, `%`, `em`).

### 🔹 Etapa 5 – JavaScript: Seleção e Manipulação de DOM
- Script em [`js/script.js`](file:///c:/Users/evand/Documents/projeto_livraria/js/script.js) vinculado antes do fechamento do `</body>`.
- Seleção estrita via `document.getElementById("btn-adicionar")`, `document.getElementById("carrinho")` e `document.getElementById("contador")`.
- Registro de evento com `botaoAdicionar.addEventListener("click", adicionarAoCarrinho)` (referência direta da função).
- Função `adicionarAoCarrinho` criando elementos `<li>` via `document.createElement`, definindo texto seguro com `.textContent` e inserindo via `appendChild`.
- Contador de itens no cabeçalho (`<span id="contador">`) incrementado dinamicamente a cada clique sem recarregar a página.
- Comentário explicativo no topo do arquivo sobre o papel do JavaScript *client-side*.

---

## 🔧 Como Executar o Projeto Localmente

1. Clone o repositório em sua máquina local:
   ```bash
   git clone https://github.com/laurayh-droid/Projeto_Livraria.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd Projeto_Livraria
   ```
3. Abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Mozilla Firefox, Edge ou Safari) ou utilize a extensão **Live Server** do VS Code.

---

## ✒️ Licença e Créditos

Projeto desenvolvido como atividade prática integradora de HTML, CSS e JavaScript para a livraria **Página Viva**. Obra literária representada: *Babel* de R. F. Kuang.
