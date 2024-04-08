const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.faq').classList.toggle('active')
    })
})