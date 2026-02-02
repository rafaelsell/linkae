import { Elysia } from "elysia";

const app = new Elysia().get("/", () => ({ hello: "Bun👋" }));

if (import.meta.main) {
  app.listen(8080);
  console.log(`Listening on ${app.server?.url}`);
}

export default app;
