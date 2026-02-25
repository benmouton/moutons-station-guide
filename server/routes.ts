import type { Express } from "express";
import type { Server } from "http";
import { recipeCategories, categoryLabels, stations, stationLabels } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Get categories
  app.get("/api/categories", (_req, res) => {
    res.json(recipeCategories.map(cat => ({
      id: cat,
      label: categoryLabels[cat]
    })));
  });

  // Get stations
  app.get("/api/stations", (_req, res) => {
    res.json(stations.map(station => ({
      id: station,
      label: stationLabels[station]
    })));
  });

  return httpServer;
}
