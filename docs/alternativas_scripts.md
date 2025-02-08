# Este .md te servirá para remplazar scripts en el caso de que sea necesario ante otras alternativas

## 1. Script para obtener la altura del header y aplicarla al top del main
- Este script te servirá obtener la altura del header y aplicarla al top del main, esto sucederá cada vez que el usuario haga más angosta la pantalla o la expanda más (según sea el caso), no obstante, puede afectar el rendimiento del sitio web (aunque sea mínimamente), razón por la cual no fue implementado y en su lugar está una versión más estable que de igual forma funciona y no afecta el contenido.

function updateMainTop() {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    
    const headerHeight = header.offsetHeight;
    
    main.style.top = `${headerHeight}px`;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', updateMainTop);

// Ejecutar al redimensionar la ventana
window.addEventListener('resize', updateMainTop);