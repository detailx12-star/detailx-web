const navbar=document.getElementById('navbar');
const toggle=document.querySelector('.menu-toggle');
const body=document.body;

window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>20),{passive:true});

toggle?.addEventListener('click',()=>{
  const open=body.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded',String(open));
});

document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{
  body.classList.remove('menu-open');
  toggle?.setAttribute('aria-expanded','false');
}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
}),{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*70}ms`;observer.observe(el)});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=document.querySelector(a.getAttribute('href'));
  if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
}));

console.log('DETAILX premium website loaded');
