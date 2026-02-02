import { Elysia } from "elysia";

export const app = new Elysia().group("api", (app) =>
  app.get("/", () => "API is running"),
);

export type App = typeof app;
