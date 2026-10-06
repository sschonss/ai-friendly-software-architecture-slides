import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const source = await readFile('manual-slide-by-slide-simple.md', 'utf8');
const outputDir = 'mermaid-diagrams';
await mkdir(outputDir, { recursive: true });

const blocks = [];
for (const section of source.split(/^## /m).slice(1)) {
  const heading = section.match(/^(?:Slide \d+|Bonus \d+) — ([^\n]+)/);
  const diagram = section.match(/```mermaid\n([\s\S]*?)```/);
  if (heading && diagram) blocks.push([heading[1], diagram[1]]);
}
if (!blocks.length) throw new Error('No Mermaid blocks found');

for (let index = 0; index < blocks.length; index += 1) {
  const title = blocks[index][0].trim().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
  const number = String(index + 1).padStart(2, '0');
  const file = join(outputDir, `${number}-${title}.mmd`);
  await writeFile(file, blocks[index][1].trim() + '\n');
}

console.log(`Extracted ${blocks.length} Mermaid diagrams to ${outputDir}/`);
