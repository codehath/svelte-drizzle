// import { drizzle } from "drizzle-orm/planetscale-serverless";
// import { connect } from "@planetscale/database";
// import {
//     DATABASE_HOST,
//     DATABASE_PASSWORD,
//     DATABASE_USERNAME,
// } from "$env/static/private";

// // create the connection
// const connection = connect({
//     host: DATABASE_HOST,
//     username: DATABASE_USERNAME,
//     password: DATABASE_PASSWORD,
// });

// const db = drizzle(connection);

// export default db;

// import { drizzle } from 'drizzle-orm/node-postgres';
// import postgres from 'postgres';

// const queryClient = postgres("postgres://postgres:[email protected]:5432/db");
// const db = drizzle(queryClient);

// import { drizzle } from 'drizzle-orm/node-postgres';
// import postgres from 'postgres';

// const connection = postgres(`postgres://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/db`);
// const db = drizzle(connection);

// const connection = postgres("postgres://postgres:[email protected]:5432/db");

// db = PostgresqlDatabase(
// 	db_name,
// 	(user = user),
// 	(password = password),
// 	(host = host)
// );

// import { drizzle } from "drizzle-orm/node-postgres";
// import postgres from "postgres";
// import {
// 	DATABASE_HOST,
// 	DATABASE_PASSWORD,
// 	DATABASE_USERNAME,
// 	db_name,
// } from "$env/static/private";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID
//   };

// // create the connection
// const connection = postgres(
// 	`postgres://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${db_name}`
// );
// const db = drizzle(connection);

// export default db;

// import { drizzle } from "drizzle-orm/node-postgres";
// import { Client } from "pg";

// const client = new Client({
// 	host: import.meta.env.VITE_DATABASE_HOST,
// 	user: import.meta.env.VITE_DATABASE_USERNAME,
// 	password: import.meta.env.VITE_DATABASE_PASSWORD,
// 	database: import.meta.env.VITE_DATABASE_NAME,
// });

// client.connect();

// const db = drizzle(client);

// export default db;

import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
	host: import.meta.env.VITE_DATABASE_HOST,
	user: import.meta.env.VITE_DATABASE_USERNAME,
	password: import.meta.env.VITE_DATABASE_PASSWORD,
	database: import.meta.env.VITE_DATABASE_NAME,
});

await client.connect();
const db = drizzle(client);
