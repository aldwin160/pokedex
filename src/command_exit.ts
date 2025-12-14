/*
ABOUT THIS FILE:
defines the "exit" command, which allows users to exit the Pokedex application.
*/

import type { State } from "./state.js";

// Define exit command function
export async function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  state.readline.close();
  process.exit(0);
}
