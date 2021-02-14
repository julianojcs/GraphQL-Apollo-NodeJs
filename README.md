![Juliano Costa](https://raw.githubusercontent.com/julianojcs/julianojcs.github.io/master/apfjuliano.dev.png)

# API GraphQL, Apollo Server, NodeJS, MongoDB and Mongoose

Learning an Apollo Server making and graphQL end-point API 

## Config

* Clone the project:

```
1. git clone https://github.com/julianojcs/graphql-node-mongoodb.git
2. cd graphql-node-mongoodb
```

* Install the dependencies:

```
3. npm install
```

* Seting the server up:

```
4. npm start
```

Open the url [http://localhost:4000/](http://localhost:4000/) to make the tests requests:

Test Queries at GraphQL's playground:

Query examples:
```
query{
   hello
  horaCerta
  usuarioLogado {
    id
    nome
    email
    idade
    salario
    salarioEmReal
    vip
    username
  }
  produtoEmDestaque {
    nome
    preco
    desconto
    precoComDesconto
  }
  numerosMegaSena
  usuario(id: 1) {
    id nome email idade vip perfil
  }
  usuarios {
    id nome email idade vip 
    perfil{nome}
    telefones{
      main
      mobile
      whatsapp
    }
  }
  perfil(id: 1) {
    nome
  }
  perfis {
    id nome
  }
  usuario(id: 1) {
     ...usuarioCompleto 
    salarioEmReal 
    username 
    telefones{
      main
    }
  }
  usuarios {
    ...usuarioCompleto
  }
}

fragment usuarioCompleto on Usuario {
  id nome email idade salario vip 
  perfil { nome id }
}
```

# You can find anothers query examples into the /playground file.