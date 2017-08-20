import {assert, expect} from 'chai'
import { initiate, isLengthEven } from '../demos/balanced-brackets/balancedbrackets'
import { stateRules, readCommands } from '../demos/automoton/simple_automoton'
import { getLength, isEven } from '../utils/commons'
import Maybe from '../utils/maybe'
import { map } from '../utils/maybe'
import R from 'ramda'

//const lengthOf = R.pipe(R.identity, map(getLength))

describe('Automoton', ()=>{

	describe('State Rules', ()=> {

		it('returns q1 for command 0 and state q1', ()=>{
			expect(stateRules('q1','0')).to.equal('q1')
		})

		it('returns q3 for command 0 and state q2', ()=>{
			expect(stateRules('q2','0')).to.equal('q3')
		})

		it('returns q2 for command 1 and state q2', ()=>{
			expect(stateRules('q2','1')).to.equal('q2')
		})

		it('returns q2 for either command 0 or 1 and state q3', ()=>{
			expect(stateRules('q3','0')).to.equal('q2')
			expect(stateRules('q3','1')).to.equal('q2')
		})

	})

	describe('Read Commands', ()=>{

		it('returns false for commands  1,0', ()=>{
			expect(readCommands(['1','0'],'q1')).to.be.false
		})

		it('returns true for commands  1,0,1,1,0,1', ()=>{
			expect(readCommands(['1','0','1','1','0','1'],'q1')).to.be.true
		})
	})
	
})
describe('Balanced Brackets', ()=>{
    it('should return a true', ()=>{

        expect(initiate("{{{{}}}}[{(((())))}]").is(true)).to.be.true
        
    })

    it('should return a null', ()=>{

        expect(initiate("{{{{}}}}[{(((())))}]))))))))").is(null)).to.be.true

    })

    it('should check if the input length is even', ()=>{
        
        const inputString = "{{{{}}}}[{(((())))}]"
        
        const result = isLengthEven(Maybe.of(inputString))

        expect(result.is(true)).to.be.true
        
    })

    it('should return the correct length', ()=>{

        const checkLength = R.pipe(Maybe.of, map(getLength))

        const result = checkLength('xxxxxx')
        
        expect(result.is(6)).to.be.true
    })

})