import { readdir, rename } from 'node:fs/promises';

const source = await (await import('node:fs/promises')).readFile('manual-slide-by-slide-simple.md', 'utf8');
const files = await readdir('mermaid-diagrams');

for (const section of source.split(/^## /m).slice(1)) {
  const heading = section.match(/^(Slide (\d+)|Bonus (\d+)) — ([^\n]+)/);
  const diagram = section.match(/```mermaid\n([\s\S]*?)```/);
  if (!heading || !diagram) continue;

  const isBonus = Boolean(heading[3]);
  const number = isBonus ? `bonus-${String(heading[3]).padStart(2, '0')}` : String(heading[2]).padStart(2, '0');
  const slug = heading[4].trim().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();

  for (const extension of ['mmd', 'svg', 'png']) {
    const oldName = files.find((file) => file.endsWith(`-${slug}.${extension}`));
    if (!oldName) continue;
    const newName = `${number}-${slug}.${extension}`;
    if (oldName !== newName) await rename(`mermaid-diagrams/${oldName}`, `mermaid-diagrams/${newName}`);
  }
}

console.log('Renamed Mermaid assets using the actual slide numbers.');
