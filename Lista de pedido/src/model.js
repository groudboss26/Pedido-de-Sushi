const STORAGE_KEY = "pedidoSushi.carrinho";

export const categorias = [
    {
        id: "sushi",
        nome: "Sushi",
        produtos: [
            { id: "sushiAtum", nome: "Sushi Atum" },
            { id: "sushiEbi", nome: "Sushi Ebi" },
            { id: "sushiKani", nome: "Sushi Kani" },
            { id: "sushiPeixeBranco", nome: "Sushi Peixe Branco" },
            { id: "sushiSalmao", nome: "Sushi Salmao" },
            { id: "sushiSkin", nome: "Sushi Skin" },
            { id: "sushiTilapia", nome: "Sushi Tilapia" },
            { id: "djowSalmao", nome: "Djow Salmao" },
            { id: "djowGeleiaDePimenta", nome: "Djow de Geleia de Pimenta" },
            { id: "djowTilapiaAlhoPoro", nome: "Djow Tilapia e Alho Poro" },
            { id: "djowTilapiaLimaoSiciliano", nome: "Djow Tilapia de Limao Siciliano" },
            { id: "rigaware", nome: "Rigaware" },
        ],
    },
    {
        id: "sushiPremium",
        nome: "Sushi Premium",
        produtos: [
            { id: "atumMorno", nome: "Atum Morno" },
            { id: "bombaMaki", nome: "Bomba Maki" },
            { id: "brocolisHo", nome: "Brocolis Ho" },
            { id: "ebiPremium", nome: "Ebi Premium" },
            { id: "furaiMaki", nome: "Furai Maki" },
            { id: "joAcelga", nome: "Jo Acelga" },
            { id: "sakeComAmendoas", nome: "Sake com Amendoas" },
            { id: "joHaddock", nome: "Jo Haddock" },
            { id: "trouxinhaDefumada", nome: "Trouxinha Defumada" },
            { id: "uramakiSalmaoFiladelfiaDoritos", nome: "Uramaki Salmao Filadelfia com Doritos" },
        ],
    },
    {
        id: "sashimi",
        nome: "Sashimi",
        produtos: [
            { id: "sashimiSalmao", nome: "Sashimi Salmao" },
            { id: "sashimiAtum", nome: "Sashimi Atum" },
            { id: "sashimiPeixeBranco", nome: "Sashimi Peixe Branco" },
            { id: "sashimiTilapia", nome: "Sashimi Tilapia" },
        ],
    },
    {
        id: "sashimiPremium",
        nome: "Sashimi Premium",
        produtos: [
            { id: "sashimiSalmaoMel", nome: "Sashimi Salmao com Molho de Mel" },
            { id: "sashimiSalmaoMaracuja", nome: "Sashimi Salmao com Molho de Maracuja" },
        ],
    },
    {
        id: "hotPremium",
        nome: "Hot Premium",
        produtos: [
            { id: "banana", nome: "Banana" },
            { id: "salmaoFiladelfia", nome: "Salmao Filadelfia" },
            { id: "hotRollEbi", nome: "Hot Roll Ebi Filadelfia" },
            { id: "hotRollSalmao", nome: "Hot Roll Salmao" },
            { id: "hotRollSalmaoFiladelfia", nome: "Hot Roll Salmao Filadelfia" },
            { id: "hotFiladelfiaCouveCrispy", nome: "Hot Filadelfia com Couve Crispy" },
            { id: "hotFiladelfiaDoritos", nome: "Hot Filadelfia com Doritos" },
            { id: "temakiHotFiladelfia", nome: "Temaki Hot Filadelfia" },
        ],
    },
    {
        id: "uramaki",
        nome: "Uramaki",
        produtos: [
            { id: "uramakiCalifornia", nome: "Uramaki California" },
            { id: "uramakiPeleSalmao", nome: "Uramaki Pele de Salmao" },
            { id: "uramakiSalmao", nome: "Uramaki Salmao" },
            { id: "uramakiSalmaoFiladelfia", nome: "Uramaki Salmao Filadelfia" },
            { id: "uramakiSkin", nome: "Uramaki Skin" },
            { id: "uramakiSkinFiladelfia", nome: "Uramaki Skin Filadelfia" },
            { id: "uramakiTomateRucula", nome: "Uramaki Tomate seco e Rucula" },
            { id: "uramakiTomateRuculaFiladelfia", nome: "Uramaki Tomate seco e Rucula Filadelfia" },
            { id: "uramakiTropical", nome: "Uramaki Tropical" },
            { id: "uramakiAtumGeleia", nome: "Uramaki Atum com Geleia de Pimenta Defumada" },
            { id: "uramakiTilapiaGrelhada", nome: "Uramaki Tilapia Grelhada" },
        ],
    },
    {
        id: "maki",
        nome: "Maki",
        produtos: [
            { id: "makiAtum", nome: "Maki Atum" },
            { id: "makiAtumFiladelfia", nome: "Maki Atum Filadelfia" },
            { id: "makiEbi", nome: "Maki Ebi" },
            { id: "makiKani", nome: "Maki Kani" },
            { id: "makiPeixeBranco", nome: "Maki Peixe Branco" },
            { id: "makiPepino", nome: "Maki Pepino" },
            { id: "makiSalmao", nome: "Maki Salmao" },
            { id: "makiSalmaoFiladelfia", nome: "Maki Salmao Filadelfia" },
            { id: "makiSkin", nome: "Maki Skin" },
        ],
    },
    {
        id: "temaki",
        nome: "Temaki",
        produtos: [
            { id: "temakiAtum", nome: "Temaki Atum" },
            { id: "temakiAtumSpice", nome: "Temaki Atum Spice" },
            { id: "temakiCalifornia", nome: "Temaki California" },
            { id: "temakiCamaraoSimples", nome: "Temaki Camarao Simples" },
            { id: "temakiCamaraoFiladelfia", nome: "Temaki Camarao Filadelfia" },
            { id: "temakiSalmaoCream", nome: "Temaki Salmao Cream" },
            { id: "temakiSalmaoEspecial", nome: "Temaki Salmao Especial" },
            { id: "temakiSalmaoSimples", nome: "Temaki Salmao Simples" },
            { id: "temakiSkin", nome: "Temaki Skin" },
        ],
    },
];

export class PedidoModel {
    constructor(storage = localStorage) {
        this.storage = storage;
        this.carrinho = this.carregar();
    }

    carregar() {
        try {
            return JSON.parse(this.storage.getItem(STORAGE_KEY)) || {};
        } catch {
            return {};
        }
    }

    salvar() {
        this.storage.setItem(STORAGE_KEY, JSON.stringify(this.carrinho));
    }

    adicionar(produto, quantidade) {
        this.carrinho[produto] = (this.carrinho[produto] || 0) + quantidade;
        this.salvar();
    }

    remover(produto, quantidade) {
        if (!this.carrinho[produto]) {
            return;
        }

        this.carrinho[produto] = Math.max(this.carrinho[produto] - quantidade, 0);

        if (this.carrinho[produto] === 0) {
            delete this.carrinho[produto];
        }

        this.salvar();
    }

    limpar() {
        this.carrinho = {};
        this.storage.removeItem(STORAGE_KEY);
    }

    totalItens() {
        return Object.values(this.carrinho).reduce((total, quantidade) => total + quantidade, 0);
    }

    itens() {
        return Object.entries(this.carrinho).map(([produto, quantidade]) => ({ produto, quantidade }));
    }
}
