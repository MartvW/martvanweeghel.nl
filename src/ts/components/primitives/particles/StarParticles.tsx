import Particles from 'react-tsparticles';

const StarParticles = () => {
    return (
        <Particles
            options={{
                "autoPlay": true,
                "detectRetina": true,
                "duration": 0,
                "fpsLimit": 120,
                "interactivity": {
                    "events": {
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "onHover": {
                            "enable": true,
                            "mode": 'connect'
                        },
                    }
                },
                "particles": {
                    "move": {
                        "angle": {
                            "offset": 0,
                            "value": 90
                        },
                        "attract": {
                            "distance": 50,
                            "enable": true,
                            "rotate": {
                                "x": 5,
                                "y": 5
                            }
                        },
                        "decay": 0,
                        "distance": {},
                        "direction": "none",
                        "drift": 0,
                        "enable": true,
                        "gravity": {
                            "acceleration": 9.81,
                            "enable": true,
                            "inverse": false,
                            "maxSpeed": .5
                        },
                        "path": {
                            "clamp": true,
                            "delay": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0
                            },
                            "enable": false,
                            "options": {}
                        },
                        "outModes": {
                            "default": "out",
                            "bottom": "out",
                            "left": "out",
                            "right": "out",
                            "top": "out"
                        },
                        "random": true,
                        "size": false,
                        "speed": 1,
                        "spin": {
                            "acceleration": 0,
                            "enable": false
                        },
                        "straight": false,
                        "trail": {
                            "enable": false,
                            "length": 10,
                            "fillColor": {
                                "value": "#000000",
                            }
                        },
                        "vibrate": false,
                        "warp": false
                    },
                    "opacity": {
                        "random": {
                            "enable": true,
                            "minimumValue": 0.1
                        },
                        "value": {
                            "min": 0,
                            "max": 1
                        },
                        "animation": {
                            "count": 0,
                            "enable": true,
                            "speed": 1,
                            "sync": false,
                            "destroy": "none",
                            "startValue": "random",
                            "minimumValue": 0
                        }
                    },
                    "size": {
                        "random": {
                            "enable": true,
                            "minimumValue": 5
                        },
                        "value": {
                            "min": 1,
                            "max": 3
                        },
                        "animation": {
                            "count": 0,
                            "enable": false,
                            "speed": 4,
                            "sync": false,
                            "destroy": "none",
                            "startValue": "random",
                            "minimumValue": 0.3
                        }
                    },
                },
                "pauseOnBlur": true,
                "pauseOnOutsideViewport": true,
                "responsive": [],
                "themes": [],
                "zLayers": 1
            }}
        />
    );
};

export default StarParticles;