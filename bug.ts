function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // This will compile, but runtime error will occur
console.log(result);