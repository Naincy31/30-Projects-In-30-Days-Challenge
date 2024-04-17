const body = document.body
const slides = document.querySelectorAll('.slide')
const arrowLeft = document.getElementById('left')
const arrowRight = document.getElementById('right')

let activeSlide = 0;

arrowRight.addEventListener('click', () => {
    if(activeSlide < slides.length - 1){
        activeSlide++;
    } else {
        activeSlide = 0
    }
    setActiveSlide()
    setBgToBody()
})

setBgToBody()
setActiveSlide()

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}

arrowLeft.addEventListener('click', () => {
    if(activeSlide == 0){
        activeSlide = slides.length - 1
    } else {
        activeSlide--;
    }
    setActiveSlide()
    setBgToBody()
})




