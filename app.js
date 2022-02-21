const hamburger = document.querySelector('.hamburger-menu');
const navbarMenu = document.querySelector('.navbar-menu');
const heading = document.querySelector('#navbar-logo-text')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    navbarMenu.classList.toggle('active')
    heading.classList.toggle('heading-increase')
    console.log("Hello working")
})