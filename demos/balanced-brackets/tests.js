import {assert, expect} from 'chai'
import { initiate, isLengthEven } from './balancedbrackets'
import { getLength, isEven } from '../../utils/commons'
import Maybe from '../../utils/maybe'
import { map } from '../../utils/maybe'
import R from 'ramda'

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