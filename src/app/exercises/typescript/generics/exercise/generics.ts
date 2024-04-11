// // @ts-nocheck

// ej 1
function identity<T>(arg: T): T {
  return arg
}

// ej 2
class Generic<R, T = string> {
  foo?: T
  bar(x: T): R {
    return x as unknown as R
  }
}
