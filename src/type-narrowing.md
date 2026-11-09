Type Narrowing

Type narrowing means refining a broad type into a more specific one inside a code block. TypeScript understands checks like typeof, in, and instanceof.

ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // string here
  } else {
    console.log(id.toFixed(2)); // number here
  }
}

For object unions, a discriminant property works well:

ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(s: Shape) {
  return s.kind === "circle" ? Math.PI * s.radius ** 2 : s.side ** 2;
}
Conclusion

Choose interface for extendable object contracts and type for unions and compositions. Combine them with type narrowing, and TypeScript will catch many bugs before your code ever runs.