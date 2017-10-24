import React from 'react'
import { connect } from 'react-redux'
import StudentListbyCampus from './StudentListbyCampus'
import { removeCampus, modifyCampus } from '../store/campuses'
import UpdateCampusEntry from './UpdateCampusEntry'

function Campus (props) {
  const { campus } = props
  const { campusId } = props

  return (
    <div>
      {campus.name}
      <StudentListbyCampus campusId={campusId} students={campus.students} />
        &nbsp;
       <button
         className='btn btn-default btn-xs'
         onClick={removeCampus(campusId)}>
         <span className="glyphicon glyphicon-remove" /> Delete Campus
       </button>
      <UpdateCampusEntry campusId={campusId} campus={campus} />
      <button
        className='btn btn-default btn-xs'
        onClick={modifyCampus(campus)}>
       <span className="glyphicon glyphicon-remove" /> Modify Campus
     </button>
    </div>
  )
}

const mapState = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId)
  return {
    campus: state.campuses.find(campus => campus.id === campusId) || {name: '', students:[]},
    campusId
  }
}

const mapDispatch = {removeCampus, modifyCampus}

export default connect(mapState, mapDispatch)(Campus)
