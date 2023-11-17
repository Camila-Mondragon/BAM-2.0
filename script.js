document.querySelectorAll('button[id^="boton-elegir"]').forEach(function(boton) {
    boton.addEventListener('click', function() {
      // Obtener el nombre del ramo seleccionado
      var nombreRamo = this.parentNode.querySelector('h3').textContent;
      // Agregar la clase CSS "seleccionado" al elemento que contiene el ramo seleccionado
      this.parentNode.classList.add('seleccionado');
      // Mostrar un mensaje de confirmación con el nombre del ramo seleccionado
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