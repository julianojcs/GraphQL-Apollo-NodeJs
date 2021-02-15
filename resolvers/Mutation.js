const { usuarios, proximoId } = require('../data/db')

module.exports = {
  // args = { nome, email, idade }
  novoUsuario: (root, args) => {
    const emailExistente = usuarios.some((u) => u.email === args.email)

    if (emailExistente) {
      throw new Error('E-mail já existente')
    }
    const novo = {
      id: proximoId(),
      ...args,
      perfil_id: 1,
      status: 'ATIVO'
    }
    usuarios.push(novo)
    return novo
  },

  excluirUsuario: (root, {id}) => {
    const i = usuarios
      .findIndex(u => u.id === id)
    
    if(i<0) return null
    const excluidos = usuarios.splice(i, 1)
    return excluidos ? excluidos[0] : null
  }
}
