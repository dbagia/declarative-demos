import { stateRules, readCommands } from './simpleAutomoton'

describe('Automoton', () => {

	describe('State Rules', () => {

		it('returns q1 for command 0 and state q1', () => {
			expect(stateRules('q1', '0')).toEqual('q1')
		})

		it('returns q3 for command 0 and state q2', () => {
			expect(stateRules('q2', '0')).toEqual('q3')
		})

		it('returns q2 for command 1 and state q2', () => {
			expect(stateRules('q2', '1')).toEqual('q2')
		})

		it('returns q2 for either command 0 or 1 and state q3', () => {
			expect(stateRules('q3', '0')).toEqual('q2')
			expect(stateRules('q3', '1')).toEqual('q2')
		})

	})

	describe('Read Commands', () => {

		it('returns false for commands  1,0', () => {
			expect(readCommands(['1', '0'], 'q1')).toBe(false)
		})

		it('returns true for commands  1,0,1,1,0,1', () => {
			expect(readCommands(['1', '0', '1', '1', '0', '1'], 'q1')).toBe(true)
		})
	})

})