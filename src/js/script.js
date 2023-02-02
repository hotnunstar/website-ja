const oQueFazemos = document.getElementById('oQueFazemos');
const subMenu = document.getElementById('subMenu');

oQueFazemos.addEventListener('click', () => {
    subMenu.classList.toggle('flex')
    subMenu.classList.toggle('hidden')
})

subMenu.addEventListener('mouseout', () => {
    subMenu.classList.toggle('flex')
    subMenu.classList.toggle('hidden')
})