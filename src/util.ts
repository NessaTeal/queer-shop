export function enumKeys<
  O extends Record<string, any>,
  K extends keyof O = keyof O,
>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}

export function enumToArray<O extends Record<string, any>>(
  enumeration: O,
): O[keyof O][] {
  return enumKeys(enumeration).map((key) => enumeration[key]);
}
