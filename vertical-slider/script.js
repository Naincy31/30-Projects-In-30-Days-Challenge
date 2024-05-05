const slider = document.querySelector('.slider-container')
const leftSlider = document.querySelector('.left-container')
const rightSlider = document.querySelector('.right-container')
const upBtn = document.querySelector('.up')
const downBtn = document.querySelector('.down')
const slidesLength = rightSlider.querySelectorAll('div').length

let activeSlideIndex = 0

leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = slider.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex  = 0
        }
    } else if( direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex  = slidesLength - 1
        }
    }

    rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
