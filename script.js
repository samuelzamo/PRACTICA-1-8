document.addEventListener('DOMContentLoaded', function () {
    const botonHamburguesa = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');

    botonHamburguesa.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');

    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
const formulario = document.querySelector('.formulario-contacto');
formulario.addEventListener('submit', function (event) {
    let camposLlenos = 0;

    const campos = formulario.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    campos.forEach(function (campo) {
        if (campo.value.trim() !== '') {
            camposLlenos++;
        }
    });

    if (camposLlenos < 3) {
        event.preventDefault(); 
        alert('Completa al menos 3 de los 6 campos antes de enviar el formulario.');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider();
});





