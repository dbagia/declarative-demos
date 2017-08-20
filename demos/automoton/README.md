# Design a Simple Automaton (Finite State Machine)

Create a finite automaton that has three states. Finite automatons are the same as finite state machines for our purposes.

Our simple automaton, accepts the language of A, defined as {0, 1} and should have three states,
q1, q2, and q3.

q1 is our start state. We begin reading commands from here.
q2 is our accept state. We return true if this is our last state.

q1 moves to q2 when given a 1, and stays at q1 when given a 0.
q2 moves to q3 when given a 0, and stays at q2 when given a 1.
q3 moves to q2 when given a 0 or 1.

Our automaton should return whether we end in our accepted state, or not (true/false.)

## The solution

The solution has two functions

1. stateRules: This is a pure function which accepts two parameters, state and command(0 or 1). Based on the rules described above, it will return either q1, q2 or q3.

2. readCommands: This function accepts an array of commands and an initial state. It uses stateRules function to determine the next state for each of it's array values. We are using array.reduce() to determine the next state. Since the function should return true if the end result is 'q2' and false otherwise, we use Ramda's R.equals to do the comparison.

## Running the tests

`npm test -- demos/automoton/tests.js`