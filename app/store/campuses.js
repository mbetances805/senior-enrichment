import axios from 'axios'

// ACTION TYPES
const GOT_CAMPUSES = 'GOT_CAMPUSES'
const GOT_CAMPUS = 'GOT_CAMPUS'
const DELETED_CAMPUS = 'DELETED_CAMPUS'
const UPDATED_CAMPUS = 'UPDATED_CAMPUS'

// ACTION CREATORS
export function gotCampuses (campuses) {
  const action = { type: GOT_CAMPUSES, campuses }
  return action
}

export function gotCampus (name) {
  const action = {type: GOT_CAMPUS, name}
  return action
}

export function deletedCampus (id) {
  const action = { type: DELETED_CAMPUS, id }
  return action
}

export function updatedCampus (id) {
  const action = { type: UPDATED_CAMPUS, id }
  return action
}

// THUNK CREATORS
export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api')
      .then(res => {
        dispatch(gotCampuses(res.data))
      })
      .catch(err => console.error('Issue fetching campus array', err))
  }
}

export function postCampus (name) {
  return function thunk (dispatch) {
    return axios.post('/api', name)
    .then(res => dispatch(gotCampus(res.data)))
  }
}

export function removeCampus (id) {
  return function thunk (dispatch) {
    return axios.delete(`/api/${id}`)
    .then(res => (deletedCampus(res.data)))
    .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err))
  }
}

export function modifyCampus (id, name) {
  console.log(id, name)
  return function thunk (dispatch) {
    return axios.put(`/api/${id}`, {name})
    .then(res => (updatedCampus(res.data)))
    .catch(err => console.error(`Updating campus: ${id} unsuccessful`, err))
  }
}

// REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses

    case GOT_CAMPUS:
      return [...state, action.name]

    case DELETED_CAMPUS:
      return action.id

    case UPDATED_CAMPUS:
      return action.id

    default:
      return state
  }
}
