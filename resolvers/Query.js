const { usuarios, perfis } = require('../data/db')

module.exports = {
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
