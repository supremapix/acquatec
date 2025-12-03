import { FAQItem, ServiceItem } from './types';

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

// COMPANY INFO
export const COMPANY_NAME = "Alphaenge Fabricacao de Calhas e Telhados LTDA";
export const FANTASY_NAME = "Acquatec Calhas e Telhados";
export const CNPJ = "23.683.644/0001-27";
export const ADDRESS_STREET = "Rua Hassib Jezzini, 317";
export const ADDRESS_NEIGHBORHOOD = "Fanny";
export const ADDRESS_CITY = "Curitiba";
export const ADDRESS_STATE = "PR";
export const ADDRESS_ZIP = "81030-360";
export const FOUNDATION_DATE = "04/09/2015"; // Established date based on info

export const PHONE_LANDLINE = "(41) 3053-5740";
export const PHONE_WHATSAPP = "(41) 99133-7070";
export const PHONE_WHATSAPP_CLEAN = "5541991337070";
export const EMAIL_CONTACT = "contato@acquateccalhas.com.br";
export const WEBSITE_URL = "www.acquateccalhas.com.br";
export const FULL_URL = "https://www.acquateccalhas.com.br";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/acquateccalhas/",
  instagram: "https://www.instagram.com/_acquatec_/"
};

// LOCATIONS LISTS
export const CITIES = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", 
  "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", 
  "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha", 
  "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const NEIGHBORHOODS = [
  "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da Rua XV", "Atuba", "Augusta", 
  "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Batel Soho", "Bigorrilho", "Boa Vista", 
  "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", 
  "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", 
  "Centro", "Centro Cívico", "Centro Histórico", "CIC Central", "CIC Norte", "CIC Sul", 
  "Cidade Industrial", "Cristo Rei", "Ecoville", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", 
  "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", "Jardim Schaffer", 
  "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", 
  "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", 
  "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", 
  "São Francisco", "São João", "São Lourenço", "São Miguel", "Seminário", "Sítio Cercado", 
  "Taboão", "Tanguá", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Barigui", 
  "Vila Fanny", "Vila Formosa", "Vila Guaíra", "Vila Hauer", "Vila Izabel", "Vila Nossa Senhora da Luz", 
  "Vila Oficinas", "Vila Osternack", "Vila Pantanal", "Vila Parolin", "Vila Reno", "Vila Sabará", 
  "Vila Sandra", "Vila São Pedro", "Vila Tecnológica", "Vila Torres", "Vila Verde", "Vila Zumbi", 
  "Vista Alegre", "Xaxim", "Conjunto Caiuá", "Conjunto Parigot de Souza", "Neo Ville"
];

