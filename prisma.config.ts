import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use DIRECT_URL (session pooler, port 5432) for schema push/migrations
    url: process.env["DIRECT_URL"] || process.env["DATABASE_URL"],
  },
});
