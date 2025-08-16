import pg from "pg";
import {drizzle} from "drizzle-orm/node-postgres";

const Pool = pg.Pool;

export const pool = new Pool({
    connectionString: 
        "postgresql://postgres:UvSHDJvoBJKMsZXQCLckefrTgMRNrklb@maglev.proxy.rlwy.net:57980/railway",
});

export const db = drizzle(pool);
