import { climbingLeaderboard } from './climbingLeaderboard'

describe('climbingLeaderboard', () => {
    describe('returns the expected output', () => {

        it('returns [4, 3, 1] when Alice\'s scores are [70, 80, 105] and LB is [100, 90, 90, 80]', () => {
            const LB = [100, 90, 90, 80]
            const ALICE = [70, 80, 105]
            expect(climbingLeaderboard(LB, ALICE)).toEqual([4, 3, 1])
        })

        it('returns [6, 4, 2, 1] when Alice\'s scores are [5, 25, 50, 120] and LB is [100, 100, 50, 40, 40, 20, 10]', () => {
            const LB = [100, 100, 50, 40, 40, 20, 10]
            const ALICE = [5, 25, 50, 120]
            expect(climbingLeaderboard(LB, ALICE)).toEqual([6, 4, 2, 1])
        })
    })

})