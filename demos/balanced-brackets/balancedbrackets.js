import R from 'ramda'
import Maybe from 'crocks/Maybe'
import map from 'crocks/pointfree/map'
import chain from 'crocks/pointfree/chain'
import { getLength, isEven, logger } from '../../utils/commons'
import prop from 'crocks/Maybe/prop'
const { Just, Nothing } = Maybe
const pipe = R.pipe
const id = R.identity
const lengthOf = pipe(id, chain(prop('length')))

//isLengthEven::Maybe->Maybe
export const isLengthEven = pipe(chain(prop('length')), map(isEven))

//removeAdjacentBrackets::Maybe->Maybe
export const removeAdjacentBrackets = (braces) => {
    
    const regex = /{}|\[\]|\(\)/g
    const bracesLen = lengthOf(braces) //length(braces)

    if(braces.equals(Just(true))) {
        return Just(true)
    } else if(bracesLen.equals(Nothing()) || braces.equals(Nothing())){
            return Nothing()
    }
     
    return removeAdjacentBrackets(
            braces
            .map((v)=>{
                let reduced = v.replace(regex,'') 
                return reduced === '' ? true : reduced === v ? null : reduced
            })
    )
}

const checkBraces = (o) => {    
    return isLengthEven(o).equals(Just(true))?removeAdjacentBrackets(o):Nothing()
}

export const initiate = (input) => {
    let v = checkBraces(Just(input)) //"{{{{}}}}[{(((())))}]"    
    return v
}