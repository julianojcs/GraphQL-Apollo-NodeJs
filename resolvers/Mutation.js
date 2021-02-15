const { usuarios, proximoId } = require('../data/db')
const emailExistente = (usuarios, email) => {
  if (usuarios.some((u) => u.email === email))
    throw new Error('E-mail já existente')
}

module.exports = {
  // args = { nome, email, idade }
  novoUsuario: (root, { dados }) => {
    emailExistente(usuarios, dados.email)

    const novo = {
      id: proximoId(),
      ...dados,
      perfil_id: 1,
      status: 'ATIVO'
    }
    usuarios.push(novo)
    return novo
  },

  excluirUsuario: (root, { id }) => {
    const i = usuarios.findIndex((u) => u.id === id)

    if (i < 0) return null

    const excluidos = usuarios.splice(i, 1)
    return excluidos ? excluidos[0] : null
  },

  alterarUsuario: (root, args) => {
    const i = usuarios.findIndex((u) => u.id === args.id)

    if (i < 0) return null

    usuarios[i].nome = args.nome
    usuarios[i].email = args.email
    if (args.idade) {
      usuarios[i].idade = args.idade
    }
    return usuarios[i]

    //! Outra forma de se fazer
    // const alterado = {
    //   ...usuarios[1],
    //   ...args
    // }
    // usuarios.splice(i, 1, alterado)
    // return alterado
  }
}
