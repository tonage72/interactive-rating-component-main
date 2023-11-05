const submitButton = document.querySelector(".submit-button")
const ratingCard = document.querySelector(".ratingCard")
const thanksCard = document.querySelector(".thanksCard")
const ratingCircle = document.querySelectorAll(".ratingCircle")
const ratingResult = document.querySelector('span')

submitButton.addEventListener('click', () => {
	ratingCard.style.display = 'none';
	thanksCard.style.display = 'block';
});

ratingCircle.forEach((ratingChosen) => {
	ratingChosen.addEventListener('click', () => {
	ratingResult.innerHTML = ratingChosen.innerHTML;
	})
});