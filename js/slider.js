    let slideImages = document.querySelectorAll('.slides img');
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let dots = document.querySelectorAll('.dot');

    var counter = 0;

    // Código para el botón de siguiente
    next.addEventListener('click', slideNext);
    function slideNext() {
        slideImages[counter].classList.remove('active');
        dots[counter].classList.remove('active');
        counter = (counter + 1) % slideImages.length;
        slideImages[counter].classList.add('active');
        dots[counter].classList.add('active');
    }

    // Código para el botón de anterior
    prev.addEventListener('click', slidePrev);
    function slidePrev() {
        slideImages[counter].classList.remove('active');
        dots[counter].classList.remove('active');
        counter = (counter - 1 + slideImages.length) % slideImages.length;
        slideImages[counter].classList.add('active');
        dots[counter].classList.add('active');
    }

    // Deslizamiento automático
    function autoSliding() {
        deletInterval = setInterval(timer, 3000);
        function timer() {
            slideNext();
        }
    }
    autoSliding();

    // Detener el deslizamiento automático cuando el mouse está encima
    const container = document.querySelector('.slide-container');
    container.addEventListener('mouseover', function () {
        clearInterval(deletInterval);
    });

    // Reanudar el deslizamiento cuando el mouse está fuera
    container.addEventListener('mouseout', autoSliding);

    // Agregar evento de clic al indicador
    function switchImage(currentImage) {
        let imageId = parseInt(currentImage.getAttribute('attr')); // Convertir el valor del atributo a un número entero

        if (imageId !== counter) {
            slideImages[counter].classList.remove('active');
            dots[counter].classList.remove('active');
            counter = imageId;
            slideImages[counter].classList.add('active');
            dots[counter].classList.add('active');
        }
    }
