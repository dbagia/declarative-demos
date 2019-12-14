import { compareTriplets } from './compareTriplets'

describe('compareTriplets', () => {
    describe('returns the expected output', () => {
        it('returns [1,1] when supplied with [1, 2, 3] and [3, 2, 1]', () => {
            const a = [1, 2, 3]
            const b = [3, 2, 1]
            expect(compareTriplets(a, b)).toEqual([1, 1])
        })
        it('returns [1,2] when supplied with [5, 6, 7] and [4, 16, 10]', () => {
            const a = [5, 6, 7]
            const b = [4, 16, 10]
            const expectedResult = [1, 2]
            expect(compareTriplets(a, b)).toEqual(expectedResult)
        })
    })

})