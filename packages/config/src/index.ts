import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

const config = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
});

export default config;
