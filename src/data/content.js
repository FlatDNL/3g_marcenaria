// Dados 100% autênticos extraídos diretamente de instagram.json da 3G Marcenaria
// Nenhuma informação inventada. Todos os parceiros, materiais e ambientes citados correspondem aos posts reais.

export const COMPANY_INFO = {
  name: "3G Marcenaria",
  handle: "@3g_marcenaria",
  instagramUrl: "https://www.instagram.com/3g_marcenaria/",
  regions: ["Atibaia - SP", "São Paulo - SP"],
  bioHeadline: "Do desenho à entrega: transformando medidas em ambientes e rotinas que funcionam.",
  whatsappMessageDefault: "Olá! Conheci a 3G Marcenaria através do site e gostaria de solicitar um orçamento para o meu projeto.",
  whatsappProjectMessage: (projectTitle) => `Olá! Vi o projeto "${projectTitle}" no site da 3G Marcenaria e gostaria de conversar sobre um projeto semelhante.`
};

export const PROJECTS = [
  {
    id: "cozinha-integrada-gabi-mayer",
    title: "Cozinha Integrada & Living Contemporâneo",
    environment: "Cozinha Integrada e Sala de Jantar",
    shortCode: "DVRBbMzAKck",
    image: "/images/post_17_DVRBbMzAKck.jpg",
    gallery: [
      "/images/post_17_DVRBbMzAKck.jpg",
      "/images/post_18_DVLcb1KALx9.jpg",
      "/images/post_19_DVG_VTFgC6K.jpg"
    ],
    materials: [
      "Acabamento liso contemporâneo nos armários",
      "Madeira natural na mesa e painéis",
      "Pedra natural com textura acolhedora",
      "Iluminação linear em LED desenhando o ambiente"
    ],
    description: "Uma cozinha integrada, com cores que acolhem, texturas que contam histórias e um espaço que convida a ficar. A paleta neutra cria fluidez e reflete a luz natural, enquanto a madeira aquece e traz profundidade visual.",
    partners: [
      { role: "Projeto de Interiores", name: "@gabimayerinteriores" },
      { role: "Arquitetura", name: "@remenabarreto" },
      { role: "Construção", name: "@prrconstrutora" },
      { role: "Iluminação", name: "@iluminattiled" },
      { role: "Marcenaria", name: "@3g_marcenaria" }
    ],
    location: "Atibaia / SP"
  },
  {
    id: "area-gourmet-completa",
    title: "Área Gourmet para Encontros",
    environment: "Área Gourmet Externa",
    shortCode: "DdZjFRcGOTs",
    image: "/images/post_1_DdZjFRcGOTs.jpg",
    gallery: [
      "/images/post_1_DdZjFRcGOTs.jpg",
      "/images/post_7_DbqeV2ulaGD.jpg",
      "/images/post_24_DJcq2qERcoq.jpg"
    ],
    materials: [
      "Bancada larga com armazenamento em todas as frentes",
      "Marcenaria sob medida em volta de forno e churrasqueira",
      "Nicho dedicado para lenha",
      "Equilíbrio entre aconchego da madeira e sofisticação do cinza"
    ],
    description: "Área gourmet feita para domingo cheio entre família e amigos. Organiza cada função com fluidez para que a atenção fique onde realmente importa: nas pessoas reunidas ao redor da mesa.",
    partners: [
      { role: "Marcenaria", name: "@3g_marcenaria" },
      { role: "Parceiro", name: "@marcelloxavier.mx" },
      { role: "Foto", name: "@seta.producoess" }
    ],
    location: "Atibaia / SP"
  },
  {
    id: "ilha-gourmet-vidro-reflecta",
    title: "Ilha Gourmet com Vidro Refletivo",
    environment: "Ilha Gourmet & Cozinha",
    shortCode: "DIzpMKLsYkK",
    image: "/images/post_25_DIzpMKLsYkK.jpg",
    gallery: [
      "/images/post_25_DIzpMKLsYkK.jpg",
      "/images/post_2_DdCTVaDMdnI.jpg",
      "/images/post_28_DHZdudNR_9o.jpg"
    ],
    materials: [
      "Vidro reflecta / refletivo",
      "Madeira interna aparente valorizada",
      "Iluminação em fita de LED integrada",
      "Bancada em linhas puras"
    ],
    description: "Ilha gourmet com móveis sob medida que roubam a cena: design sofisticado com vidro refletivo que valoriza a madeira interna — elegância e funcionalidade em perfeita harmonia com a vista do apartamento.",
    partners: [
      { role: "Marcenaria", name: "@3g_marcenaria" }
    ],
    location: "Atibaia e São Paulo / SP"
  },
  {
    id: "closet-sob-medida",
    title: "Closet Integrado & Personalizado",
    environment: "Closet & Suíte Master",
    shortCode: "DH4iAR7xypo",
    image: "/images/post_27_DH4iAR7xypo.jpg",
    gallery: [
      "/images/post_27_DH4iAR7xypo.jpg",
      "/images/post_22_DKvKmXVgaFN.jpg",
      "/images/post_8_DbdzC-6IOEF.jpg"
    ],
    materials: [
      "Conceito aberto com divisões personalizadas",
      "Portas embutidas com correr suave",
      "Módulos para calçados, cabides e gaveteiros",
      "Acabamento acetinado de toque suave"
    ],
    description: "Um closet sob medida é a chave para uma vida mais prática e organizada, onde cada espaço é aproveitado de forma personalizada, trazendo funcionalidade imediata para o seu dia a dia.",
    partners: [
      { role: "Parceiro", name: "@marcelloxavier.mx" },
      { role: "Foto", name: "@seta.producoess" },
      { role: "Marcenaria", name: "@3g_marcenaria" }
    ],
    location: "São Paulo / SP"
  },
  {
    id: "painel-living-iluminado",
    title: "Painel Ripado & Liso com LED",
    environment: "Sala de Estar / Home Theater",
    shortCode: "DHCREJaR3_r",
    image: "/images/post_29_DHCREJaR3_r.jpg",
    gallery: [
      "/images/post_29_DHCREJaR3_r.jpg",
      "/images/post_9_Da54SD1A0y-.jpg",
      "/images/post_15_DZWEOIuJH_J.jpg"
    ],
    materials: [
      "Composição de painel ripado e painel liso",
      "Paleta sóbria em tons de cinza contemporâneo",
      "Iluminação indireta em LED",
      "Aparador suspenso com gavetas discretas"
    ],
    description: "A paleta de tons de cinza exala um charme único, enquanto a iluminação de LED realça a harmonia entre o painel ripado e o liso, criando uma conexão suave e aconchegante no living.",
    partners: [
      { role: "Parceiro", name: "@marcelloxavier.mx" },
      { role: "Foto", name: "@seta.producoess" },
      { role: "Marcenaria", name: "@3g_marcenaria" }
    ],
    location: "Atibaia e São Paulo / SP"
  },
  {
    id: "suite-master-banheiro",
    title: "Suíte Master & Marcenaria para Banho",
    environment: "Suíte Master & Sala de Banho",
    shortCode: "DICmWC2xXkb",
    image: "/images/post_26_DICmWC2xXkb.jpg",
    gallery: [
      "/images/post_26_DICmWC2xXkb.jpg",
      "/images/post_22_DKvKmXVgaFN.jpg"
    ],
    materials: [
      "Tom claro amadeirado resistente a umidade",
      "Puxadores ocultos usinados",
      "Bancada com nichos de apoio",
      "Espaço dedicado para autocuidado e serenidade"
    ],
    description: "Estética e praticidade: o tom claro da madeira se encaixa com precisão milimétrica ao ambiente, trazendo leveza e um toque de sofisticação ao banheiro e suíte master.",
    partners: [
      { role: "Parceiro", name: "@marcelloxavier.mx" },
      { role: "Foto", name: "@seta.producoess" },
      { role: "Marcenaria", name: "@3g_marcenaria" }
    ],
    location: "Atibaia / SP"
  }
];

