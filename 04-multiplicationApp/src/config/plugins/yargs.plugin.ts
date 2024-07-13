import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { demandOption, number, option } from 'yargs';
import { argv } from 'process';

export const yarg = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table number'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'default-name',
    describe: 'file name'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: 'ouputs',
    describe: 'destination file'
})
.check((argv, options) => {
    if(argv.b < 1) throw 'Error: Base must be greater than 0';

    return true;
})
.parseSync();