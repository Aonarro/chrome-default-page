//#1E1D1E
//#414041
//#AFAEAF
const years = document.getElementById('years')
const seconds = document.getElementById('seconds')
const milliSeconds = document.getElementById('milli-seconds')

var birthDate = new Date(2004, 2, 24)

function updateAgeDetails() {
	const currentDate = new Date()

	const ageInSeconds = Math.floor((currentDate - birthDate) / 1000)
	const ageMilliseconds = (currentDate - birthDate) % 1000

	const ageYears = Math.floor(ageInSeconds / (365.25 * 24 * 60 * 60))
	const remainingSeconds = ageInSeconds % (365.25 * 24 * 60 * 60)

	const formattedMilliseconds = (
		'00' + (ageMilliseconds < 100 ? ageMilliseconds : ageMilliseconds % 100)
	).slice(-2)

	years.innerText = ageYears
	seconds.innerText = `.${remainingSeconds}`
	milliSeconds.innerText = formattedMilliseconds
}

setInterval(updateAgeDetails, 200)

updateAgeDetails()
