export function pick<T, U extends keyof T>(date: T, keys: U[]): { [K in U]: T[K] } {
  const tmp: any = {}

  for (const key of keys) {
    tmp[key] = date[key]
  }

  return tmp
}
