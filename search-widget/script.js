const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

document.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BODY'){
        search.classList.remove('active')
    }
})

search.addEventListener('submit', (e) => {
    e.preventDefault()
    input.value ? window.open(`https://www.google.com/search?q=${input.value}`, '_blank') : search.classList.remove('active')
})

