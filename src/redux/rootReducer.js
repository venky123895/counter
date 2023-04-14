import {combineReducers} from 'redux'
import { increamentReducer } from './reducer'
export const counterreducer=combineReducers({
increamentReducer:increamentReducer
})