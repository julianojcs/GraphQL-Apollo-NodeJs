const { usuarios, perfis } = require('../data/db')
const { emailExistente, indiceUsuario } = require('../util')

module.exports = {
  usuarios: () => {
    return usuarios
  },
  // usuario: (root, { id }) => {
  //   const selecionado = usuarios.filter((u) => u.id == id)
  //   return selecionado ? selecionado[0] : null
  // },
  usuario: (root, { filtro }) => {
    const i = indiceUsuario(usuarios, filtro)
    if (i < 0) return null
    return usuarios[i]
  },
  perfis: () => {
    return perfis
  },
  perfil: (root, { id }) => {
    const selecionado = perfis.filter((p) => p.id == id)
    return selecionado ? selecionado[0] : null
  }
}
