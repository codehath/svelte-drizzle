// import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";
// dotenv.config();

// export default {
// 	schema: "./src/lib/server/schema.ts",
// 	out: "./drizzle",
// 	driver: "mysql2",
// 	dbCredentials: {
// 		uri: `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?ssl={"rejectUnauthorized":true}`,
// 	},
// } satisfies Config;

// import type { Config } from "drizzle-kit";

// export default {
// 	schema: "./src/lib/server/schema.ts",
// 	out: "./drizzle",
// 	driver: "pg",
// 	dbCredentials: {
// 		uri: `postgres://
//             ${import.meta.env.VITE_DATABASE_USERNAME}:
//             ${import.meta.env.VITE_DATABASE_PASSWORD}@
//             ${import.meta.env.VITE_DATABASE_HOST}/
//             ${import.meta.env.VITE_DATABASE_NAME}`,
// 	},
// } as Config;

import type { Config } from "drizzle-kit";

const host = "127.0.0.1";
const port = 5432;
const user = "farhath";
const password = "";
const database = "test";

export default {
	schema: "./src/lib/server/schema.ts",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		uri: `postgres://${user}:${password}@${host}/${database}`,
	},
} as Config;

// const client = new Client({
//     connectionString= "postgres://user:password@host:port/db",
//   });
