const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*const cursorPointer = document.querySelectorAll('.arrow')
console.log(cursorPointer);
cursorPointer.addEventListener('mouseover', (e)=>{
	e.target.style.cursor = "pointer";
})*/

const arrowLeft = document.querySelector('#banner .arrow_left');
arrowLeft.addEventListener('click', (e) => {
  //  console.log('gauche');
})

const arrowRight = document.querySelector('#banner .arrow_right');
arrowRight.addEventListener('click', (e) => {
   // console.log('droite');
})