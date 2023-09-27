
const button = document.querySelector('button')
const hamburgerList = document.querySelector('.menu-list-container')

function toggle() {
    hamburgerList.classList.toggle('hidden')
}

button.addEventListener('click', toggle)

