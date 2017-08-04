import R from 'ramda'
import Maybe from '../utils/maybe'
import { map, isEven } from '../utils/maybe'

const pipe = R.pipe

const length = (braces) => {
    return braces.map(function(v){
        return v.length
    })    
}

export const removeAdjacentBrackets = (braces) => {
    const regex = /{}|\[\]|\(\)/g
    const bracesLen = length(braces)

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

const isLengthEven = pipe(length, map(isEven))

const checkBraces = (o) => {
    return isLengthEven(o)?removeAdjacentBrackets(o):Maybe.of(null)
}

export const initiate = () => {
    let v = checkBraces(Maybe.of("{{{{}}}}[{(((())))}]"))
    console.log('v', v)
    return v
}