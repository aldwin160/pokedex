/*
ABOUT THIS FILE:
defines the "explore" command, which allows users to explore a location and see the Pokémon that can be found there.
*/

import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a location name");
  }

  const name = args[0];
  const location = await state.pokeAPI.fetchLocation(name);

  console.log(`Exploring ${name}...`);
  console.log("Found Pokemon:");
  for (const enc of location.pokemon_encounters) {
    console.log(` - ${enc.pokemon.name}`);
  }
}
