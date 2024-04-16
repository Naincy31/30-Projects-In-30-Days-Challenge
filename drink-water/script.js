const smallContainers = document.querySelectorAll('.small-water-container')
const bigContainer = document.querySelector('.big-water-container')
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')

updateBigContainer()

smallContainers.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
    if(smallContainers[idx].classList.contains('full') && !smallContainers[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallContainers.forEach((cup, idx2) => {
        if (idx2 <= idx){
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigContainer()
}

function updateBigContainer(){
    
}