import { combineReducers } from 'redux'
import company from './company'
import product from './getProduct'
import admin from './admin'

const combinedreducer= combineReducers({
    company,
    product,
    admin
})

export default combinedreducer;