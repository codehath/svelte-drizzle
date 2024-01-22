// import { drizzle } from "drizzle-orm/node-postgres";
// import { index, integer, pgTable, text } from "drizzle-orm/pg-core";

// const users = pgTable("users", {
// 	id: integer("id").primaryKey(),
// 	name: text("name").notNull(),
// });

// const posts = pgTable("post", {
// 	id: integer("id").primaryKey(),
// 	content: text("content").notNull(),
// 	ownerId: integer("owner_id").references(() => users.id),
// });

// // Mock the database
// const db = drizzle({} as any);

import {
	boolean,
	timestamp,
	integer,
	pgTable,
	varchar,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
	id: integer("id").primaryKey(),
	content: varchar("title", { length: 600 }).notNull(),
	completed: boolean("completed").notNull().default(false),
	createdAt: timestamp("created_at").defaultNow(),
});
