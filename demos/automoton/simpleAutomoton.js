import R from 'ramda'

export const stateRules = (state, command) => {

  if (state === 'q1' && command === '0') return 'q1'

  else if (state === 'q2' && command === '0') return 'q3'

  else return 'q2'
}

export const readCommands = (commands, initialState) => {

  const result = commands.reduce((acc, curr) => {
    return stateRules(acc, curr)
  }, initialState)

  return R.equals(result, 'q2')

}