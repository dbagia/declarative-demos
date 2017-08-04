import {assert, expect} from 'chai'
import { initiate } from '../demos/balancedbrackets'
import Maybe from '../utils/maybe'

describe('Balanced Brackets', ()=>{
    it('should return a MayBe', ()=>{
        expect(initiate().is(true)).to.be.true
    })
})