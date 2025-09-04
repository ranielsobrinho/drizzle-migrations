import { pgTable, varchar, uuid, date } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phone: varchar({ length: 100 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  created_at: date().notNull(),
});

export const schedulingTable = pgTable("schedules", {
  id: uuid().primaryKey(),
  schedule_date: date().notNull(),
  user_id: uuid().notNull(),
  service: varchar({ length: 255 }).notNull(),
  created_at: date().notNull(),
});
