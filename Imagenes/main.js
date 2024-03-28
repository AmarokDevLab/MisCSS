document.addEventListener('DOMContentLoaded', function () {
    const galaxia = document.getElementById('galaxia');
    const imagenesGalaxia = galaxia.querySelectorAll('img');
    let indexGalaxia = 0;

    let isHovering = false;

    function mostrarSiguienteImagen() {
        if (isHovering) {
            imagenesGalaxia[indexGalaxia].style.display = 'none';
            indexGalaxia = (indexGalaxia + 1) % imagenesGalaxia.length;
            imagenesGalaxia[indexGalaxia].style.display = 'block';
        }
    }

    galaxia.addEventListener('mouseenter', function () {
        isHovering = true;
        // Desactivar desplazamiento de la página
        document.body.style.overflow = 'hidden';
    });

    galaxia.addEventListener('mouseleave', function () {
        isHovering = false;
        // Reactivar desplazamiento de la página
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('wheel', function (event) {
        if (isHovering) {
            event.preventDefault(); // Prevenir el comportamiento de desplazamiento normal de la página
            if (event.deltaY > 0) {
                mostrarSiguienteImagen();
            } else if (event.deltaY < 0) {
                imagenesGalaxia[indexGalaxia].style.display = 'none';
                indexGalaxia = (indexGalaxia - 1 + imagenesGalaxia.length) % imagenesGalaxia.length;
                imagenesGalaxia[indexGalaxia].style.display = 'block';
            }
        }
    });
});
