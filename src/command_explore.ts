/*
ABOUT THIS FILE:
defines the "explore" command, which allows users to explore a location and see the Pokémon that can be found there.
*/

import type { State } from "./state.js";

// Define explore command function
export async function commandExplore(state: State, ...args: string[]) {
  // Invalid if location name more or less than 1
  if (args.length !== 1) {
    throw new Error("you must provide a location name");
  }

  // Get location name and fetch location data
  const name = args[0];
  const location = await state.pokeAPI.fetchLocation(name);

  // Display encountered pokemon
  console.log(`Exploring ${name}...`);
  console.log("Found Pokemon:");
  for (const enc of location.pokemon_encounters) {
    console.log(` - ${enc.pokemon.name}`);
  }
}
