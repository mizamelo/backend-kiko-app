## La Horta - __API__

[![Build Status](https://travis-ci.org/mizamelo/backend-kiko-app.svg?branch=master)](https://travis-ci.org/mizamelo/backend-kiko-app)

Instalando dependencias com Yarn

```bash
$ yarn
```

`Tests`

Para rodar os testes basta apenas, na raiz do projeto, executar o seguinte comando:

```bash
$ yarn test
```

Subindo Postgres via Docker

```bash
$ docker run --name kikodb -e POSTGRES_PASSWORD=Postgres2019 -e POSTGRES_DB=kikodb -p 5432:5432 -d postgres
```
