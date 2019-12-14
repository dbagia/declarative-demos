import { Maybe } from 'crocks'
import { isArray } from 'crocks/predicates'
import { compose } from 'crocks/helpers'

const areParamsArray = (a, b) => {
    return isArray(a) && isArray(b)
}
// subtract :: Number -> Number -> Number
const subtract = x => y =>
    x - y

const isNegative = i => i < 0
const isPositive = i => i > 0

export function compareTriplets(a, b) {
    const partial = a.map(i => subtract(i))
    const subtracted = b.map(((j, index) => partial[index](j)))
    const withoutZero = subtracted.filter(k => k !== 0)
    return [withoutZero.filter(isPositive).length, withoutZero.filter(isNegative).length]
}