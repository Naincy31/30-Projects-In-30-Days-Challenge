const button = document.querySelector('.toggle')
const leftNav = document.querySelector('.left-nav')

button.addEventListener('click', () => {
    leftNav.classList.toggle('active')
})