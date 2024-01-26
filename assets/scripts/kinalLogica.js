    
    document.addEventListener('scroll', () =>{
    
    const encabezado = document.getElementById('encabezadoScroll');

    if (window.scrollY > 0){
        encabezado.classList.add('scrolled');
    }else{
        encabezado.classList.remove('scrolled');
    }

})