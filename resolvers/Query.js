const { usuarios, perfis } = require('../data/db')

module.exports = {
  hello: () => {
    return 'Hello World!'
  },
  horaCerta: () => new Date(),
  usuarioLogado: () => {
    return {
      id: 1,
      nome: 'Juliano',
      email: 'apfjuliano@gmail.com',
      idade: 44,
      salario_real: 19230.9,
      vip: true
    }
  },
  produtoEmDestaque: () => {
    return {
      nome: 'Notebook',
      preco: 4890.89,
      desconto: 0.15
    }
  },
  numerosMegaSena: () => {
    // return [3, 12, 24, 27, 33, 57]
    const crescente = (a, b) => a - b
    return Array(6)
      .fill(0)
      .map((n) => parseInt(Math.random() * 60 + 1))
      .sort(crescente)
  },
  usuarios: () => {
    return usuarios
  },
  usuario: (root, { id }) => {
    const selecionado = usuarios.filter((u) => u.id == id)
    return selecionado ? selecionado[0] : null
  },
  perfis: () => {
    return perfis
  },
  perfil: (root, { id }) => {
    const selecionado = perfis.filter((p) => p.id == id)
    return selecionado ? selecionado[0] : null
  }
}
