import { app } from "../src/app";

export const config = {
  runtime: "edge",
};

export default function handler(request: Request) {
  return app.fetch(request);
}
