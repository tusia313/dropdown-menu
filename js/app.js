
const button = document.querySelector('.menu')
const hamburgerList = document.querySelector('.menu-list-container')
button.addEventListener('click', () => {
    hamburgerList.classList.toggle('hidden')
})

