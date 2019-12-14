// subtract :: Number -> Number -> Number
const subtract = x => y =>
    x - y

const isNegative = i => i < 0
const isPositive = i => i > 0

// compareTriplets :: [Number] -> [Number] -> [Number]
export function compareTriplets(a, b) {
    const partial = a.map(i => subtract(i))
    const subtracted = b.map(((j, index) => partial[index](j)))
    const withoutZero = subtracted.filter(k => k !== 0)
    return [withoutZero.filter(isPositive).length, withoutZero.filter(isNegative).length]
}