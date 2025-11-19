
document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(navToggle){
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const el = document.querySelector(targetId);
        if (el) {
          el.scrollIntoView({behavior:'smooth', block:'start'});
          // close mobile nav
          if(nav.classList.contains('show')) nav.classList.remove('show');
        }
      }
    });
  });
});
