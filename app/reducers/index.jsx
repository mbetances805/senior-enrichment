import { combineReducers } from 'redux'

/* importing campuses and students reducer functions, which manage the independent parts of the state */
import campuses from '../store/campuses'
import students from '../store/students'
import student from '../store/student'
import newCampus from '../store/newCampusEntry'
import newStudent from '../store/newStudentEntry'

const rootReducer = combineReducers({
  campuses,
  students,
  student,
  newCampus,
  newStudent
})

export default rootReducer

export * from '../store/campuses'
export * from '../store/students'
export * from '../store/student'
export * from '../store/newCampusEntry'
export * from '../store/newStudentEntry'
