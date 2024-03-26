export const makeCounter = () => {
  let count = 0
  return () => `(re-render count: ${++count})`
}
