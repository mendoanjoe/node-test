import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'postgres.db',
      port: 5432,
      username: 'mendoanjoe',
      password: 'hhZifk3@#O6l',
      database: 'node_test',
      synchronize: true,
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
    }),
  },
];
