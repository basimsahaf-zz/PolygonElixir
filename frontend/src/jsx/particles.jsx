import React from 'react';
import {Particles} from 'react-particles-js';

export const RenderParticles = () => {
    return (
      <Particles className="particles"
              params={{
                particles: {
                  number: {
                    value: 20,
                    density: {
                      enable: false,
                      value_area: 800
                    },
                    color: {
                      value: "#e74c3c"
                    },
                    move: {
                        enable: !0,
                        speed: 3,
                        direction: "none",
                        random: !1,
                        straight: !1,
                        out_mode: "bounce",
                        bounce: !0,
                        attract: {
                            enable: 1,
                            rotateX: 3e3,
                            rotateY: 3e3
                        }
                    }
                  },
                  interactivity: {
                  detect_on: "canvas",
                  events: {
                      onhover: {
                          enable: !0,
                          mode: "grab"
                      },
                      onclick: {
                          enable: !1,
                          mode: "repulse"
                      },
                      resize: !0
                  },
                modes: {
                        grab: {
                            distance: 180,
                            line_linked: {
                                opacity: .35
                            }
                        },
                        bubble: {
                            distance: 200,
                            size: 80,
                            duration: .4
                        },
                        repulse: {
                            distance: 100,
                            duration: 5
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                  },
                  shape: {
                    type: ["circle", "triangle"],
                    stroke: {
                      width: 2,
                      color: "#e74c3c"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                }
              }}}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "15%",
                height: "100%",
                zIndex: 0
              }}
            />
    )
  }