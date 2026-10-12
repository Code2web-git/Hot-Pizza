document.getElementById('yr').textContent=new Date().getFullYear();
var nav=document.getElementById('nav'),mb=document.getElementById('mb');
mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){
var t=document.querySelector(a.getAttribute('href'));if(!t)return;e.preventDefault();
var h=document.querySelector('header').offsetHeight+10;
window.scrollTo({top:t.getBoundingClientRect().top+scrollY-h,behavior:'smooth'});
nav.classList.remove('open');history.replaceState(null,'',a.getAttribute('href'))})});
