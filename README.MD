## Configuração

Antes de rodar a aplicação, execute os seguintes passos:

- Crie um arquivo .env com a chave DB_PATH_SQLITE que aponte para um arquivo .db, se ele não existir será criado no caminho especificado.

Exemplo:

```
DB_PATH_SQLITE=src/infra/database/database.db
```

Após realizados os passos acima, rode o comando
`npm run start:dev`
que irá inciar a aplicação e te conectar ao banco de dados.
