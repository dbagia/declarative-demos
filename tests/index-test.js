import {assert, expect} from 'chai'
import { initiate } from '../demos/balanced-brackets/balancedbrackets'
import Maybe from '../utils/maybe'

describe('Balanced Brackets', ()=>{
    it('should return a true', ()=>{
        expect(initiate("{{{{}}}}[{(((())))}]").is(true)).to.be.true
    })

    it('should return a null', ()=>{
        expect(initiate("{{{{}}}}[{(((())))}]))))))))").is(null)).to.be.true
    })
})