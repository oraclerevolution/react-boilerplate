import React from 'react'
import styles from '../styles/Header.css'

const Header = () => {
  return (
  <header className="sticky">
    <div className="container"> 
      
      <div className="logo"> <a href="index.html"><img className="img-responsive" src="" alt="" /></a> </div>
      <nav className="navbar ownmenu navbar-expand-lg">
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav">
            <li className="scroll active"><a href="#hme">Home</a></li>
            <li className="scroll"> <a href="#about">About </a> </li>
            <li className="scroll"> <a href="#contact">Contact</a> </li>
            <button className='btn-connexion btn btn-warning'>Connexion</button>
            <button className='btn btn-outline-light'>Inscription</button>
          </ul>
        </div>
      </nav>
    </div>
    <div className="clearfix"></div>
  </header>
  )
}

export default Header
