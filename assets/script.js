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

//Test d'un pointer sur les flèches du slider
/*const cursorPointer = document.querySelectorAll('.arrow')
console.log(cursorPointer);
cursorPointer.addEventListener('mouseover', (e)=>{
	e.target.style.cursor = "pointer";
})*/

const arrowLeft = document.querySelector('#banner .arrow_left');
arrowLeft.addEventListener('click', (e) => {
  moveSlide(-1);
  dotList[numero + 1].classList.remove('dot_selected');
})

const arrowRight = document.querySelector('#banner .arrow_right');
arrowRight.addEventListener('click', (e) => {
    console.log('droite');
    moveSlide(1);
    dotList[numero - 1].classList.remove('dot_selected');
})

const dotsSlider = document.querySelector('div .dots');

const pointSlider = `<div class='dot'></div>`;

for (let slide of slides) {
    dotsSlider.insertAdjacentHTML('afterbegin', pointSlider);
}


const dotList = document.querySelectorAll('.dots .dot');
 dotList[0].classList.add('dot_selected');

//Mise en place du caroussel infini
const imgSlide = document.querySelector('.banner-img')
const tagLine = document.querySelector('p');


let numero = 0;
const moveSlide = (sens) => {
    numero = (numero + sens + slides.length) % slides.length;
    updateSlide();
};



const updateSlide = ()=>{
    imgSlide.src ="./assets/images/slideshow/" + slides[numero].image;
    tagLine.innerHTML = slides[numero].tagLine;
    updateDots()
}



//Actualisation des bullet points quand on change d'image
const updateDots = ()=> {
    dotList.forEach((dot, index)=>{
        if (index === numero) {
            dot.classList.add('dot_selected')
        } else {
            dot.classList.remove('dot_selected')
        }
    });
};


//Utilisation des bullet points pour la navigation
dotList.forEach((dot, index)=> {
    dot.addEventListener('click', ()=>{
        numero = index;
        updateSlide()
    })
})
 