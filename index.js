const { ApolloServer, gql } = require('apollo-server')
const { argsToArgsConfig } = require('graphql/type/definition')

const usuarios = [
  {
    id: 1,
    nome: 'Juliano Costa',
    email: 'apfjuliano@gmail.com',
    idade: 44,
    salario_real: 19230.9,
    vip: true,
    perfil_id: 1,
    telefones: {
      main: '(27)3026-4307',
      mobile: '(27)98133-0708',
      whatsapp: '(27)98133-0708'
    }
  },
  {
    id: 2,
    nome: 'Rafael Souza',
    email: 'rsouza@gmail.com',
    idade: 31,
    salario_real: 9300.92,
    vip: false,
    perfil_id: 2,
    telefones: {
      main: '(27)3000-3097',
      mobile: '(27)93000-3097'
    }
  },
  {
    id: 1,
    nome: 'Bruna Silva',
    email: 'brusilva@gmail.com',
    idade: 24,
    salario_real: 1330.9,
    vip: false,
    perfil_id: 2,
    telefones: {
      main: '(27)3026-4000'
    }
  }
]

const perfis = [
  {
    id: 1,
    nome: 'Admininstrador'
  },
  {
    id: 2,
    nome: 'Comum'
  }
]

const typeDefs = gql`
  scalar Date

  type Telefones {
    main: String
    mobile: String
    whatsapp: String
  }

  type Perfil {
    id: ID!
    nome: String!
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
    username: String
    salarioEmReal: String
    perfil: Perfil
    telefones: Telefones
  }

  # Pontos de entrada da sua API!
  type Query {
    ola: String!
    horaCerta: Date!
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]
    usuario(id: ID!): Usuario
    perfis: [Perfil]
    perfil(id: ID!): Perfil
  }
`

const resolvers = {

  Produto: {
    precoComDesconto(produto) {
      return (
        produto.desconto 
          ? (produto.preco * (1 - produto.desconto)).toFixed(2) 
          : produto.preco)
    }
  },

  Usuario: {
    salario(usuario) {
      return usuario.salario_real
    },
    salarioEmReal(usuario) {
      return usuario.salario_real.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    },
    username(usuario) {
      return usuario.email.split('@')[0]
    },
    perfil(usuario) {
      const selecionado = perfis
        .filter(p => p.id == usuario.perfil_id)
      return selecionado ? selecionado[0] : null
    }
  },

  Query: {
    ola: () => {return 'Bom dia!'},
    horaCerta: () => new Date(),
    usuarioLogado: () => { 
      return {
        id: 1,
        nome: 'Juliano',
        email: 'apfjuliano@gmail.com',
        idade: 44,
        salario_real: 19230.90,
        vip: true
      }
    },
    produtoEmDestaque: () => {
      return {
        nome: 'Notebook',
        preco: 4890.89,
        desconto: .15
      }
    },
    numerosMegaSena: () => {
      // return [3, 12, 24, 27, 33, 57]
      const crescente = (a, b) => a - b
      return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crescente)
    },
    usuarios: () => {
      return usuarios
    },
    usuario: (_, { id }) => {
      const selecionado = usuarios
        .filter(u => u.id == id)
      return selecionado ? selecionado[0] : null
    },
    perfis: () => {
      return perfis
    },
    perfil: (_, { id }) => {
      const selecionado = perfis
        .filter(p => p.id == id)
      return selecionado ? selecionado[0] : null
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})


server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
})