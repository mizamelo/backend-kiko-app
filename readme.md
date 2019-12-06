## KIKO - __API__

[![Build Status](https://travis-ci.org/mizamelo/backend-kiko-app.svg?branch=master)](https://travis-ci.org/mizamelo/backend-kiko-app)
[![codecov](https://codecov.io/gh/mizamelo/backend-kiko-app/branch/master/graph/badge.svg)](https://codecov.io/gh/mizamelo/backend-kiko-app)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![DeepScan grade](https://deepscan.io/api/teams/6376/projects/8373/branches/98301/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=6376&pid=8373&bid=98301)

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
