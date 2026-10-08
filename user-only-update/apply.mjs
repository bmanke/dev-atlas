import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const target = path.resolve('src/data/resources.json');
if (!fs.existsSync(target)) throw new Error('Run from the Dev Atlas project root.');
const incoming = JSON.parse(fs.readFileSync(path.join(here, 'resources.json'), 'utf8'));
const previous = JSON.parse(fs.readFileSync(target, 'utf8'));
if (!Array.isArray(previous) || previous.some(r => !Number.isInteger(r.id)) || new Set(previous.map(r => r.id)).size !== previous.length) throw new Error('Invalid existing resource IDs.');
const key = r => `${r.category}::${r.url}`;
const ids = new Map(previous.map(r => [key(r), r.id]));
let nextId = Math.max(0, ...previous.map(r => r.id)) + 1;
const replacement = incoming.map(r => ({...r, id: ids.get(key(r)) ?? nextId++}));
fs.copyFileSync(target, target + '.before-user-only.bak');
fs.writeFileSync(target, JSON.stringify(replacement, null, 2) + '\n');
const marker = '## [1.2.0] - 2026-10-07';
const changeFile = path.resolve('CHANGELOG.md');
const entry = fs.readFileSync(path.join(here, 'CHANGELOG.md'), 'utf8').replace(/^# Changelog\s*/, '');
const oldChange = fs.existsSync(changeFile) ? fs.readFileSync(changeFile, 'utf8') : '';
if (!oldChange.includes(marker)) fs.writeFileSync(changeFile, '# Changelog\n\n' + entry + '\n' + oldChange.replace(/^# Changelog\s*/, ''));
const packageFile = path.resolve('package.json');
if (fs.existsSync(packageFile)) {
  const pkg = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  pkg.version = '1.2.0';
  fs.writeFileSync(packageFile, JSON.stringify(pkg, null, 2) + '\n');
}
const readmeFile = path.resolve('README.md');
if (fs.existsSync(readmeFile)) {
  let readme = fs.readFileSync(readmeFile, 'utf8');
  readme = readme.replace(/\b40 starter links across 10 categories\b/g, '63 user-provided category entries across 10 categories').replace(/\b92 category entries across 10 categories\b/g, '63 user-provided category entries across 10 categories');
  if (!readme.includes('## User-only catalogue')) readme += '\n## User-only catalogue\n\nVersion 1.2.0 replaces the starter selection with only the 63 category placements supplied by the user. Cross-category links and both supplied MDN JavaScript learning URLs are retained. See CHANGELOG.md.\n';
  fs.writeFileSync(readmeFile, readme);
}
console.log(`Replaced catalogue: ${previous.length} -> ${replacement.length} entries. Existing matching IDs preserved. Build and check locally.`);
