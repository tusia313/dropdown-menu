
const button = document.querySelector('#button')
const hamburgerList = document.querySelector('.nav-links-container')

function toggle() {
    hamburgerList.classList.toggle('hidden')
}

button.addEventListener('click', toggle)

