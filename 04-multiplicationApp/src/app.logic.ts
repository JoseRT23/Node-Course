import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b:base, l:limit, s:showTable } = yarg;
const dir = 'ouputs/';
let ouputMessage = 
`===============================
        Tabla del ${base}
===============================\n`;

for(let i = 1; i <= limit; i++) {
    ouputMessage += `\n${base} x ${i} = ${base*i}`;
}

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(`ouputs/tabla-${base}.txt`, ouputMessage);

if (showTable) console.log(ouputMessage);