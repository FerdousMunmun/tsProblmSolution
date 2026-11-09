Type Narrowing

Type narrowing refines a broad type into a more specific one inside a code block. Use typeof for primitives:

ts
function show(x: string | number) {

  if (typeof x === "string") return x.toUpperCase();

  return x.toFixed(2);
}


Use instanceof to check class instances:

ts
function info(e: Error | Date) {

  if (e instanceof Date) return e.getFullYear();

  return e.message;
}

Use the in operator to check whether a property exists:

ts

type Cat = { meow(): void };

type Dog = { bark(): void };

function speak(p: Cat | Dog) {

  if ("meow" in p) p.meow();
  
  else p.bark();
}
Conclusion

Use interface for extendable object contracts and type for unions and compositions. Combine them with typeof, instanceof, and in narrowing, and TypeScript will catch many bugs before your code runs.
