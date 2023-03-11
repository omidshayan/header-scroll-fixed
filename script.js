window.addEventListener('scroll', function(){
    const header = document.querySelector('.container')
    header.classList.toggle("sticky", window.scrollY > 0)
})