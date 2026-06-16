import { categorias, PedidoModel } from "./model.js";
import { PedidoView } from "./view.js";

const PRIVACY_CONSENT_KEY = "pedidoSushi.privacidadeAceita";

function formatarTelefone(valor) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    if (numeros.length <= 2) {
        return numeros;
    }

    if (numeros.length <= 7) {
        return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }

    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
}

function dataAtualFormatada() {
    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
    }).format(new Date());
}

export class PedidoController {
    constructor() {
        this.model = new PedidoModel();
        this.view = new PedidoView();
        this.categoriaAtiva = categorias[0].id;
        this.modal = new bootstrap.Modal(document.getElementById("pdfModal"));
    }

    iniciar() {
        this.renderizar();
        this.registrarEventos();
    }

    categoriaAtual() {
        return categorias.find((categoria) => categoria.id === this.categoriaAtiva) || categorias[0];
    }

    renderizar() {
        this.view.renderCategorias(categorias, this.categoriaAtiva);
        this.view.renderProdutos(this.categoriaAtual());
        this.atualizarCarrinho();
    }

    atualizarCarrinho() {
        this.view.renderCarrinho(this.model.itens(), this.model.totalItens());
    }

    registrarEventos() {
        document.getElementById("categoryMenu").addEventListener("click", (event) => {
            const botao = event.target.closest("[data-category]");

            if (!botao) {
                return;
            }

            this.categoriaAtiva = botao.dataset.category;
            this.renderizar();
        });

        document.getElementById("produtosLista").addEventListener("click", (event) => {
            const botao = event.target.closest("[data-action]");

            if (!botao) {
                return;
            }

            this.alterarItem(botao.dataset.action, botao.dataset.product, botao.dataset.input);
        });

        document.getElementById("clienteForm").addEventListener("submit", (event) => {
            event.preventDefault();
            this.finalizarPedido();
        });

        this.registrarPrivacidade();

        document.getElementById("telefone").addEventListener("input", (event) => {
            event.target.value = formatarTelefone(event.target.value);
        });

        document.getElementById("limparPedido").addEventListener("click", () => {
            this.limparPedido();
        });

        document.getElementById("novoPedido").addEventListener("click", () => {
            this.limparPedido();
            this.modal.hide();
        });

        document.getElementById("imprimirPdf").addEventListener("click", () => {
            window.print();
        });
    }

    registrarPrivacidade() {
        const banner = document.getElementById("privacyBanner");
        const botaoAceitar = document.getElementById("aceitarPrivacidade");

        if (!banner || !botaoAceitar) {
            return;
        }

        if (localStorage.getItem(PRIVACY_CONSENT_KEY) === "true") {
            banner.classList.add("is-hidden");
        }

        botaoAceitar.addEventListener("click", () => {
            localStorage.setItem(PRIVACY_CONSENT_KEY, "true");
            banner.classList.add("is-hidden");
        });
    }

    alterarItem(acao, produto, inputId) {
        const input = document.getElementById(inputId);
        const quantidade = Number.parseInt(input.value, 10);

        if (Number.isNaN(quantidade) || quantidade <= 0) {
            this.view.mostrarMensagem("Informe uma quantidade maior que zero.");
            return;
        }

        if (acao === "add") {
            this.model.adicionar(produto, quantidade);
            this.view.mostrarMensagem(`${quantidade} unidade(s) adicionada(s) ao pedido.`, "success");
        } else {
            this.model.remover(produto, quantidade);
            this.view.mostrarMensagem("Item atualizado no pedido.", "info");
        }

        input.value = "";
        this.atualizarCarrinho();
    }

    limparPedido() {
        this.model.limpar();
        this.view.limparInputsQuantidade();
        this.atualizarCarrinho();
        this.view.mostrarMensagem("Pedido limpo. Voce pode iniciar uma nova lista.", "secondary");
    }

    finalizarPedido() {
        const nomeInput = document.getElementById("name");
        const telefoneInput = document.getElementById("telefone");
        const nome = nomeInput.value.trim();
        const telefoneLimpo = telefoneInput.value.replace(/\D/g, "");

        if (!this.model.totalItens()) {
            this.view.mostrarMensagem("Adicione algum item para finalizar o pedido.");
            return;
        }

        if (!nome || !telefoneLimpo) {
            this.view.mostrarMensagem("Nome e telefone sao obrigatorios para finalizar.");
            return;
        }

        if (telefoneLimpo.length !== 11) {
            this.view.mostrarMensagem("Preencha o telefone com 11 numeros. Exemplo: 31922222222.");
            return;
        }

        this.view.renderPdfPreview({
            nome,
            telefone: formatarTelefone(telefoneInput.value),
            itens: this.model.itens(),
            total: this.model.totalItens(),
            data: dataAtualFormatada(),
        });

        this.model.limpar();
        this.atualizarCarrinho();
        nomeInput.value = "";
        telefoneInput.value = "";
        this.modal.show();
    }
}
