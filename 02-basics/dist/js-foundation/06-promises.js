"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const plugins_1 = require("../plugins");
const getPokemonById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await plugins_1.http.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon with id ${id} not found`;
    }
};
exports.getPokemonById = getPokemonById;
