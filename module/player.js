class Player {
	constructor() {
		this._username = ''
	}

	generateToken() {
		const random = ~~[Math.random() * 10000]
		const token = this.username + random.toString()
		return token
	}

	// getter method
	get username() {
		return this._username
	}

	// setter method
	set username(_username) {
		return (this._username = _username)
	}


	get register() {
		sessionStorage.setItem('token', this.generateToken())
		registerForm.style.display = 'none'
		logoutForm.style.display = 'block'
		box1.style.display = 'block'
		box2.style.display = 'block'
		box3.style.display = 'block'
		startButton.style.display = 'block'
		idPlayer.style.display = 'block'
		started.style.display = 'block'
		started.style.display = 'block'
		rewarded.style.display = 'block'
		toped.style.display = 'block'
		navStart.style.display = 'block'
		navReward.style.display = 'block'
		setTimeout(function () {
			location.href = '#start'
		}, 500)
	}

	get logout() {
		sessionStorage.removeItem('token')
		location.reload()
	}
}
