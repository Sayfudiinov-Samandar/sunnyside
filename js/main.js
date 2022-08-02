var elBurrgerBtn=document.querySelector(".site-btn")
var elHrNavb=document.querySelector(".header-box")


elBurrgerBtn.addEventListener('click', function(){
    elHrNavb.classList.toggle("nav-open")
})