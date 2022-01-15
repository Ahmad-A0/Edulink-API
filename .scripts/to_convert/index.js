import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { roughType } from '../../build/Assorted_Tools/tools.js';
// const { roughType } = require('../build/Assorted_Tools/tools');

for (const file of readdirSync('.')) {
  if (!file.endsWith('.json')) continue;

  const data = JSON.parse(readFileSync(`${'.'}/${file}`));
  const typed = JSON.stringify(roughType(data), null, 2)
    .replace(/"string"/g, 'string')
    .replace(/"number"/g, 'number')
    .replace(/"boolean"/g, 'boolean');
  const full =
    `type ${file.split('.')[0]} = ` +
    typed +
    '\n' +
    `export default ${file.split('.')[0]}\n`;

  writeFileSync(`${'.'}/${`${file.split('.')[0]}.ts`}`, full);
}
