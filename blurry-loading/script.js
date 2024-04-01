let bg = document.querySelector('.bg')
let loadText = document.querySelector('.loading-text')

let load = 0;
let filterBlur = 30
let interval = setInterval(blurring, 30)

function blurring(){
    load++;

    if(load > 99){
        clearInterval(interval)
    }
    console.log(load);

    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - (load/100)
    filterBlur -= 0.3;
    bg.style.filter = `blur(${filterBlur}px)`
    
}