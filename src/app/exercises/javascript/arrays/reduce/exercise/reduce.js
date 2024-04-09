export function getTotal(array) {
  return array.reduce((a, c) => a + c)
}

console.log(getTotal([1, 2, 3, 4, 5]))
