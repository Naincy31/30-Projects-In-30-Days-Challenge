const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')
const heartIcon = document.querySelector('body i')

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

heartIcon.addEventListener('click', () => styleHeartIcon())

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
    styleHeartIcon()

    times.innerHTML = ++count

    setTimeout(() => {
        heart.remove()
    }, 1000)
}

function styleHeartIcon(){
    if(heartIcon.classList.contains('fa-solid')){
        heartIcon.classList.remove('fa-solid')
        heartIcon.classList.add('fa-regular')
        heartIcon.style.color = 'black'
    } else {
        heartIcon.classList.add('fa-solid')
        heartIcon.classList.remove('fa-regular')
        heartIcon.style.color = '#f03514'
    }
}