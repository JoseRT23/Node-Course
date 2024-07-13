import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory.ts', () => {
    const getUUID = () => '12345';
    const getAge = () => 23;

    test('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({ getUUID, getAge });
        expect(typeof makePerson).toBe('function');
    });

    test('buildMakePerson should return a person', () => {

        const makePerson = buildMakePerson({ getUUID, getAge });
        const jhonDoe = makePerson({ name: 'Jhon', birthdate: '2001-01-23' });
        expect(jhonDoe).toStrictEqual(
            { 
                id: '12345',
                name: 'Jhon', 
                birthdate: '2001-01-23',
                age: 23
            }
        );
    });
});