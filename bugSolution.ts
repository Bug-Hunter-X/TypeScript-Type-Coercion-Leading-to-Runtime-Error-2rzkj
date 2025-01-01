function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(1, 2); // Correct usage
console.log(result1); // Output: 3

try {
  let result2 = add(1, "2");
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}

//Alternative solution using type guards
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result3 = addSafe(1,2);
console.log(result3);

try {
  let result4 = addSafe(1, "2");
  console.log(result4);
} catch(error) {
  console.error(error.message)
}