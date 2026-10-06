import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const workspaceDir = '/Users/luizschons/Documents/ChatGPT/Building AI-Friendly Software Architecture Slides';
const SKILL_DIR = '/Users/luizschons/.codex/plugins/cache/openai-primary-runtime/presentations/26.905.11957/skills/presentations';
const TMP_DIR = path.join(workspaceDir, '.slide-build');
const FINAL_PPTX = path.join(workspaceDir, 'outputs', 'ferramentas-para-slides-padronizados.pptx');
const { resolvePresentationFont, finalizePresentation } = await import(pathToFileURL(path.join(SKILL_DIR, 'container_tools/artifact_tool_utils.mjs')).href);
const family = resolvePresentationFont({ fontFamily: 'Aptos' });
await fs.mkdir(TMP_DIR, { recursive: true });
await fs.mkdir(path.dirname(FINAL_PPTX), { recursive: true });

const p = Presentation.create({ slideSize: { width: 1280, height: 720 } });
const s = p.slides.add();
s.background.fill = '#F7F6F2';
const addText = (text, x, y, w, h, size, color, opts={}) => {
  const box = s.shapes.add({ geometry: 'textbox', position: { left:x, top:y, width:w, height:h }, fill:'none', line:{fill:'none', width:0} });
  box.text = text;
  box.text.style = { typeface: family, fontSize:size, color, bold:!!opts.bold, italic:!!opts.italic, autoFit:'shrinkTextOnOverflow' };
  return box;
};
const rect = (x,y,w,h,fill, radius=18) => s.shapes.add({ geometry:'roundRect', position:{left:x,top:y,width:w,height:h}, fill, radius, line:{fill:'none',width:0} });

addText('Ferramentas para criar slides bonitos e padronizados', 72, 48, 890, 62, 34, '#18252B', {bold:true});
addText('A escolha depende de quanto você quer automatizar e de quanto controle visual precisa manter', 74, 114, 930, 32, 17, '#5B676D');

const cards = [
  {x:72, label:'CANVA PRO', color:'#FF5C75', title:'Melhor ponto de partida', body:'Modelos prontos + IA + Brand Kit. Você cria um padrão visual e reaproveita em vários decks.', tag:'Minha recomendação'},
  {x:440, label:'BEAUTIFUL.AI', color:'#5D67F2', title:'Mais consistência', body:'Layouts inteligentes que se ajustam sozinhos. Ótimo quando o time precisa seguir regras.', tag:'Mais “à prova de erro”'},
  {x:808, label:'GAMMA', color:'#35A68A', title:'Mais velocidade', body:'Você cola um texto ou escreve um prompt e recebe um rascunho visual em poucos minutos.', tag:'Mais rápido para começar'},
];
for (const c of cards) {
  rect(c.x, 195, 320, 350, '#FFFFFF');
  rect(c.x, 195, 320, 9, c.color, 4);
  addText(c.label, c.x+24, 226, 260, 22, 13, c.color, {bold:true});
  addText(c.title, c.x+24, 264, 270, 42, 23, '#18252B', {bold:true});
  addText(c.body, c.x+24, 324, 270, 96, 17, '#46545A');
  rect(c.x+24, 467, 210, 38, c.color, 18);
  addText(c.tag, c.x+38, 478, 190, 18, 13, '#FFFFFF', {bold:true});
}

addText('Padrão simples para repetir', 72, 595, 300, 25, 16, '#18252B', {bold:true});
addText('1 prompt → 1 template mestre → 1 revisão de conteúdo → exportar', 72, 626, 780, 26, 22, '#18252B');
addText('Comece com 5 layouts fixos: capa, problema, comparação, processo e conclusão.', 72, 663, 760, 22, 15, '#5B676D');
addText('Fontes: Canva, Beautiful.ai e Gamma (páginas oficiais consultadas em 28/09/2026)', 860, 667, 350, 20, 10, '#7A858A', {italic:true});
s.speakerNotes.textFrame.setText('Fontes: https://www.canva.com/create/ai-presentations/ | https://www.beautiful.ai/presentations | https://gamma.app/ . Recomendações são uma síntese editorial, não uma comparação exaustiva de preços.');

const candidate = path.join(TMP_DIR, 'candidate.pptx');
await (await PresentationFile.exportPptx(p)).save(candidate);
const preview = await p.export({ slide:s, format:'png', scale:1 });
await fs.writeFile(path.join(TMP_DIR, 'slide-1.png'), new Uint8Array(await preview.arrayBuffer()));
const result = await finalizePresentation({
  explicitTotalSlideCount: 1,
  workspaceDir,
  candidatePath: candidate,
  finalPath: FINAL_PPTX,
  pythonExecutable: '/Users/luizschons/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',
  integrityValidatorPath: path.join(SKILL_DIR, 'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath: path.join(SKILL_DIR, 'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs: ['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit'],
  fontPolicy: { basis:'design', families:[family] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(TMP_DIR, 'validation.json'),
});
console.log(JSON.stringify(result));
