import { mkdirSync, writeFileSync } from "node:fs";

// One letter, written verbatim by main.ts: A for coffee, the whole entry.
const line = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
