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

import {
	boolean,
	timestamp,
	integer,
	pgEnum,
	pgTable,
	serial,
	uniqueIndex,
	varchar,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
	"pending",
	"started",
	"doing",
	"paused",
	"cancelled",
]);
export const todos = pgTable("todos", {
	id: serial("id").primaryKey(),
	content: varchar("title", { length: 600 }).notNull(),
	completed: boolean("completed").notNull().default(false),
	createdAt: timestamp("created_at").defaultNow(),
	status: statusEnum("status").default("pending"),
});

// import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
// // declaring enum in database
// export const popularityEnum = pgEnum('popularity', ['unknown', 'known', 'popular']);
// export const countries = pgTable('countries', {
//   id: serial('id').primaryKey(),
//   name: varchar('name', { length: 256 }),
// }, (countries) => {
//   return {
//     nameIndex: uniqueIndex('name_idx').on(countries.name),
//   }
// });
// export const cities = pgTable('cities', {
//   id: serial('id').primaryKey(),
//   name: varchar('name', { length: 256 }),
//   countryId: integer('country_id').references(() => countries.id),
//   popularity: popularityEnum('popularity'),
// });
