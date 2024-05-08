const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')

let clickTime = 0
let count = 0

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0){
        clickTime = new Date().getTime()
    } else {
        if(new Date().getTime() - clickTime < 800){
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const yInside = e.clientY - topOffset
    const xInside = e.clientX - leftOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    console.log(xInside, yInside);

    loveMe.appendChild(heart)
    times.innerHTML = ++count

    setTimeout(() => {
        heart.remove()
    }, 1000)
}