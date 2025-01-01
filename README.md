# TypeScript Type Coercion Runtime Error

This repository demonstrates a common pitfall in TypeScript: type safety during compilation doesn't always guarantee runtime type safety.  While TypeScript's type system catches many errors, it can't prevent all runtime issues arising from type coercion.

The `bug.ts` file contains code where the `add` function, which expects two numbers, is called with a number and a string. TypeScript doesn't immediately throw an error during compilation. However, this leads to a runtime error because JavaScript performs string concatenation instead of numerical addition.

The `bugSolution.ts` file shows how to improve this to avoid runtime errors.