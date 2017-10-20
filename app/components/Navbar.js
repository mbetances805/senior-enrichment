import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav>
      <h4><Link to='/students'>Students</Link>&nbsp;&nbsp;&nbsp;
      <Link to='/'>Campuses</Link></h4>
    </nav>
  )
}
