import { pipe, take, zipWith } from 'ramda'
// subtract :: Number -> Number -> Number
const subtract = (x, y) =>
    x - y

const isNegative = i => i < 0
const isPositive = i => i > 0

// filterAndGetLength :: (a -> bool) -> [] -> Number
const filterAndGetLength = (f, list) => list.filter(f).length

const subtractBFromA = zipWith(subtract)
const takeOnlyPositivesAndNegatives = x => x.filter(k => k !== 0)
const compare = pipe(subtractBFromA, take(3), takeOnlyPositivesAndNegatives)

// compareTriplets :: [Number] -> [Number] -> [Number]
export function compareTriplets(a, b) {
    const comparison = compare(a, b)
    return [filterAndGetLength(isPositive, comparison), filterAndGetLength(isNegative, comparison)]
}