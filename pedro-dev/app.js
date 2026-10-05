/* =======================================================================
   Pedro · Desenvolvimento Web — página de apresentação.
   Cards de serviço que expandem a explicação ao clicar.
   ======================================================================= */

const SERVICOS = [
    {
        icone: "🌐",
        titulo: "Sites e lojas online",
        resumo: "Catálogo + pedido no WhatsApp",
        detalhe: "Crio sites e lojas com seus produtos organizados (fotos, preços e categorias). O cliente escolhe, monta o pedido e envia direto pro seu WhatsApp, com a mensagem pronta. Ideal pra confeitarias, lojas, lanchonetes e qualquer negócio que vende pelo Instagram."
    },
    {
        icone: "⚙️",
        titulo: "Sistemas sob medida",
        resumo: "Agendamento, cadastro, gestão",
        detalhe: "Desenvolvo sistemas feitos pra sua necessidade: agendamento de horários, cadastro de clientes, controle de pedidos, painéis de gestão e muito mais. Tudo pensado pra facilitar o dia a dia do seu negócio."
    },
    {
        icone: "🔗",
        titulo: "APIs e integrações",
        resumo: "Conecte seus sistemas",
        detalhe: "Conecto seu sistema a outros serviços: meios de pagamento, envio de mensagens, planilhas, ferramentas externas e APIs de terceiros. Faço tudo funcionar junto, de forma automática."
    },
    {
        icone: "📲",
        titulo: "Automação de WhatsApp",
        resumo: "Atendimento mais rápido",
        detalhe: "Configuro mensagens automáticas, menus de atendimento e respostas rápidas no WhatsApp do seu negócio. Seu cliente recebe resposta na hora e você economiza tempo."
    },
    {
        icone: "⭐",
        titulo: "Seu negócio no Google",
        resumo: "Apareça nas buscas",
        detalhe: "Coloco seu negócio pra aparecer no Google e no Google Maps. Quando pesquisam o seu nome (ou serviços na sua região), seu negócio aparece com site, horário, telefone e localização."
    }
];

const $ = (id) => document.getElementById(id);

function montarServicos() {
    const container = $("servicos");
    container.innerHTML = "";

    SERVICOS.forEach((s, i) => {
        const card = document.createElement("div");
        card.className = "servico";
        card.innerHTML = `
            <button class="servico-cabecalho" aria-expanded="false">
                <span class="servico-icone">${s.icone}</span>
                <span class="servico-texto">
                    <span class="servico-titulo">${s.titulo}</span>
                    <span class="servico-resumo">${s.resumo}</span>
                </span>
                <span class="servico-seta">▾</span>
            </button>
            <div class="servico-detalhe">
                <p>${s.detalhe}</p>
            </div>
        `;
        const botao = card.querySelector(".servico-cabecalho");
        botao.addEventListener("click", () => {
            const aberto = card.classList.toggle("aberto");
            botao.setAttribute("aria-expanded", aberto ? "true" : "false");
        });
        container.appendChild(card);
    });
}

montarServicos();
