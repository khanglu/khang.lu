import React, { PureComponent } from "react";
import Particles from "react-particles-js";
import { particleWebConfig } from "./particle-config";

class ParticlesWrapper extends PureComponent {
  render() {
    return (
      <Particles
        style={{ position: "absolute" }}
        // Get config string, replace default color with theme color, then parse to object
        params={JSON.parse(JSON.stringify(particleWebConfig).replace(/#000/g, this.props.color))}
      />
    );
  }
}

export default ParticlesWrapper;
