particlesJS('particles-js', {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 500
			}
		},
		color: {
			value: '#FFD700'
		},
		shape: {
			type: 'triangle',
			stroke: {
				width: 0,
				color: '#f05e1b '
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: 'https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png',
				width: 100,
				height: 100
			}
		},
		
		opacity: {
			value: 0.2,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 4,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 10,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#808080',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 5,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: true,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			},
			onclick: {
				enable: true,
				mode: 'push'
			}
		},
		modes: {
			'repulse' : {
				distance: 75,
				duration: 0.5
			},
			'push' : {
				particles_nb: 3
			}
		}
	},
	retina_detect: true
});

const allElements = document.querySelectorAll('.animated-text');

if (allElements.length > 0) {
	allElements.forEach((element) => {
		const txtElement = element,
			wordsList = txtElement.getAttribute('data-words'),
			words = wordsList.split(', ');

		let wordsCount = 0;

		entry();

		function entry() {
			if (wordsCount < words.length) {
				let word = words[wordsCount],
					txtArr = word.split(''),
					count = 0;

				txtElement.textContent = '';
        
				txtArr.forEach((letter) => {
					let _letter = letter === ' ' ? '&nbsp;' : letter;
					txtElement.innerHTML += `<span>${_letter}</span>`;
				});

				let spans = txtElement.childNodes;
				const letterInterval = setInterval(activeLetter, 70);

				function activeLetter() {
					spans[count].classList.add('active');
					count++;

					if (count === spans.length) {
						clearInterval(letterInterval);
						setTimeout(() => {
							eraseText();
						}, 600);
					}
				}

				function eraseText() {
					let removeInterval = setInterval(removeLetter, 40);
					count--;

					function removeLetter() {
						spans[count].classList.remove('active');
						count--;

						if (count === -1) {
							clearInterval(removeInterval);
							wordsCount++;
							entry();
						}
					}
				}
			} else {
				wordsCount = 0;
				entry();
			}
		}
	});
}

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar'
})

var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})


let theta = Math.PI / 4.0;
  let new_theta = 0.0;
  let new_x = 0.0;
  let new_y = 0.0;
  let wheel_radius = 250.00;
  let wheel_theta = 0.0;

  const cards = document.querySelectorAll('.socials');

  const wheel = document.querySelector('.wheel');

  const center = {
    
       x: parseFloat(getComputedStyle(socials[0]).left),
       y: parseFloat(getComputedStyle(socials[0]).top)
}

socials.forEach((socials, index) => {
          
  new_theta = theta * index;
  
  new_x = (Math.cos(new_theta) * wheel_radius);
  new_y = (-1.0 * Math.sin(new_theta) * wheel_radius);

  socials.style.left = `${center.x + new_x}px`;
  socials.style.top = `${center.y + new_y}px`;
});

document.addEventListener('nav', event => {
  
  let scroll_speed = event.deltaY * 0.002;
  
  wheel_theta = wheel_theta + scroll_speed;
  
  wheel.style.transform = `translate(-50%, -50%) rotate(${wheel_theta * (180/Math.PI)}deg)`;
  
});


const rippleElements = document.getElementsByClassName("coming-soon");

for (let i = 0; i < rippleElements.length; i++) {
  
  const element = rippleElements[i];

 
  element.addEventListener("mousemove", (e) => {
    
    const rect = element.getBoundingClientRect();
    
    const x = ((e.clientX - rect.left) / element.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / element.clientHeight) * 100;

    element.style.background = `radial-gradient(circle closest-corner 
    at ${x}% ${y}%, var(--ripple-color), var(--bg-color))`;
  });

  
  element.addEventListener("mouseleave", (event) => {
    
    element.style.removeProperty("background");
  });
}