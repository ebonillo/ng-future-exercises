function fizzBuzz(number) {
  return Array.from({ length: number })
    .map((x, i) => i + 1)
    .map(i => (i % 15 == 0 ? 'fizzbuzz' : i % 3 == 0 ? 'fizz' : i % 5 == 0 ? 'buzz' : i))
}

console.log(fizzBuzz(15))
