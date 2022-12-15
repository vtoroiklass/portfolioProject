const sidebar = document.querySelector('.sidebar');
const wrapper = document.querySelector('.wrapper');
const mediaWrapper = document.querySelector('.media-wrapper')
const body = document.querySelector('body')
const addSidebarBtn = document.querySelector('.add-sidebar-btn')
let b = 0

addSidebarBtn.addEventListener('click', () => {
    if (b == 0) {
        sidebar.style.left = 0 + '%'

        if (body.clientWidth > 500) {
            wrapper.style.marginLeft = 300 + 'px'
        } else {
            mediaWrapper.style.marginLeft = 350 + 'px'
        }

        b = 1

        return
    }

    if (b > 0) {
        sidebar.style.left = -100 + '%';

        if (body.clientWidth > 500) {
            wrapper.style.marginLeft = 0
        } else {
            mediaWrapper.style.marginLeft = 0
        }

        b = 0
    }
})