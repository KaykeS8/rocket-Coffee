const btn = document.querySelector('[data-menu="menu-open"]')
const list = document.querySelector('[data-menu="list"]')
const img = document.querySelector('.burger')



function oneClick() {
    list.classList.toggle('open')
    img.classList.toggle('close')
}

btn.addEventListener('click', oneClick)