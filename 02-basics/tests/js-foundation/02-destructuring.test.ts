import { numbers } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {

    test('numbers should contain four and five', () => {
        expect(numbers).toContain(4);
        expect(numbers).toContain(5);
    });

    test('last, antepenultimate numbers should be 4 and 5', () => {
        const [ , , , four, five] = numbers;
        
        expect(four).toBe(4);
        expect(five).toBe(5);
    });
});