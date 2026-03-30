import pg from 'pg'

const { Pool } = pg;

const connectionString =
  "postgresql://web103_project_5_user:pHazFP8EmF6rXP2dSOQdjcDaOvjjVyLK@dpg-d74mslq4d50c73dtelf0-a.oregon-postgres.render.com/web103_project_5?ssl=true";

export const pool = new Pool({
  connectionString,
});

export default pool;