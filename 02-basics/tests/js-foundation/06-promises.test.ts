import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises.ts', () => {
    const pokemonId = 1;

    test('getPokemonById should return a pokemon', async() => {
        const pokemonName = await getPokemonById(pokemonId);
        expect(pokemonName).toBe('bulbasaur');
    });

    test('should return an error if pokemon does not exist', async() => {
        const pokemon = 1000000000000;
        try {
            await getPokemonById(pokemonId);         
        } catch (error) {
            expect(error).toBe(`Pokemon with id ${pokemon} not found`);            
        }
    })
});