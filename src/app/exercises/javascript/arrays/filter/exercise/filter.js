export function getEvenNumber(numbers) {
  return numbers.filter(x => x % 2 === 0)
}

console.log(getEvenNumber([1, 2, 3, 4, 5, 6]))
