const { perfis } = require('../data/db')

module.exports = {
  salario(usuario) {
    return usuario.salario_real
  },
  salarioEmReal(usuario) {
    return usuario.salario_real.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  },
  username(usuario) {
    return usuario.email.split('@')[0]
  },
  perfil(usuario) {
    const selecionado = perfis.filter((p) => p.id == usuario.perfil_id)
    return selecionado ? selecionado[0] : null
  }
}
