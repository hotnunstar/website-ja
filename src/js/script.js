const oQueFazemos = document.getElementById('oQueFazemos');
const subMenu = document.getElementById('subMenu');

oQueFazemos.addEventListener('click', () => {
    subMenu.classList.toggle('flex')
    subMenu.classList.toggle('hidden')
})

window.addEventListener('click', function(e){   
    if (!subMenu.contains(e.target) && !oQueFazemos.contains(e.target))
    {
        subMenu.classList.remove('flex')
        subMenu.classList.add('hidden')
    }
  });