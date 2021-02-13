const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

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
  }

  # Pontos de entrada da sua API!
  type Query {
    ola: String!
    horaCerta: Date!
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
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