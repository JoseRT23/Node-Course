import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {

    test('getAge should return current age', () => {
        const birthdate = '2001-01-23';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculatedAge);
    });

    test('getAge shoul return 0 years', () => {
        //espiar el objeto Date de js
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2001);
        const birthdate = '2001-01-23';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();

    });
});