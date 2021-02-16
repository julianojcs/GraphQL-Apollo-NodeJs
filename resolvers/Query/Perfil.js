const { perfis } = require('../../data/db')

module.exports = {
  perfis: () => {
    return perfis
  },
  perfil: (root, { id }) => {
    const selecionado = perfis.filter((p) => p.id == id)
    return selecionado ? selecionado[0] : null
  }
}
