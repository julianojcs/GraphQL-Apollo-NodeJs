const emailExistente = (usuarios, email) => {
  if (usuarios.some((u) => u.email === email))
    throw new Error('E-mail já existente')
}

const indiceUsuario = (usuarios, filtro) => {
  if (!filtro) return -1
  const { id, email } = filtro
  if (id) return usuarios.findIndex((u) => u.id === id)
  else if (email) return usuarios.findIndex((u) => u.email === email)
  return -1
}

module.exports = {
  emailExistente,
  indiceUsuario
}
