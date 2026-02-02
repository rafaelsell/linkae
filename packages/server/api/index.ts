import { createServerAdapter } from "@whatwg-node/server";
import { app } from "../src/app";

export default createServerAdapter(app.fetch);
