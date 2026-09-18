// Dicionario central de traducoes. Cada seccao do site le o seu texto
// deste objeto, em vez de ter frases escritas directamente no JSX -
// assim o site inteiro muda de idioma a partir de um unico sitio.

export type Lang = 'pt' | 'en'

export interface TranslationShape {
  nav: {
    history: string
    taste: string
    world: string
    contact: string
    cta: string
  }
  hero: {
    kicker: string
    titleLine1: string
    titleLine2: string
    titleLine3: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    scroll: string
  }
  marquee: string[]
  lifestyle: {
    kicker: string
    quoteLine1: string
    quoteLine2: string
    text: string
    photoAlt: string
  }
  story: {
    kicker: string
    title: string
    lead: string
    milestones: { year: string; text: string }[]
    hint: string
  }
  flipCard: {
    title: string
    text: string
    link: string
  }
  features: {
    kicker: string
    title: string
    items: { title: string; text: string }[]
  }
  showcase: {
    kicker: string
    title: string
    lead: string
    stats: { value: string; label: string }[]
    bottleAlt: string
    canAlt: string
  }
  footer: {
    headingLine1: string
    headingLine2: string
    blurb: string
    emailPlaceholder: string
    emailLabel: string
    subscribe: string
    subscribed: string
    brandBlurb: string
    columns: { title: string; links: string[] }[]
    legal: string[]
    rights: string
  }
}

