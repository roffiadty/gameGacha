// declaring element
const username = document.getElementById('username')
const registerForm = document.getElementById('registerForm')
const logoutForm = document.getElementById('logoutForm')
const startSection = document.getElementById('start')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')
const rewardImage = document.getElementById('imgReward')
const idPlayer = document.getElementById('idPlayer')
const started = document.getElementById('start')
const rewarded = document.getElementById('reward')
const toped = document.getElementById('top')
const navStart = document.getElementById('navStart')
const navReward = document.getElementById('navReward')

const player = new Player()
let default_option = ['😍', '🤣', '😱']
box1.textContent = default_option[0]
box2.textContent = default_option[1]
box3.textContent = default_option[2]

function dice() {
	let gacha = []
	for (let i = 0; i < default_option.length; i++) {
		const roll = default_option[~~(Math.random() * default_option.length)]
		gacha.push(roll)
	}
	return gacha
}

function reward() {
	fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
		.then((x) => x.json()).then((result) => {
			
			// set nama di API untuk reward
			let text = document.createElement('h1')
			text.textContent = result.name

			// set gambar di API untuk reward
			let img = new Image(200, 200)
			img.src = result.image_link

			// set rangka/element di API untuk reward
			rewardImage.appendChild(text)
			rewardImage.appendChild(img)
		})
}

function winner() {
	if (box1.textContent == box2.textContent && box1.textContent == box3.textContent) {
		reward()
		location.href = '#reward'
	} else {
		alert('HAHAHA Gak Hoki lo, coba lagi!')
		location.href = '#start'
	}
}

function start() {
	const rolling = setInterval(function () {
		const result = dice()
		box1.textContent = result[0]
		box2.textContent = result[1]
		box3.textContent = result[2]
	}, 80)

	setTimeout(function () {
		clearInterval(rolling)
		winner()
	}, 2000)
}

onload = function () {
	const token = sessionStorage.getItem('token')
	if (token && token != null) {
		registerForm.style.display = 'none'
		logoutForm.style.display = 'block'
	} else {
		registerForm.style.display = 'block'
		logoutForm.style.display = 'none'
		started.style.display = 'none'
		started.style.display = 'none'
		rewarded.style.display = 'none'
		startButton.style.display = 'none'
		idPlayer.style.display = 'none'
		toped.style.display = 'none'
		navStart.style.display = 'none'
		navReward.style.display = 'none'
	}
}

function register() {
	// call setter
	player.username = username.value
	player.register

	// view on HTML
	const id = document.createElement('p')
	id.textContent = username.value
	idPlayer.appendChild(id)
}

function logout() {
	player.logout
}
