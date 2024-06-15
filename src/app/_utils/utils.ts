export function getRandomBoolean() {
  return Boolean(Math.round(Math.random() * 1));
}

export function getRandomNumber(max: number) {
  return Math.round(Math.random() * max);
}
