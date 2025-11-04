// Smooth internal link scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = this.getAttribute('href');
    if (!target || target === '#') return;
    const el = document.querySelector(target);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Scroll-to-top button behaviour
(function(){
  const btn = document.getElementById('scrollTopBtn');
  if(!btn) return;
  const showAt = 300;

  const toggle = ()=> {
    if(window.scrollY > showAt) btn.classList.add('show'); else btn.classList.remove('show');
  };

  window.addEventListener('scroll', toggle, {passive:true});
  // initial check
  toggle();

  btn.addEventListener('click', ()=> {
    window.scrollTo({top:0,behavior:'smooth'});
  });
})();