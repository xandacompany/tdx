/* Script para crear el efecto de máquina de escribir en el texto */
const text = "Potencia tu presencia online con TDX";
const textElement = document.getElementById("text_maquina_de_escribir");
const cursorElement = document.getElementById("cursor");

let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        // Mostrar el cursor al final
        cursorElement.style.display = 'inline';
    }
}

// Iniciar el efecto de máquina de escribir
type();

// Ocultar el cursor al inicio
cursorElement.style.display = 'none';





/* Script para que el formulario deje de estar estático y se convierta en fixed una vez que el usuario haya bajado por la pantalla*/
window.addEventListener('scroll', function() {
    const formulario = document.querySelector('.formulario_fixed');
    const contenedor = document.querySelector('.contenedor_automatico_width_100_seccion_2');
    const footer = document.getElementById('footer');
    
    const contenedorRect = contenedor.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    
    // Verifica si el contenedor ha salido del viewport
    if (contenedorRect.bottom < 0) {
        // Verifica si el footer está en el viewport
        if (footerRect.top > window.innerHeight) {
            formulario.classList.add('fixed');
        } else {
            formulario.classList.remove('fixed');
        }
    } else {
        formulario.classList.remove('fixed');
    }
});





document.addEventListener('DOMContentLoaded', () => {/* Encabezado */
    function ajustarAlturaVideoFondo() {
        const contenedor = document.getElementById('contenedor_encabezado');
        const video = document.querySelector('.video_de_fondo');

        // Captura la altura del contenedor
        const alturaContenedor = contenedor.clientHeight;

        // Asigna la altura al video
        video.style.height = `${alturaContenedor}px`;
    }

    function ajustarAlturaVideoFondo_2() {/* Fondo */
        const contenedor = document.getElementById('contenedor_encabezado_3');
        const video = document.querySelector('.video_de_fondo_3');

        // Captura la altura del contenedor
        const alturaContenedor = contenedor.clientHeight;

        // Asigna la altura al video
        video.style.height = `${alturaContenedor}px`;
    }

    function ajustarAlturas() {
        // Utiliza requestAnimationFrame para asegurar que el ajuste se realice después del renderizado
        requestAnimationFrame(() => {
            ajustarAlturaVideoFondo();
            ajustarAlturaVideoFondo_2();
        });
    }

    // Ajustar la altura inicialmente después de un pequeño retraso
    setTimeout(ajustarAlturas, 100);

    // Ajustar la altura cuando se redimensiona la ventana
    window.addEventListener('resize', ajustarAlturas);
});







/* Script de la cuenta regresiva que aparece en el formulario */
function startCountdown(elementId, storageKey) {
    const duration = 1.5 * 24 * 60 * 60 * 1000;

    let endTime = localStorage.getItem(storageKey);

    if (!endTime) {
        endTime = Date.now() + duration;
        localStorage.setItem(storageKey, endTime);
    } else {
        endTime = parseInt(endTime, 10);
    }

    const interval = setInterval(() => {
        const now = Date.now();
        const remainingTime = endTime - now;

        if (remainingTime <= 0) {
            localStorage.removeItem(storageKey);
            clearInterval(interval);
            document.getElementById(elementId).innerText = 'La oferta ha terminado.';
            startCountdown(elementId, storageKey); // Reinicia la cuenta regresiva
            return;
        }

        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerText = `La Oferta Termina en: ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }, 1000);
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

// Inicia las cuentas regresivas
startCountdown('countdown', 'countdownEndTime1');
startCountdown('countdown_2', 'countdownEndTime2');