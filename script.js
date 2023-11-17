document.querySelectorAll('button[id^="boton-elegir"]').forEach(function(boton) {
    boton.addEventListener('click', function() {
      var nombreRamo = this.parentNode.querySelector('h3').textContent;
      this.parentNode.classList.add('seleccionado');
      alert('Has elegido el ramo de ' + nombreRamo);
    });
   });
   const botonVolverArriba = document.querySelector('#boton-volver-arriba');

   window.addEventListener('scroll', function() {
     if (window.pageYOffset > 100) {
       botonVolverArriba.style.display = 'block';
     } else {
       botonVolverArriba.style.display = 'none';
     }
   });
   
   botonVolverArriba.addEventListener('click', function() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   });