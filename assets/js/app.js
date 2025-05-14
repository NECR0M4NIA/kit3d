// DOM ELEMENTS //
const $navLinks = document.querySelectorAll('#nav-link')

// PAGES CONTAINER //
const $homePageContainer = document.querySelector('.home-page-container')
const $explorePageContainer = document.querySelector('.explore-page-container')
const $customPageContainer = document.querySelector('.custom-page-container')
const $contactPageContainer = document.querySelector('.contact-page-container')
const $aboutPageContainer = document.querySelector('.about-page-container')
const $registerPageContainer = document.querySelector('.register-page-container')
const $loginPageContainer = document.querySelector('.login-page-container')

const pages = [$homePageContainer, $explorePageContainer, $customPageContainer, $contactPageContainer, $aboutPageContainer, $registerPageContainer, $loginPageContainer]

$navLinks.forEach((link, i) => {
    link.addEventListener('click', function () {
        document.title = `Kit3D - ${link.textContent}`
        pages.forEach((page, index) => {
            if (i === index) {
                page.style.opacity = '0'
                page.classList.remove('hidden')
                setTimeout(() => {
                    page.style.transition = 'opacity 0.5s ease-in-out'
                    page.style.opacity = '1'
                }, 100)
            } else {
                page.classList.add('hidden')
            }
        })
    })
})