# Projeto: Lista de Pedidos de Sushi

## Refatoração do Projeto
Refatoração do projeto **Lista de Pedidos**, visando modernizar o código para facilitar a sua manutenção e atualização.

---

## Tecnologias Utilizadas
As tecnologias utilizadas serão:

1. **HTML5**
2. **JavaScript**
3. **CSS** (para padronização de cores e textos)
4. **Bootstrap** (para responsividade da página)

---

## Arquitetura
A arquitetura utilizada será baseada no padrão **MVC** (Model-View-Controller). O projeto não terá banco de dados inicialmente, mas a estrutura permitirá que ele seja implementado no futuro.

---

## Persistência de Dados
Para a persistência dos dados locais, será utilizado o `localStorage`.

---

## Padronização de Cores e Estilo de Texto
A página terá como padrão as seguintes cores:
* Vermelho, laranja, amarelo, branco e cinza.

O texto padrão utilizará a fonte **Arial**.

---

## Finalização do Pedido
Para finalizar o pedido, os dados de **nome** e **telefone** deverão ser preenchidos obrigatoriamente.

Ao finalizar, deverá aparecer o resumo do pedido em formato **PDF** na tela, antes mesmo de ser enviado para uma impressora térmica.

---

# Atualizações do Projeto

## 🔒 Implementação de Privacidade e LGPD

### 1. Banner de Consentimento e Cookies
- **O que fazer:** Implementar um aviso (banner/pop-up) informando sobre o uso de tecnologias de armazenamento local necessárias para o funcionamento do carrinho.
- **Texto sugerido para o usuário:** "Utilizamos tecnologias de armazenamento temporário para gerenciar seu pedido. Ao continuar, você concorda com nossa política de privacidade."

### 2. Política de Retenção de Dados (LGPD)
- **Regra de Negócio:** Os dados do usuário são estritamente temporários. Eles são armazenados apenas durante a geração do pedido atual.
- **Ciclo de vida:** Assim que um novo pedido é iniciado ou finalizado, os dados do pedido anterior são permanentemente excluídos do escopo ativo.
- **Objetivo:** Garantir a conformidade com a LGPD (Princípios de Finalidade e Minimização de Dados).