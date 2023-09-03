const menuBurger = document.querySelector('[data-navegation="menu-burger"]')
const barNavegation = document.querySelector('[data-navegation="navegation"]')

let navegationOpen = false

if (window.innerWidth >= 840) {
    barNavegation.style.marginTop = 0    
} else {
    barNavegation.style.marginTop = '-100vh'
}

const openMenu = () => {
    if (!navegationOpen) {
        barNavegation.style.marginTop = 0
        barNavegation.style.transition = '500ms'
        menuBurger.style.position = 'relative'
        navegationOpen = true
        return
    }

    barNavegation.style.marginTop = '-100vh'
    navegationOpen = false
}

menuBurger.addEventListener('click', openMenu)