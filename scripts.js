
         function includeHTML(elementId, fileName, callback) {
           fetch(fileName)
             .then(response => response.text())
             .then(data => {
               document.getElementById(elementId).innerHTML = data;
               if (callback) callback(); 
             })
             .catch(error => console.log('Error:', error));
         }
     
         document.addEventListener("DOMContentLoaded", function() {
           includeHTML('navbar', 'https://fatum73.github.io/iestp_mgl/modulos/navbar/navbar.html', function() {
             initializeNavbar();
           });
           includeHTML('footer', 'https://fatum73.github.io/iestp_mgl/modulos/footer/footer.html', function() {
             initializeFooter();
           });
           includeHTML('slider', 'https://fatum73.github.io/iestp_mgl/modulos/slider/slider.html', function() {
             initializeSlider();
           });
         });
     
         function initializeNavbar() {
            const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       nav.classList.toggle('show-menu')
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')
           console.log("Navbar initialized");
         }
     
         function initializeFooter() {
           console.log("Footer initialized");
         }
     
         function initializeSlider() {
            let slideImages = document.querySelectorAll('.slides img');
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let dots = document.querySelectorAll('.dot');

    var counter = 0;

    next.addEventListener('click', slideNext);
    function slideNext() {
        slideImages[counter].classList.remove('active');
        dots[counter].classList.remove('active');
        counter = (counter + 1) % slideImages.length;
        slideImages[counter].classList.add('active');
        dots[counter].classList.add('active');
    }

    prev.addEventListener('click', slidePrev);
    function slidePrev() {
        slideImages[counter].classList.remove('active');
        dots[counter].classList.remove('active');
        counter = (counter - 1 + slideImages.length) % slideImages.length;
        slideImages[counter].classList.add('active');
        dots[counter].classList.add('active');
    }

    function autoSliding() {
        deletInterval = setInterval(timer, 3000);
        function timer() {
            slideNext();
        }
    }
    autoSliding();

    const container = document.querySelector('.slide-container');
    container.addEventListener('mouseover', function () {
        clearInterval(deletInterval);
    });

    container.addEventListener('mouseout', autoSliding);

    function switchImage(currentImage) {
        let imageId = parseInt(currentImage.getAttribute('attr')); 

        if (imageId !== counter) {
            slideImages[counter].classList.remove('active');
            dots[counter].classList.remove('active');
            counter = imageId;
            slideImages[counter].classList.add('active');
            dots[counter].classList.add('active');
        }
    }

           console.log("Slider initialized");
         }