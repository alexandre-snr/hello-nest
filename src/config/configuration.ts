export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    database: process.env.DATABASE_DB || 'hello-nest',
  },
  jwtSecret: process.env.JWT_SECRET || 'SECRET',
  saltRounds: parseInt(process.env.SALT_ROUNDS, 10) || 12,
});
