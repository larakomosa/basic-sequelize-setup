# Basic Sequelize Setup

NPM Scripts Added:
```
    "db:create": "sequelize-cli db:create",
    "db:migrate": "sequelize-cli db:migrate",
    "db:g:migration": "sequelize-cli migration:generate --name",
    "db:g:seed": "sequelize-cli seed:generate --name",
    "db:seeds": "sequelize-cli db:seed:all"
```

Comamnds:
- `npx sequelize init`
- `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`
- `npx sequelize-cli db:migrate`
- `npx sequelize-cli seed:generate --name sample-users`
- `npx sequelize-cli db:seed:all`
