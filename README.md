# Lista de Pedido de Sushi

Este projeto é uma aplicação web para montagem e finalização de pedidos de sushi. O sistema foi desenvolvido para facilitar o atendimento, permitindo selecionar produtos por categoria, controlar quantidades, validar dados do cliente e gerar uma prévia do pedido em formato pronto para PDF ou impressão.

## Desenvolvimento

O projeto foi refatorado com foco em organização, manutenção e facilidade para futuras atualizações. A versão atual substitui páginas HTML separadas por categoria por uma única interface dinâmica, onde os produtos são renderizados com JavaScript a partir de um catálogo centralizado.

Também foram adicionadas melhorias de experiência do usuário, como máscara automática de telefone, limpeza dos dados após a finalização do pedido e aviso de privacidade sobre o uso de armazenamento temporário.

## Tecnologias Utilizadas

- **HTML5** para a estrutura da página.
- **CSS3** para personalização visual, responsividade e regras de impressão.
- **JavaScript** para controle de interface, carrinho, validações e renderização dinâmica.
- **Bootstrap 5** para componentes responsivos e modal de prévia do pedido.
- **localStorage** para armazenamento temporário do carrinho e aceite do aviso de privacidade.

## Arquitetura

O desenvolvimento utiliza o padrão **MVC (Model-View-Controller)**, separando responsabilidades para deixar o código mais fácil de manter.

- `src/model.js`: contém o catálogo de categorias/produtos, o carrinho e a persistência temporária no `localStorage`.
- `src/view.js`: cuida da renderização das categorias, produtos, carrinho, mensagens e prévia do pedido.
- `src/controller.js`: controla os eventos da aplicação, validações, máscara de telefone, finalização e regras de privacidade.
- `src/app.js`: ponto de entrada da aplicação.
- `style/style.css`: estilos visuais, responsividade, banner de privacidade e configuração de impressão.
- `index.html`: estrutura principal da aplicação.

Essa arquitetura permite adicionar novas categorias, produtos, integrações com impressora térmica ou banco de dados no futuro com menos impacto no restante do sistema.

## Funcionalidades

- Listagem de produtos por categoria.
- Categorias disponíveis:
  - Sushi
  - Sushi Premium
  - Sashimi
  - Sashimi Premium
  - Hot Premium
  - Uramaki
  - Maki
  - Temaki
- Adição de itens ao pedido com quantidade.
- Remoção de itens do pedido.
- Carrinho com total de unidades.
- Persistência temporária do carrinho no navegador.
- Campo de telefone com máscara automática no formato `(XX) XXXXX-XXXX`.
- Validação obrigatória de nome e telefone antes de finalizar.
- Geração de resumo do pedido em tela.
- Botão para salvar como PDF ou imprimir.
- Limpeza automática de nome, telefone e carrinho após finalizar o pedido.
- Banner de privacidade informando o uso de armazenamento temporário.
- Layout responsivo para diferentes tamanhos de tela.

## Privacidade e Retenção de Dados

Os dados do pedido são tratados como temporários. O carrinho fica salvo apenas durante o pedido atual e é removido quando o pedido é finalizado ou quando um novo pedido é iniciado.

O sistema não utiliza banco de dados. As informações ficam apenas no navegador do usuário por meio do `localStorage`.

## Como Executar

Como o projeto utiliza JavaScript modular, execute a aplicação com um servidor local.

Exemplo com Python:

```bash
python -m http.server 3000
```

Depois, acesse no navegador:

```text
http://localhost:3000
```

Se estiver usando a pasta principal do repositório, entre primeiro na pasta:

```bash
cd "Lista de pedido"
python -m http.server 3000
```

## Como Usar

1. Informe o nome e telefone do cliente.
2. Escolha uma categoria de produto.
3. Digite a quantidade desejada.
4. Clique em `Adicionar` para incluir no pedido.
5. Use `Excluir` para remover quantidades do pedido.
6. Confira o carrinho.
7. Clique em `Finalizar`.
8. Confira a prévia do pedido.
9. Clique em `Salvar PDF / Imprimir`.

## Estrutura do Projeto

```text
Lista de pedido/
|-- index.html
|-- README.md
|-- contrucao.md
|-- src/
|   |-- app.js
|   |-- controller.js
|   |-- model.js
|   `-- view.js
`-- style/
    |-- style.css
    `-- img/
        |-- Logotipo da comida de sushi _ Vetor Premium.png
        `-- sushi.jpg
```
