const sidebar = document.querySelector('.sidebar');
const wrapper = document.querySelector('.wrapper');
const mediaWrapper = document.querySelector('.media-wrapper')
const body = document.querySelector('body')
const addSidebarBtn = document.querySelector('.add-sidebar-btn')
let b = 0

const showArticlesBtn = document.querySelector('.show-articles-btn')
const articlesUl = document.querySelector('.articles-ul')

showArticlesBtn.addEventListener('click', () => {
    const articlesUlStyles = window.getComputedStyle(articlesUl)
    if (articlesUlStyles.getPropertyValue('display') === 'block') {
        articlesUl.style.display = 'none'
        return
    }

    articlesUl.style.display = 'block'
})

addSidebarBtn.addEventListener('click', () => {
    if (b == 0) {
        sidebar.style.left = 0 + '%'

        if (body.clientWidth > 500) {
            wrapper.style.left = 300 + 'px'
        } else {
            mediaWrapper.style.left = 350 + 'px'
        }

        b = 1

        return
    }

    if (b > 0) {
        sidebar.style.left = -100 + '%';

        if (body.clientWidth > 500) {
            wrapper.style.left = 0
        } else {
            mediaWrapper.style.left = 0
        }

        b = 0
    }
})