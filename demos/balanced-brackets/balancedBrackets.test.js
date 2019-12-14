import {
  initiate,
  isLengthEven
} from './balancedbrackets'
import {
  isEven
} from '../../utils/commons'
import Maybe from 'crocks/Maybe'
import chain from 'crocks/pointfree/chain'
import R from 'ramda'
import prop from 'crocks/Maybe/prop'
const {
  Just,
  Nothing
} = Maybe

describe('Balanced Brackets', () => {
  it('should return a true', () => {
    expect(initiate("{{{{}}}}[{(((())))}]").equals(Just(true))).toBe(true)
  })

  it('should return a null', () => {
    expect(initiate("{{{{}}}}[{(((())))}]))))))))").equals(Nothing())).toBe(true)
  })

  it('should check if the input length is even', () => {
    const inputString = "{{{{}}}}[{(((())))}]"
    const result = isLengthEven(Just(inputString))
    expect(result.equals(Just(true))).toBe(true)
  })

  it('should return the correct length', () => {
    const checkLength = R.pipe(Just, chain(prop('length')))
    const result = checkLength('xxxxxx')
    expect(result.equals(Just(6))).toBe(true)
  })
})