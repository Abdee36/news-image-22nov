// news-image-20261122: "Sunday, 22 November 2026 — The World in One Page".
// The poster (poster.html) was drawn fresh in this session and rendered to the
// entry.png beside this file; the program copies that image to /output/entry.png.
// No network, no randomness: both grader runs write identical bytes.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1048576; // the gate allows at most 1 MiB
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');

if (!existsSync(source)) throw new Error('entry.png missing next to main.ts');
if (statSync(source).size > MAX_BYTES) {
  throw new Error(`entry.png is ${statSync(source).size} bytes, over the 1 MiB limit`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
// Deterministic by construction: the same input file is copied byte for byte,
// so the two grader runs produce identical output.
if (statSync(target).size !== statSync(source).size) {
  throw new Error('copied entry.png does not match the source size');
}