export const SERVICES: ServiceItem[] = [
  {
    id: "calhas",
    title: "Instalação e Manutenção de Calhas",
    description: [
      "Fabricação própria de calhas sob medida (beiral, platibanda, cocho e águas furtadas) garantindo encaixe perfeito e estanqueidade.",
      "Utilizamos materiais de alta resistência como Alumínio (0.5mm a 0.8mm), Aço Galvanizado e Cobre, com opção de pintura eletrostática que protege contra corrosão e maresia.",
      "Instalação de telas de proteção 'anti-folhas' e ralos abacaxi para prevenir entupimentos crônicos, essenciais para a região arborizada de Curitiba.",
      "Ideal para residências, condomínios e indústrias que buscam durabilidade e acabamento estético superior."
    ],
    price: "Orçamento Personalizado",
    image: "https://loremflickr.com/800/600/gutter,roofing,house?random=1"
  },
  {
    id: "rufos",
    title: "Rufos, Pingadeiras e Condutores",
    description: [
      "Solução definitiva para infiltrações na junção entre telhados e alvenaria. Fabricamos rufos de encosto, capa, internos e externos.",
      "Pingadeiras projetadas para proteger muros e platibandas contra manchas de umidade e desgaste do reboco.",
      "Condutores (canos de descida) retangulares ou redondos, dimensionados para suportar o alto volume pluviométrico de Curitiba.",
      "Vedação com selantes de poliuretano (PU) de alta performance para garantir zero vazamentos."
    ],
    image: "https://loremflickr.com/800/600/roof,metalwork,chimney?random=2"
  },
  {
    id: "telhados-metalicos",
    title: "Estruturas e Telhas Metálicas",
    description: [
      "Especialistas em cobertura metálica para galpões industriais, barracões comerciais e garagens residenciais.",
      "Trabalhamos com telhas trapezoidais, onduladas e termoacústicas (Sanduíche - EPS/PU) que reduzem o calor e o ruído da chuva.",
      "Vantagens: Estruturas mais leves que a madeira, imunes a cupins, montagem rápida e manutenção reduzida.",
      "Projetos completos desde o cálculo estrutural até a instalação final."
    ],
    price: "Consulte valores/m²",
    image: "https://loremflickr.com/800/600/metalroof,warehouse,construction?random=3"
  },
  {
    id: "reparos",
    title: "Manutenção e Reforma de Telhados",
    description: [
      "Serviço emergencial de 'caça-vazamentos': identificação e correção precisa de goteiras, telhas quebradas e pontos de infiltração.",
      "Realinhamento de telhas de cerâmica (barro), concreto e fibrocimento. Substituição de ripas e caibros apodrecidos.",
      "Limpeza técnica de calhas e telhados com hidrojateamento para remoção de musgos e detritos acumulados.",
      "Impermeabilização profissional de lajes, chaminés e pontos críticos."
    ],
    price: "Visita Técnica Gratuita",
    image: "https://loremflickr.com/800/600/roofer,repair,tools?random=4"
  },
  {
    id: "captacao",
    title: "Sistemas de Captação de Água Pluvial",
    description: [
      "Projeto e execução de sistemas para coleta e reuso de água da chuva (Cisternas).",
      "Filtros separadores de detritos para garantir a qualidade da água armazenada para uso em jardins, lavagem de calçadas e descargas.",
      "Solução sustentável que proporciona economia de até 50% na conta de água.",
      "Instalação completa: desde a adaptação das calhas até o reservatório final."
    ],
    price: "Projetos Sustentáveis",
    image: "https://loremflickr.com/800/600/rainwater,tank,eco?random=5"
  },
  {
    id: "reformas",
    title: "Reformas Estruturais Completas",
    description: [
      "Retrofit de coberturas antigas: substituição total do engradamento de madeira ou adaptação para estrutura metálica.",
      "Reforço estrutural para suportar novos tipos de telhas ou instalação de painéis solares.",
      "Tratamento de madeiramento com produtos fungicidas e cupinicidas.",
      "Gerenciamento completo da obra com equipe própria, garantindo segurança e limpeza no local."
    ],
    image: "https://loremflickr.com/800/600/roofconstruction,carpentry,site?random=6"
  },
  {
    id: "solar",
    title: "Iluminação Natural (Telhas Translúcidas)",
    description: [
      "Instalação de domus e telhas translúcidas em policarbonato (alveolar ou compacto) e fibra de vidro.",
      "Ideal para corredores, áreas de serviço, indústrias e centros de distribuição.",
      "Permite a entrada de luz natural, reduzindo drasticamente o consumo de energia elétrica durante o dia.",
      "Materiais com proteção UV que não amarelão com o tempo."
    ],
    image: "https://loremflickr.com/800/600/skylight,roof,sun?random=7"
  },
  {
    id: "ventilacao",
    title: "Exaustores Eólicos e Ventilação Industrial",
    description: [
      "Instalação de exaustores eólicos que renovam o ar do ambiente utilizando a força do vento (energia zero).",
      "Redução da sensação térmica em galpões, fábricas e cozinhas industriais.",
      "Eliminação de odores, fumaça e ar viciado, promovendo um ambiente de trabalho mais saudável.",
      "Rolamentos blindados e estrutura em alumínio para longa vida útil."
    ],
    image: "https://loremflickr.com/800/600/ventilator,roof,industrial?random=8"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Mendes",
    location: "Batel, Curitiba",
    text: "A equipe da Acquatec foi fantástica. Trocaram todas as calhas da minha casa e resolveram um problema de infiltração antigo no telhado que ninguém conseguia arrumar. Profissionais muito educados e limpos.",
    rating: 5
  },
  {
    id: 2,
    name: "Condomínio Edifício Solar",
    location: "Água Verde, Curitiba",
    text: "Contratamos para a manutenção preventiva dos telhados do condomínio. O relatório fotográfico que eles entregam antes e depois passa muita confiança. Recomendo para síndicos.",
    rating: 5
  },
  {
    id: 3,
    name: "Indústria Metalúrgica PR",
    location: "CIC, Curitiba",
    text: "Instalaram exaustores eólicos e telhas translúcidas em nosso galpão. O serviço foi rápido e não interrompeu nossa produção. Ótimo custo-benefício.",
    rating: 5
  },
  {
    id: 4,
    name: "Mariana Souza",
    location: "Santa Felicidade, Curitiba",
    text: "Adorei o atendimento pelo WhatsApp, muito ágil. O orçamento foi justo e cumpriram o prazo combinado. Meu telhado ficou novo!",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  { 
    question: "Qual o tipo de calha ideal para minha casa em Curitiba?", 
    answer: "Devido ao alto volume de chuvas em Curitiba, recomendamos calhas com vazão dimensionada especificamente para sua área de telhado. Utilizamos chapas galvanizadas ou de alumínio com espessura adequada para evitar deformações e transbordamentos." 
  },
  { 
    question: "De quanto em quanto tempo devo limpar as calhas?", 
    answer: "Recomendamos a limpeza preventiva a cada 6 meses, preferencialmente antes das estações mais chuvosas (Verão) e após a queda de folhas (Outono). Isso evita entupimentos graves e danos à estrutura da casa." 
  },
  { 
    question: "Como funciona a garantia da Acquatec?", 
    answer: "Oferecemos garantia estendida de até 5 anos em nossa mão de obra e instalações novas. Trabalhamos apenas com fornecedores certificados para garantir que o material (calhas, rufos, telhas) tenha durabilidade superior." 
  },
  { 
    question: "Vocês atendem emergências de vazamento?", 
    answer: "Sim! Entendemos a urgência de uma goteira. Entre em contato pelo WhatsApp para priorizarmos seu atendimento e realizarmos uma visita técnica para estancar o problema o quanto antes." 
  },
  { 
    question: "Rufos são realmente necessários?", 
    answer: "Absolutamente. Os rufos protegem a junção entre o telhado e a parede (alvenaria). Sem eles, a água infiltra na parede, causando mofo, descascamento da pintura e danos estruturais graves." 
  },
  { 
    question: "Aceitam quais formas de pagamento?", 
    answer: "Facilitamos o pagamento com cartões de crédito (parcelamento disponível), PIX com desconto e transferência bancária. Negociamos condições especiais para obras maiores." 
  },
  { 
    question: "Atendem em quais regiões?", 
    answer: "Nossa base é em Curitiba (Fanny), mas atendemos toda a Região Metropolitana (Pinhais, São José, Colombo, Araucária, Campo Largo, etc) e realizamos obras no Litoral do Paraná sob consulta." 
  },
  { 
    question: "Fazem orçamento sem compromisso?", 
    answer: "Sim, nossos orçamentos são gratuitos para Curitiba e região próxima. O técnico vai até o local, avalia a necessidade e passa o valor exato, sem surpresas futuras." 
  },
];