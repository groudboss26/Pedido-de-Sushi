function escapeHtml(valor) {
    const div = document.createElement("div");
    div.textContent = valor;
    return div.innerHTML;
}

export class PedidoView {
    constructor() {
        this.categoryMenu = document.getElementById("categoryMenu");
        this.categoriaTitulo = document.getElementById("categoriaTitulo");
        this.quantidadeProdutos = document.getElementById("quantidadeProdutos");
        this.produtosLista = document.getElementById("produtosLista");
        this.carrinhoLista = document.getElementById("carrinhoLista");
        this.totalItens = document.getElementById("totalItens");
        this.mensagemGlobal = document.getElementById("mensagemGlobal");
        this.pdfPreview = document.getElementById("pdfPreview");
    }

    renderCategorias(categorias, categoriaAtiva) {
        this.categoryMenu.innerHTML = categorias
            .map((categoria) => `
                <button class="nav-link ${categoria.id === categoriaAtiva ? "active" : ""}" type="button" data-category="${categoria.id}">
                    ${escapeHtml(categoria.nome)}
                </button>
            `)
            .join("");
    }

    renderProdutos(categoria) {
        this.categoriaTitulo.textContent = categoria.nome;
        this.quantidadeProdutos.textContent = `${categoria.produtos.length} item(ns)`;
        this.produtosLista.innerHTML = categoria.produtos
            .map((produto) => `
                <article class="product-card">
                    <div>
                        <h3>${escapeHtml(produto.nome)}</h3>
                        <label class="form-label" for="${produto.id}">Quantidade</label>
                        <input class="form-control" type="number" id="${produto.id}" min="1" inputmode="numeric" placeholder="0">
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-warning" type="button" data-action="add" data-product="${escapeHtml(produto.nome)}" data-input="${produto.id}">Adicionar</button>
                        <button class="btn btn-outline-danger" type="button" data-action="remove" data-product="${escapeHtml(produto.nome)}" data-input="${produto.id}">Excluir</button>
                    </div>
                </article>
            `)
            .join("");
    }

    renderCarrinho(itens, total) {
        if (!itens.length) {
            this.carrinhoLista.innerHTML = '<p class="empty-cart">Nenhum item adicionado.</p>';
        } else {
            this.carrinhoLista.innerHTML = `
                <ul class="cart-list">
                    ${itens.map((item) => `
                        <li>
                            <span>${escapeHtml(item.produto)}</span>
                            <strong>${item.quantidade}</strong>
                        </li>
                    `).join("")}
                </ul>
            `;
        }

        this.totalItens.textContent = `${total} unidade(s)`;
    }

    mostrarMensagem(texto, tipo = "warning") {
        this.mensagemGlobal.className = `alert alert-${tipo}`;
        this.mensagemGlobal.textContent = texto;
        this.mensagemGlobal.classList.remove("d-none");

        window.clearTimeout(this.mensagemTimer);
        this.mensagemTimer = window.setTimeout(() => {
            this.mensagemGlobal.classList.add("d-none");
            this.mensagemGlobal.textContent = "";
        }, 3500);
    }

    limparInputsQuantidade() {
        document.querySelectorAll('input[type="number"]').forEach((input) => {
            input.value = "";
        });
    }

    renderPdfPreview({ nome, telefone, itens, total, data }) {
        this.pdfPreview.innerHTML = `
            <section class="pdf-document" id="documentoPdf">
                <header>
                    <h2>Lista de Pedido</h2>
                    <p>${escapeHtml(data)}</p>
                </header>
                <div class="pdf-client">
                    <p><strong>Cliente:</strong> ${escapeHtml(nome)}</p>
                    <p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Qtd.</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itens.map((item) => `
                            <tr>
                                <td>${escapeHtml(item.produto)}</td>
                                <td>${item.quantidade}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
                <footer>
                    <strong>Total: ${total} unidade(s)</strong>
                </footer>
            </section>
        `;
    }
}
