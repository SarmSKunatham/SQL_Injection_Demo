import postgres from "postgres";

export const sql = postgres({
  port: 5432,
  host: "localhost",
  database: "postgres",
  username: "postgres",
  password: "postgres",
});
