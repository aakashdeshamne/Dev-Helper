import { drizzle } from 'drizzle-orm/postgres-js';
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
// for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient), ...)
declare global{
   var db: PostgresJsDatabase<typeof schema>|undefined;
}
let db: PostgresJsDatabase<typeof schema>;
// for query purposes
if(process.env.NODE_ENV === 'production'){
    db=drizzle(postgres(process.env.DATABASE_URL!),{schema});
}else{
    if(!global.db){
        global.db=drizzle(postgres(process.env.DATABASE_URL!),{schema})
    }
    db=global.db;
}







// const queryClient = postgres(process.env.DATABASE_URL!);
// const db = drizzle(queryClient,{schema});
export  {db};
// await db.select().from(...)...