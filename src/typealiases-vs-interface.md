Type Aliases vs Interfaces and Type Narrowing in TypeScript
Introduction

TypeScript gives us two ways to describe object shapes: type aliases and interface. Knowing when to use each, and how to narrow types safely, makes your code cleaner and less error-prone.

Type Alias vs Interface

Both can describe an object, but they differ in flexibility. An interface can be extended and merged, while a type can represent unions, primitives, and tuples.

ts
interface User {
  name: string;
}

interface User {
  age: number; // declaration merging works
}


type ID = string | number; // only type can do this

type Admin = User & { role: string };

Use interface for object shapes and public APIs. Use type for unions and complex combinations.