export const translations: Record<Lang, TranslationShape> = {
  pt: {
    nav: {
      history: 'História',
      taste: 'O Sabor',
      world: 'Pelo Mundo',
      contact: 'Contacto',
      cta: 'Encontrar perto de mim',
    },
    hero: {
      kicker: 'Sabor que une o mundo',
      titleLine1: 'Coca-Cola',
      titleLine2: 'é mais que uma bebida.',
      titleLine3: 'É um sentimento.',
      lead:
        'Desde 1886, a Coca-Cola refresca momentos, conecta pessoas e faz parte das melhores histórias da vida.',
      ctaPrimary: 'Descobrir nossos produtos',
      ctaSecondary: 'Conhecer a história',
      scroll: 'Explorar',
    },
    marquee: [
      'DESDE 1886',
      'MAIS DE 200 PAÍSES',
      'RECEITA ORIGINAL',
      '1,9 MIL MILHÕES DE SERVIÇOS POR DIA',
      'FELICIDADE ENGARRAFADA',
    ],
    lifestyle: {
      kicker: 'Sabor que une o mundo',
      quoteLine1: 'Juntos é',
      quoteLine2: 'melhor.',
      text:
        'Um brinde ao fim de tarde, entre amigos, com o mar por perto. É nesses momentos simples que a Coca-Cola faz mais sentido.',
      photoAlt: 'Grupo de amigos a rir e a brindar com Coca-Cola ao pôr do sol, junto ao mar',
    },
    story: {
      kicker: 'A nossa história',
      title: 'Mais de um século a criar momentos.',
      lead:
        'Do balcão de uma farmácia em Atlanta até à mesa de milhões de famílias, a Coca-Cola cresceu sem nunca perder o essencial: um sabor que se reconhece de olhos fechados.',
      milestones: [
        { year: '1886', text: 'Nasce em Atlanta, criada pelo farmacêutico John Pemberton.' },
        { year: '1899', text: 'A garrafa contour começa a ganhar forma e identidade própria.' },
        { year: '1971', text: 'A canção "I\'d Like to Buy the World a Coke" torna-se hino global.' },
        { year: 'Hoje', text: 'Presente em mais de 200 países, sempre com a mesma receita de origem.' },
      ],
      hint: 'Passe o rato sobre o cartão',
    },
    flipCard: {
      title: 'Coca-Cola Original',
      text:
        'A fórmula que nunca mudou de espírito: bolhas vivas, um toque de caramelo e aquele frescor que só ela sabe dar. É o sabor contra o qual todos os outros são comparados.',
      link: 'Ver onde encontrar',
    },
    features: {
      kicker: 'Porque escolher Coca-Cola',
      title: 'Um sabor pensado em cada detalhe.',
      items: [
        {
          title: 'Bolhas que fazem a diferença',
          text: 'A carbonatação certa para aquele arrepio de frescura logo no primeiro gole.',
        },
        {
          title: 'Melhor bem gelada',
          text: 'Servida entre 2 e 4 graus, revela todo o seu sabor e refrescância.',
        },
        {
          title: 'Fórmula que não muda',
          text: 'O mesmo equilíbrio de sabor, protegido e mantido desde a receita original.',
        },
        {
          title: 'O mesmo sabor em todo o lado',
          text: 'De Lisboa a Tóquio, a experiência Coca-Cola mantém-se sempre igual.',
        },
      ],
    },
    showcase: {
      kicker: 'Pelo mundo',
      title: 'Um sabor, milhões de histórias.',
      lead:
        'De Lisboa a Tóquio, a mesma receita atravessa fronteiras e culturas sem perder aquilo que a torna reconhecível em qualquer lugar.',
      stats: [
        { value: '200+', label: 'Países onde é vendida' },
        { value: '1,9 mM', label: 'Serviços consumidos por dia' },
        { value: '2', label: 'Formatos: garrafa e lata' },
      ],
      bottleAlt: 'Garrafa de Coca-Cola',
      canAlt: 'Lata de Coca-Cola',
    },
    footer: {
      headingLine1: 'Junte-se à conversa.',
      headingLine2: 'Sabor todos os dias.',
      blurb: 'Novidades, edições limitadas e as histórias por trás da marca, direto na sua caixa de entrada.',
      emailPlaceholder: 'o.seu@email.com',
      emailLabel: 'O seu endereço de email',
      subscribe: 'Subscrever',
      subscribed: 'Subscrito',
      brandBlurb: 'Desde 1886 a espalhar frescura e momentos de felicidade partilhada, um gole a cada vez.',
      columns: [
        { title: 'Explorar', links: ['História', 'O Sabor', 'Pelo Mundo', 'Sustentabilidade'] },
        { title: 'Produtos', links: ['Coca-Cola Original', 'Coca-Cola Zero', 'Coca-Cola Sem Cafeína', 'Edições Limitadas'] },
        { title: 'Suporte', links: ['Perguntas Frequentes', 'Contacto', 'Imprensa', 'Carreiras'] },
      ],
      legal: ['Privacidade', 'Termos', 'Cookies'],
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      history: 'History',
      taste: 'Taste',
      world: 'Worldwide',
      contact: 'Contact',
      cta: 'Find near me',
    },
    hero: {
      kicker: 'A taste that unites the world',
      titleLine1: 'Coca-Cola',
      titleLine2: 'is more than a drink.',
      titleLine3: "It's a feeling.",
      lead:
        "Since 1886, Coca-Cola has refreshed moments, connected people and been part of life's best stories.",
      ctaPrimary: 'Discover our products',
      ctaSecondary: 'Learn our story',
      scroll: 'Explore',
    },
    marquee: [
      'SINCE 1886',
      '200+ COUNTRIES',
      'ORIGINAL RECIPE',
      '1.9 BILLION SERVINGS A DAY',
      'HAPPINESS IN A BOTTLE',
    ],
    lifestyle: {
      kicker: 'A taste that unites the world',
      quoteLine1: 'Better',
      quoteLine2: 'together.',
      text:
        "A toast at sunset, among friends, with the sea nearby. It's in these simple moments that Coca-Cola makes the most sense.",
      photoAlt: 'Group of friends laughing and toasting with Coca-Cola at sunset, by the sea',
    },
    story: {
      kicker: 'Our story',
      title: 'Over a century creating moments.',
      lead:
        "From a pharmacy counter in Atlanta to the tables of millions of families, Coca-Cola grew without ever losing what matters most: a taste you'd recognise with your eyes closed.",
      milestones: [
        { year: '1886', text: 'Born in Atlanta, created by pharmacist John Pemberton.' },
        { year: '1899', text: 'The contour bottle begins to take its own shape and identity.' },
        { year: '1971', text: 'The song "I\'d Like to Buy the World a Coke" becomes a global anthem.' },
        { year: 'Today', text: 'Present in more than 200 countries, always with the same original recipe.' },
      ],
      hint: 'Hover over the card',
    },
    flipCard: {
      title: 'Coca-Cola Original',
      text:
        "The formula whose spirit never changed: lively bubbles, a touch of caramel and a freshness only it can deliver. It's the taste every other one is measured against.",
      link: 'Find it near you',
    },
    features: {
      kicker: 'Why choose Coca-Cola',
      title: 'A taste crafted down to the last detail.',
      items: [
        {
          title: 'Bubbles that make the difference',
          text: 'Just the right carbonation for that refreshing chill on the very first sip.',
        },
        {
          title: 'Best served ice-cold',
          text: 'Served between 2 and 4 degrees, it reveals its full flavour and refreshment.',
        },
        {
          title: 'A formula that never changes',
          text: 'The same balance of flavour, protected and kept since the original recipe.',
        },
        {
          title: 'The same taste everywhere',
          text: 'From Lisbon to Tokyo, the Coca-Cola experience always stays the same.',
        },
      ],
    },
    showcase: {
      kicker: 'Around the world',
      title: 'One taste, millions of stories.',
      lead:
        'From Lisbon to Tokyo, the same recipe crosses borders and cultures without losing what makes it recognisable everywhere.',
      stats: [
        { value: '200+', label: "Countries where it's sold" },
        { value: '1.9 bn', label: 'Servings enjoyed every day' },
        { value: '2', label: 'Formats: bottle and can' },
      ],
      bottleAlt: 'Coca-Cola bottle',
      canAlt: 'Coca-Cola can',
    },
    footer: {
      headingLine1: 'Join the conversation.',
      headingLine2: 'Taste, every day.',
      blurb: "News, limited editions and the stories behind the brand, straight to your inbox.",
      emailPlaceholder: 'your.email@example.com',
      emailLabel: 'Your email address',
      subscribe: 'Subscribe',
      subscribed: 'Subscribed',
      brandBlurb: 'Since 1886, spreading freshness and shared moments of happiness, one sip at a time.',
      columns: [
        { title: 'Explore', links: ['History', 'Taste', 'Worldwide', 'Sustainability'] },
        { title: 'Products', links: ['Coca-Cola Original', 'Coca-Cola Zero', 'Coca-Cola Caffeine-Free', 'Limited Editions'] },
        { title: 'Support', links: ['FAQ', 'Contact', 'Press', 'Careers'] },
      ],
      legal: ['Privacy', 'Terms', 'Cookies'],
      rights: 'All rights reserved.',
    },
  },
}
