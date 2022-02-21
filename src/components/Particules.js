import React from 'react'
import styles from '../styles/Particules.css'
import Particles from 'react-tsparticles'
import particlesConfig from '../assets/particles.json'

const Particules = () => {
  return (
  <> 
    <Particles params={particlesConfig} id="tsparticles" />
    <div className="position-center-center">
      <div className="container text-center">
        <h1>Build a new kind of Decentralized </h1>
      </div>
    </div>
  </>
  )
}

export default Particules
