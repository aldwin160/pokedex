/*
ABOUT THIS FILE:
defines the "catch" command, which allows users to attempt to catch a Pokémon by name.
*/

import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  // Invalid if pokemon name more or less than 1
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  // Get pokemon name and fetch pokemon data
  const name = args[0];
  const pokemon = await state.pokeAPI.fetchPokemon(name);

  // Catching pokemon logic
  console.log(`Throwing a Pokeball at ${pokemon.name}...`);

  const res = Math.floor(Math.random() * pokemon.base_experience);
  if (res > 40) {
    console.log(`${pokemon.name} escaped!`);
    return;
  }

  console.log(`${pokemon.name} was caught!`);
  console.log("You may now inspect it with the inspect command.");
  state.caughtPokemon[pokemon.name] = pokemon;
}
