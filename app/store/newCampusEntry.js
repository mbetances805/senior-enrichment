// ACTION TYPES
const WRITE_CAMPUS = 'WRITE_CAMPUS'

// ACTION CREATORS
export function writeCampus (name) {
  const action = { type: WRITE_CAMPUS, name }
  return action
}

// REDUCERS
export default function reducer (state = '', action) {
  switch (action.type) {
    case WRITE_CAMPUS:
      return action.name

    default:
      return state
  }
}
