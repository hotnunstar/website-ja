const oQueFazemos = document.getElementById('oQueFazemos');
const subMenu = document.getElementById('subMenu');
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

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

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

//#region Title Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const title = entry.target.querySelector('.title_animation');
  
      if (entry.isIntersecting) {
        title.classList.remove('hidden')
        title.classList.add('animate-typing_blink');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      title.classList.remove('animate-typing_blink');
      title.classList.add('hidden')
    });
  });
  
  observer.observe(document.querySelector('.animation_div'));
  observer.observe(document.querySelector('.animation_div2'));
//#endregion