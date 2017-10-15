import {createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

/* importing campuses and students reducer functions, which manage the independent parts of the state*/
import campuses from './campuses'
import students from './students'

/* turning an object whose values are different reducing functions into a single reducing function to pass to createStore */
/* invokes every reducer and constructs a state object with the same shape */
const reducer = combineReducers({
  campuses,
  students
});

/* holds the complete state tree of the app
  initial state is set to the reducer object
  contains store enhancr with thunkMiddleware */
let store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger())

export default store;

export * from './campuses'
export * from './students'
