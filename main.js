const openMenuEl = document.querySelector('.openMenuEl')
const closeMenuEl = document.querySelector('.closeMenuEl')
const navbar = document.querySelector('.navbar-items')


const navbarToggle = (bool) => {
    if (bool) {
        navbar.style = 'left: 0'
        openMenuEl.style = 'display: none'
        closeMenuEl.style = 'display: block'
        document.body.style = 'overflow: hidden'
    } else {    
    
        navbar.style = 'left: -20em'
        openMenuEl.style = 'display: block'
        closeMenuEl.style = 'display: none'
        document.body.style = 'overflow: visible'
    }
}

openMenuEl.onclick = () => navbarToggle(true)
closeMenuEl.onclick = () => navbarToggle(false)