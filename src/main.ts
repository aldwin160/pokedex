/*
ABOUT THIS FILE:
This is the main entry point for the Pokedex application. It initializes the application state and starts the REPL (Read-Eval-Print Loop) for user interaction.
*/

import { startREPL } from "./repl";
import { initState } from "./state";

async function main() {
  const state = initState(1000 * 60 * 5); // 5 minutes
  await startREPL(state);
}

main();
