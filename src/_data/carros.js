import { ref } from 'vue'

const carros = ref([
  {
    id: 1,
    nome: 'BABY BENTLEY',
    quantidade: 0,
    preco: 20000.00,
    img: 'https://www.citylimos.info/wp-content/uploads/2012/02/baby-bentley1.jpg',
    info:"Limousine Majestosa: Ícone de luxo e elegância, a limousine possui design alongado, presença imponente e interior requintado com bancos de couro, iluminação ambiente e amenidades premium. Perfeita para ocasiões especiais e transporte VIP, combina estilo e conforto para uma experiência de viagem extravagante."
  },
  {
    id: 2,
    nome: 'NOVELTY',
    quantidade: 0,
    preco: 7500.00,
    img:'https://images.noticiasautomotivas.com.br/img/f/limousine-9.jpg',
    info:"Presença Imponente: A limousine preta é mais do que apenas um veículo; é uma declaração de presença. Seu tamanho imponente e acabamento preto profundo atraem olhares onde quer que vá."
  },
  {
    id: 3,
    nome: 'STRETCH',
    quantidade: 0,
    preco: 8300.00,
    img:'https://cdn0.casamentos.com.br/vendor/9441/3_2/960/jpg/limousine-preta-peugeot_13_179441.jpeg',
    info:"Viagem VIP: Ideal para ocasiões especiais, a limousine preta oferece uma experiência VIP incomparável. Com motorista particular, ela garante que os passageiros cheguem com estilo a eventos importantes."
  },
  {
    id: 4,
    nome: 'CHRYSLER 300C',
    quantidade: 0,
    preco: 9000.00,
    img:'https://affinitylimousines.com.au/wp-content/uploads/photo-gallery/Limo/Affinity%20Limousines%20-%20Chrysler%20Limo%20Hire%20Melbourne%20(28).jpg',
    info:"Momentos Memoráveis: Desde casamentos até festas de formatura, a limousine preta é uma escolha popular para tornar momentos especiais ainda mais memoráveis. Sua atmosfera sofisticada cria um cenário perfeito para fotos e celebrações."
  },
  {
    id: 5,
    nome: 'LINCOLN TOWN',
    quantidade: 0,
    preco: 10000.00,
    img:'https://www.chicagomotorcars.com/imagetag/5514/main/l/Used-2007-Lincoln-Town-Car-Executive-STRETCH-LIMOUSINE.jpg',
    info:"Conforto com Classe: Viajar em uma limousine preta é uma experiência de conforto com classe. Com ar-condicionado controlado individualmente, sistema de entretenimento e até mesmo minibar, cada detalhe é projetado para o máximo conforto dos passageiros."
  },
  {
    id: 6,
    nome: 'HUMMER',
    quantidade: 0,
    preco: 6800.00,
    img:'https://www.kinglimousines.com.br/gerenciar/anexos/paginas/8/hummerb_2.jpg',
    info:"Elegância sobre Rodas: Uma limousine preta é a personificação da elegância em movimento. Com seu exterior impecável e design alongado, ela desliza pelas ruas como um símbolo de luxo e sofisticação."
  },
  {
    id: 7,
    nome: 'CADILLAC',
    quantidade: 0,
    preco: 9500.00,
    img:'https://exclusivalimusine.com.br/wp-content/uploads/2021/04/Limo-Cadilac-preta.jpg',
    info:"Atração em Eventos: Em eventos de gala e tapetes vermelhos, a limousine preta é uma presença que atrai a atenção. Ao chegar e sair em grande estilo, os passageiros são transportados para o centro das atenções."
  },
  {
    id: 8,
    nome: 'GRAND BLAZER',
    quantidade: 0,
    preco: 7500.00,
    img:'https://www.gattilimousines.com.br/novo/wp-content/uploads/2017/09/image.png',
    info:"Noite na Cidade: Quando a noite pede uma dose de extravagância, a limousine preta está pronta para levar os passageiros a uma jornada luxuosa pela cidade. Com janelas fumê, proporciona privacidade enquanto explora a vida noturna."
  },
  {
    id: 9,
    nome: 'LIMOUSINE PRETA',
    quantidade: 0,
    preco: 5500.00,
    img:'https://www.gattilimousines.com.br/novo/wp-content/uploads/2015/06/IMG_4462.jpg',
    info: "Transporte de Negócios: Para reuniões e compromissos de negócios, a limousine preta é uma escolha prática e profissional. Ela oferece um espaço tranquilo para reuniões de última hora e permite que os ocupados executivos trabalhem enquanto se deslocam.Carro com 4 rodas, 10 janelas, bancos de couro confortavel. se mata seu bota"
  }
])

const getCarroById = (id) => carros.value.find(c => c.id == id)


export { carros, getCarroById  }