import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        {/* <p className="logo" >Area do aluno</p> */}
        <p className="logo">GESTÃO ESCOLAR</p>
      </Link>
    </div>
  )
}

export default Header