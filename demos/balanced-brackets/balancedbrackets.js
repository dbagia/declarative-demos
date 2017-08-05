import R from 'ramda'
import Maybe from '../../utils/maybe'
import { map } from '../../utils/maybe'
import { getLength, isEven } from '../../utils/commons'
const pipe = R.pipe
const id = R.identity

const lengthOf = pipe(id, map(getLength))

//isLengthEven::Maybe->Maybe
export const isLengthEven = pipe(map(getLength), map(isEven))

//removeAdjacentBrackets::Maybe->Maybe
export const removeAdjacentBrackets = (braces) => {
    
    const regex = /{}|\[\]|\(\)/g
    const bracesLen = lengthOf(braces) //length(braces)

    if(braces.is(true)) {
        return Maybe.of(true)
    } else if(bracesLen.isNothing() || braces.isNothing()){
            return Maybe.of(null)
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
    return isLengthEven(o).is(true)?removeAdjacentBrackets(o):Maybe.of(null)
}

export const initiate = (input) => {
    let v = checkBraces(Maybe.of(input)) //"{{{{}}}}[{(((())))}]"
    console.log('v', v)
    return v
}