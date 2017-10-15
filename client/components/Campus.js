import React, { Component } from 'react'

export default function Campus (props) {
  const campus = props.campus

  return (
    <li className='campus'>
      <div className='campus-left'>
        <img className='media-object' src={campus.imageUrl} alt='image' />
        <a href='#'></a>
      </div>
      <div className='media-body'>
        <h4 className='media-heading'>{campus.name}</h4>
      </div>
    </li>
  )
}
