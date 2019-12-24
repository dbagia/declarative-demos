import { __, add, append, compose, indexOf, map, sort, transpose, uniq } from 'ramda'

const diff = function (a, b) { return b - a; };
const desc = sort(diff);

function getRank(arr) {
  const [score, LB] = arr
  const rank = compose(add(1), indexOf(score))
  return rank(LB)
}

export function climbingLeaderboard(LB, ALICE) {
  const addScoreToLB = compose(desc, uniq, append(__, LB))
  const leaderBoardsWithAddedScores = map(addScoreToLB)
  const pairScoreWithLB = transpose([ALICE, leaderBoardsWithAddedScores(ALICE)])

  return map(getRank, pairScoreWithLB)

}
