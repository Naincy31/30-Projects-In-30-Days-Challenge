const fill = document.querySelector('.fill')
const cards = document.querySelectorAll('.card')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

cards.forEach(card => {
    card.addEventListener('dragover', dragOver)
    card.addEventListener('dragenter', dragEnter)
    card.addEventListener('dragleave', dragLeave)
    card.addEventListener('drop', dragDrop)
})

function dragStart(){
    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible'
    }, 0)
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered'
}

function dragLeave(){
    this.className += 'card'
}

function dragDrop(){
    this.className = 'card';
    this.append(fill)
}