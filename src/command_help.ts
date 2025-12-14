/*
ABOUT THIS FILE:
defines the "help" command, which provides users with information about available commands in the Pokedex application.
*/

import type { State } from "./state.js";

export async function commandHelp(state: State) {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  for (const cmd of Object.values(state.commands)) {
    console.log(`${cmd.name}: ${cmd.description}`);
  }
  console.log();
}
