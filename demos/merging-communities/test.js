import { getMapByKey } from './mergingCommunities'
import {assert, expect} from 'chai'

describe('Testing Map', () => {

	it('gets key 1', done => {

		expect(getMapByKey(1).length).to.equal(0)
		done()
	})

	it('verifies the type of value is array', done => {
		
		expect(getMapByKey(1) instanceof Array).to.be.true
		done()
	})

})