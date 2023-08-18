import { ref } from 'vue'

const carros = ref([
  {
    id: 1,
    nome: 'BABY BENTLEY',
    quantidade: 0,
    preco: 200000.00,
    img: 'https://www.citylimos.info/wp-content/uploads/2012/02/baby-bentley1.jpg',
    info:"a"
  },
  {
    id: 2,
    nome: 'NOVELTY',
    quantidade: 0,
    preco: 75000.00,
    img:'https://images.noticiasautomotivas.com.br/img/f/limousine-9.jpg',
    info:"a"
  },
  {
    id: 3,
    nome: 'STRETCH',
    quantidade: 0,
    preco: 83000.00,
    img:'https://cdn0.casamentos.com.br/vendor/9441/3_2/960/jpg/limousine-preta-peugeot_13_179441.jpeg',
    info:"a"
  },
  {
    id: 4,
    nome: 'CHRYSLER 300C',
    quantidade: 0,
    preco: 90000.00,
    img:'https://affinitylimousines.com.au/wp-content/uploads/photo-gallery/Limo/Affinity%20Limousines%20-%20Chrysler%20Limo%20Hire%20Melbourne%20(28).jpg',
    info:"a"
  },
  {
    id: 5,
    nome: 'LINCOLN TOWN',
    quantidade: 0,
    preco: 100000.00,
    img:'https://www.chicagomotorcars.com/imagetag/5514/main/l/Used-2007-Lincoln-Town-Car-Executive-STRETCH-LIMOUSINE.jpg',
    info:"a"
  },
  {
    id: 6,
    nome: 'HUMMER',
    quantidade: 0,
    preco: 68000.00,
    img:'https://www.kinglimousines.com.br/gerenciar/anexos/paginas/8/hummerb_2.jpg',
    info:"a"
  },
  {
    id: 7,
    nome: 'CADILLAC',
    quantidade: 0,
    preco: 95000.00,
    img:'https://exclusivalimusine.com.br/wp-content/uploads/2021/04/Limo-Cadilac-preta.jpg',
    info:"a"
  },
  {
    id: 8,
    nome: 'GRAND BLAZER',
    quantidade: 0,
    preco: 75000.00,
    img:'https://www.gattilimousines.com.br/novo/wp-content/uploads/2017/09/image.png',
    info:"a"
  },
  {
    id: 9,
    nome: 'LIMOUSINE PRETA',
    quantidade: 0,
    preco: 55000.00,
    img:'https://www.gattilimousines.com.br/novo/wp-content/uploads/2015/06/IMG_4462.jpg',
    info: "kjfkad fjd afkds kfja sdkjaksf kakfj akjf ka jfdk jafkdj askdf jaskdfj asjdfk jasdkf jaskdl fjasd fjaks fkasj fdkljasd fkljasdfçkljadf jasdk fj"
  }
])

const getCarroById = (id) => carros.value.find(c => c.id == id)


export { carros, getCarroById  }