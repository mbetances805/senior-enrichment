import axios from 'axios'

// ACTION TYPES
const GOT_CAMPUS = 'GOT_CAMPUS'
const GOT_CAMPUSES = 'GOT_CAMPUSES'

// ACTION CREATORS
export function gotCampus (campus) {
  const action = {type: GOT_CAMPUS, campus}
  return action
}

export function gotCampuses (campuses) {
  const action = {type: GOT_CAMPUSES, campuses}
  return action
}

// THUNK CREATORS
export function fetchCampus (campus) {
  return function (dispatch) {
    return axios.get('/api/')
      .then(res => res.data)
      .then(campus => {
        const action = gotCampuses(campus)
        dispatch(action)
      })
  }
}

// REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GOT_CAMPUS:
      return action.campus
    case GOT_CAMPUSES:
      return [...state, action.campuses]

    default:
      return state
  }
}
