import R from 'ramda'

let myMap = new Map()

myMap.set(1,[])
myMap.set(2,[])
myMap.set(3,[])

export const getMapByKey = (key) => {
	return myMap.get(key)
}