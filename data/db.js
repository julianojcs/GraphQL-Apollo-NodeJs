const usuarios = [
  {
    id: 1,
    nome: 'Juliano Costa',
    email: 'apfjuliano@gmail.com',
    idade: 44,
    salario_real: 19230.9,
    vip: true,
    perfil_id: 1,
    telefones: {
      main: '(27)3026-4307',
      mobile: '(27)98133-0708',
      whatsapp: '(27)98133-0708'
    }
  },
  {
    id: 2,
    nome: 'Rafael Souza',
    email: 'rsouza@gmail.com',
    idade: 31,
    salario_real: 9300.92,
    vip: false,
    perfil_id: 2,
    telefones: {
      main: '(27)3000-3097',
      mobile: '(27)93000-3097'
    }
  },
  {
    id: 1,
    nome: 'Bruna Silva',
    email: 'brusilva@gmail.com',
    idade: 24,
    salario_real: 1330.9,
    vip: false,
    perfil_id: 2,
    telefones: {
      main: '(27)3026-4000'
    }
  }
]

const perfis = [
  {
    id: 1,
    nome: 'Admininstrador'
  },
  {
    id: 2,
    nome: 'Comum'
  }
]

module.exports = {
  usuarios,
  perfis
}
