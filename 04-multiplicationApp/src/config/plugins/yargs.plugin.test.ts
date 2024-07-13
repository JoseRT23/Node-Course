//import yargs from "yargs";

const runCommand = async(args: string[]) => {
    
    process.argv = [ ...process.argv, ...args];
    const { yarg } = await import('./yargs.plugin');

    return yarg;
}

describe('Testing yargs plugin', () => {

    const originalArg = process.argv;

    beforeEach(() => {
        process.argv = originalArg;
        jest.resetModules();
    });
    
    test('should return default values', async() => {

        const argv = await runCommand(['-b', '5']);

        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'default-name',
            d: 'ouputs',
        }));
    });

    test('should return configuration with default values', async() => {
        const argv = await runCommand(['-b', '7', '-l', '3', '-s', '-n', 'name-test', '-d', 'testOuput']);

        expect(argv).toEqual(expect.objectContaining({
            b: 7,
            l: 3,
            s: true,
            n: 'name-test',
            d: 'testOuput',
        }));
    });
});