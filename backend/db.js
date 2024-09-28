// db.js
import knex from "knex";

export const db = knex({
  client: 'pg',
  connection: {
    host: 'aws-0-ap-south-1.pooler.supabase.com',
    user: 'postgres.enpzfryqcvgybkfmxjis',
    password: 'RmpwSaytNlhA8MFn',
    database: 'postgres',
    port: 6543,
  },
});
