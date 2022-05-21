export default {
  type: 'sqlite',
  database: process.env.DB_PATH_SQLITE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrationsRun: false,
  migrations: [__dirname + '/../migration/**/*.ts'],
  cli: {
    migrationsDir: 'src/infra/database/migration',
    entitiesDir: 'src/infra/database/table-entity',
  },
};
