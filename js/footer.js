// ========== footer.js - Funcionalidades comunes del footer ==========

// 1. Actualizar el año del copyright automáticamente
document.addEventListener('DOMContentLoaded', () => {
    const footerYear = document.getElementById('current-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});

// 2. Desplazamiento suave para enlaces internos (dentro de la misma página)
// Esto es útil para info.html donde hay anclas como #comprar, #envios, etc.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// 3. (Opcional) Registrar clics en enlaces del footer para análisis (si quieres)
document.querySelectorAll('.footer-section a').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Footer link clicked:', link.href);
        // Aquí podrías enviar un evento a Google Analytics o similar
    });
});



