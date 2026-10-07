// Dados centrais do site — altere aqui contato e textos.
export const site = {
  name: "JeitinhoAI",
  slogan: "de um jeitinho aí",
  url: "https://jeitinhoai.vercel.app",
  // TODO: trocar pelo número real (formato internacional, só dígitos)
  whatsapp: "5511999999999",
  // TODO: trocar pelo e-mail real
  email: "contato@jeitinhoai.com.br",
  instagram: "https://instagram.com/jeitinhoai",
};

export function whatsappLink(message) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}

export const services = [
  {
    id: "sites",
    title: "Sites simples",
    text: "Seu negócio na internet, rápido e sem complicação.",
    bullets: [
      "Landing pages e sites institucionais",
      "Rápidos, responsivos e prontos para o Google",
      "No ar em poucos dias",
    ],
  },
  {
    id: "apps",
    title: "Apps com agentes de IA",
    text: "Aplicativos que pensam, respondem e trabalham por você.",
    bullets: [
      "Agentes que executam tarefas de ponta a ponta",
      "Integração com seus sistemas e planilhas",
      "Automação de processos repetitivos",
    ],
  },
  {
    id: "whatsapp",
    title: "IA atendendo no WhatsApp",
    text: "Produto pronto: atendimento 24h para seus clientes.",
    bullets: [
      "Responde dúvidas, agenda e qualifica clientes",
      "Fala com a voz da sua marca",
      "Passa para um humano quando precisa",
    ],
    highlight: "Produto pronto",
  },
  {
    id: "sob-medida",
    title: "Sob medida",
    text: "Seu problema é único? A solução também será.",
    bullets: [
      "Diagnóstico do seu processo",
      "Solução desenhada para o seu negócio",
      "Acompanhamento depois da entrega",
    ],
  },
];

export const steps = [
  {
    title: "Bate-papo",
    text: "A gente entende seu negócio e o que está travando o seu dia a dia.",
  },
  {
    title: "Proposta",
    text: "Você recebe uma solução clara, com prazo e preço, sem letras miúdas.",
  },
  {
    title: "Mão na massa",
    text: "Desenvolvemos rápido e mostramos o progresso a cada etapa.",
  },
  {
    title: "No ar",
    text: "Entregamos funcionando e seguimos junto para ajustar o que precisar.",
  },
];

export const reasons = [
  {
    title: "Sem tecniquês",
    text: "Explicamos tudo em português claro. Você entende o que está comprando.",
  },
  {
    title: "Rápido de verdade",
    text: "IA no nosso próprio processo: entregamos em dias o que levaria meses.",
  },
  {
    title: "Do seu tamanho",
    text: "Soluções para pequenos e médios negócios, com preço que cabe no bolso.",
  },
  {
    title: "Junto com você",
    text: "Depois de entregar, a gente continua por perto para evoluir a solução.",
  },
];

export const faqs = [
  {
    q: "Preciso entender de tecnologia para contratar?",
    a: "Não. A gente cuida da parte técnica e explica tudo de um jeito simples. Você só precisa conhecer o seu negócio.",
  },
  {
    q: "Quanto tempo leva para ter meu site no ar?",
    a: "Sites simples ficam prontos, em média, em poucos dias depois que recebemos textos e imagens.",
  },
  {
    q: "A IA no WhatsApp substitui meu atendimento?",
    a: "Ela cuida das perguntas repetitivas 24h por dia e passa para a sua equipe quando o assunto pede um humano.",
  },
  {
    q: "Quanto custa?",
    a: "Depende do que você precisa. Fale com a gente: a primeira conversa e o orçamento são gratuitos.",
  },
];
