const closeSidebarBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const wrapper = document.querySelector('.wrapper');
const addSidebarBtn = document.querySelector('.add-sidebar-btn')
closeSidebarBtn.addEventListener('click', () => {
    sidebar.style.left = -45 + '%'
    wrapper.style.marginLeft = 0
})

addSidebarBtn.addEventListener('click', () => {
    wrapper.style.marginLeft = 300 + 'px'
    sidebar.style.left = 0;
})