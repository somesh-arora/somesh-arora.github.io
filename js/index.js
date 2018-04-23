/* ---- particles.js config ---- */

particlesJS("aa_particles", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#008080"
    },  
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0.8,
        "color": "#008080"
      },	
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {	
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 50,
        "size_min": 0.1,	
        "sync": false
      } 
    },
    "line_linked": {	
      "enable": true,
      "distance": 50,
      "color": "#008080",
      "opacity": 0.8,
      "width": 0.8
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",	
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 500,
        "line_linked": {
          "opacity": 0.6
        }
      },
      "bubble": {
        "distance": 100,
        "size": 30,
        "duration": 3,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.5
      },
      "push": {
        "particles_nb": 1
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);