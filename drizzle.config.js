import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schemas/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres:UvSHDJvoBJKMsZXQCLckefrTgMRNrklb@maglev.proxy.rlwy.net:57980/railway",
  },
});