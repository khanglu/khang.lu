import React from 'react'
import Particles from 'react-particles-js'
import { particleWebConfig } from './particle-config'

const ParticlesWrapper = ({ color }) => (
  <Particles
    style={{position: 'absolute'}}
    // Get config string, replace default color with theme color, then parse to object
    params={JSON.parse(particleWebConfig.replace(/#ffffff/g, color))}
  />
)

export default ParticlesWrapper