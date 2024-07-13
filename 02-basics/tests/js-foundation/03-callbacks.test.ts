import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks.ts', () => {

    test('getUserById should return an error if not exist', (done) => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found whit id: ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    });

    test('getUserById should return an user', (done) => {
        const id = 1;
        const expectedUser = {
            id: 1,
            name: 'Jhon Doe'
        }

        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toStrictEqual(expectedUser);
            done();
        });
    })
});