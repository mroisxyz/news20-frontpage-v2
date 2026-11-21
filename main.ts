import { mkdirSync, copyFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const destination = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);

const { size } = statSync(destination);
console.error(`[news-image-20261120] wrote entry.png to ${destination} (${size} bytes / ${(size / 1024).toFixed(1)} KiB)`);