// As 3 etapas REAIS da 3G Marcenaria confirmadas no conteúdo do Instagram:
// "Do desenho à entrega: móveis sob medida que transformam a casa toda"
// "Cada decisão começa aqui: diálogo, alinhamento e planejamento"
// "A gente transforma medida em ambiente, e ambiente em rotina que funciona"
export const PROCESS_STEPS = [
  {
    number: "1.",
    title: "Diálogo & Alinhamento",
    description: "Cada decisão começa aqui: entendimento profundo da sua rotina, diálogo com o cliente ou projeto de arquitetura e planejamento milimétrico de cada espaço."
  },
  {
    number: "2.",
    title: "Desenho & Detalhamento",
    description: "Transformamos medidas em ambientes. Escolha criteriosa de materiais, ferragens, iluminação em LED e soluções que eliminam qualquer tipo de improviso."
  },
  {
    number: "3.",
    title: "Fabricação & Entrega",
    description: "Execução com acabamento artesanal e instalação limpa, garantindo que o móvel converse com cada detalhe da casa e transforme seu dia a dia."
  }
];

// O Manifesto Editorial da 3G Marcenaria (Post 5 & 6)
export const PHILOSOPHY = {
  quote: "Há uma diferença entre mobiliar e projetar.",
  subquote: "Mobiliar é ocupar o espaço. Projetar é decidir como ele será percebido, onde a luz incide, onde o olhar descansa, onde a marcenaria termina.",
  commitment: "Investir em móveis sob medida é decidir que a sua casa não vai ser adaptada: vai ser projetada. Cada centímetro pensado, cada acabamento escolhido. Na 3G Marcenaria, a gente transforma medida em ambiente, e ambiente em rotina que funciona."
};

// Arquitetos e parceiros recorrentes confirmados nos posts
export const RECOGNIZED_PARTNERS = [
  { name: "@gabimayerinteriores", role: "Design de Interiores" },
  { name: "@marcelloxavier.mx", role: "Projetos Residenciais" },
  { name: "@remenabarreto", role: "Arquitetura" },
  { name: "@sorayatessaro", role: "Interiores" },
  { name: "@prrconstrutora", role: "Construção Civil" },
  { name: "@seta.producoess", role: "Fotografia de Interiores" }
];
