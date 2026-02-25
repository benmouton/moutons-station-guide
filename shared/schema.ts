import { z } from "zod";

export const stations = ["sautee", "salad", "fry", "batch", "breakfast", "desserts", "expo"] as const;
export type Station = typeof stations[number];

export const stationLabels: Record<Station, string> = {
  sautee: "Sautée",
  salad: "Salad/Grill",
  fry: "Fry",
  batch: "Batch",
  breakfast: "Breakfast",
  desserts: "Desserts",
  expo: "Expo"
};

// Content types - the primary classification (what am I doing?)
export const contentTypes = ["recipe", "prep", "checklist"] as const;
export type ContentType = typeof contentTypes[number];

export const contentTypeLabels: Record<ContentType, string> = {
  recipe: "Recipes",
  prep: "Prep & Mise en Place",
  checklist: "Checklists"
};

export const recipeCategories = [
  "prep",
  "tips",
  "appetizers", 
  "entrees",
  "sides",
  "kids",
  "portions",
  "sauces",
  "desserts",
  "seasonings",
  "wings"
] as const;

export type RecipeCategory = typeof recipeCategories[number];

export const categoryLabels: Record<RecipeCategory, string> = {
  prep: "Prep Instructions",
  tips: "Cooking Tips",
  appetizers: "Appetizers",
  entrees: "Entrees",
  sides: "Sides",
  kids: "Kids Menu",
  portions: "Portion Guides",
  sauces: "Sauces & Dressings",
  desserts: "Desserts",
  seasonings: "Seasonings",
  wings: "Wings"
};

export interface Recipe {
  id: string;
  name: string;
  station: Station;
  category: RecipeCategory;
  contentType: ContentType;
  description: string;
  ingredients?: string[];
  instructions?: string[];
  tips?: string;
  yield?: string;
  cookTime?: string;
  internalTemp?: string;
  portionSize?: string;
}

export const recipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  station: z.enum(stations),
  category: z.enum(recipeCategories),
  contentType: z.enum(contentTypes),
  description: z.string(),
  ingredients: z.array(z.string()).optional(),
  instructions: z.array(z.string()).optional(),
  tips: z.string().optional(),
  yield: z.string().optional(),
  cookTime: z.string().optional(),
  internalTemp: z.string().optional(),
  portionSize: z.string().optional(),
});

// Keep existing user schema for template compatibility
import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
