# Climbing the leaderboard

## Problem

Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
For example, the four players on the leaderboard have high scores of 100, 90, 90, and 80. Those players will have ranks 1, 2, 2 and 3, respectively. If Alice's scores are 70, 80 and 105, her rankings after each game are 4th, 3rd  and 1st.

## Function Description

Complete the climbingLeaderboard function. It should return an integer array where each element represents Alice's rank after the game.

climbingLeaderboard has the following parameter(s):

LB: an array of integers that represent leaderboard scores
ALICE: an array of integers that represent Alice's scores

## The Solution

What we care about here is simply the position of Alice's score in the Leaderboard for each game Alice plays. In order to find that, we need to have Alice's score placed in the Leaderboard at the right position. Also, since the board is not sorted and there can be multiple players with the same score, we need to remove duplicates and sort the board in descending order. 

Here are the steps to the final solution:
1. Add Alice's score to Leaderboard. We need a new copy of Leaderboard for each game Alice plays. And the addition function itself is composed of appending score to Leaderboard, uniquifying the list and sorting it in descending order. 

Because we will have one Leaderboard copy for each score of Alice, we will end up with an array of Leaderboards like so:
```
For example, if Leaderboard is [100, 90, 90, 80] and Alice's scores are [70, 80, 105], our first step will yield the following array
[
    [100, 90, 80, 70],
    [100, 90, 80],
    [105, 100, 90, 80]
]
```
2. Now in order to find the position of Alice's score from the above data structure, I decided to pair up Alice's score with each value of Leaderboard so after pairing we have:

```
[
    [70, [100, 90, 80, 70]],
    [80, [100, 90, 80]],
    [105, [105, 100, 90, 80]]
]
```
3. The final step is just to find the index position of the first element (score) in its corresponding array (leaderboard) and adding 1 to it.

