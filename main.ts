// Loading Screen Gold: a one-line loading-screen tip for stressed
// developers and AI coding agents. Writes the tip to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Loading tip: your AI agent is stuck on this screen too \u2014 it just rewrote the same function twice and called it progress.";

// The gate: 1 to 200 Unicode code points, never whitespace-only.
// A broken tip fails loudly here instead of shipping an invalid entry.
const points = [...TIP].length;
if (points < 1 || points > 200 || TIP.trim().length === 0) {
  throw new Error(`tip is ${points} code points, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
