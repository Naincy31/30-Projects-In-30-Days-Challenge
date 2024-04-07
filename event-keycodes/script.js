const container = document.querySelector('.container')

document.addEventListener('keydown', (e) => {
    container.innerHTML = `
    <div class="key">
        ${e.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>
    `
    console.log(e.key, e.code);
})