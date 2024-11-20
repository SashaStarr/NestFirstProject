import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qweasdxzQ1',
    database: 'postgres',
    entities: [__dirname +'/**/*.entity{.ts,.js}'],
    synchronize: true,
};

export default config;