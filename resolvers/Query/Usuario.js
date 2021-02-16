const { usuarios } = require('../../data/db')
const { indiceUsuario } = require('../../util')

module.exports = {
  usuarios: () => {
    return usuarios
  },
  usuario: (root, { filtro }) => {
    const i = indiceUsuario(usuarios, filtro)
    if (i < 0) return null
    return usuarios[i]
  }
}
