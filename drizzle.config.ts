import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
const { DATABASE_URL } = process.env;
if (!DATABASE_URL) {
	throw new Error("No url");
}

// const DB_URL = `postgres://${process.env.VITE_DATABASE_USERNAME}:${process.env.VITE_DATABASE_PASSWORD}@${process.env.VITE_DATABASE_HOST}/${process.env.VITE_DATABASE_NAME}`;

export default {
	schema: "./src/lib/server/schema.ts",
	out: "./migrations",
	driver: "pg",
	dbCredentials: {
		// connectionString: DB_URL,
		connectionString: `postgres://${process.env.VITE_DATABASE_USERNAME}:${process.env.VITE_DATABASE_PASSWORD}@${process.env.VITE_DATABASE_HOST}/${process.env.VITE_DATABASE_NAME}`,
	},
} satisfies Config;
