// Reorganize Nitro's dist/ output into Vercel Build Output API at .vercel/output/
import { rm, mkdir, cp, rename, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const out = path.join(root, ".vercel", "output");

if (!existsSync(dist)) {
  console.error("[vercel-output] dist/ not found; did vite build run?");
  process.exit(1);
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await mkdir(path.join(out, "functions"), { recursive: true });

// config.json
await cp(path.join(dist, "config.json"), path.join(out, "config.json"));

// static assets
await cp(path.join(dist, "client"), path.join(out, "static"), { recursive: true });

// server function -> functions/__server.func
await cp(
  path.join(dist, "server"),
  path.join(out, "functions", "__server.func"),
  { recursive: true },
);

console.log("[vercel-output] Wrote .vercel/output/ (config + static + __server.func)");
