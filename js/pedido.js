// ========== pedido.js - Lógica de finalización de pedido ==========

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const checkbox = document.getElementById('requiere-mensajeria');
    const direccionGroup = document.getElementById('direccion-group');
    const resumenDiv = document.getElementById('resumen-carrito');
    const btnEnviar = document.getElementById('btn-enviar-whatsapp');
    const codigoDiv = document.getElementById('codigo-pedido');

    // Generar código único de pedido
    function generarCodigoPedido() {
        const ahora = new Date();
        const anio = ahora.getFullYear();
        const mes = String(ahora.getMonth() + 1).padStart(2, '0');
        const dia = String(ahora.getDate()).padStart(2, '0');
        const aleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return `PED-${anio}${mes}${dia}-${aleatorio}`;
    }

    const codigoPedido = generarCodigoPedido();
    if (codigoDiv) {
        codigoDiv.innerHTML = `📋 Código de pedido: <strong>${codigoPedido}</strong>`;
    }

    // Mostrar/ocultar campo de dirección según checkbox
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            direccionGroup.classList.remove('oculto');
        } else {
            direccionGroup.classList.add('oculto');
        }
    });

    // Cargar carrito desde localStorage
    let carrito = [];
    try {
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    } catch(e) {
        carrito = [];
    }

    // Mostrar resumen del carrito
    if (carrito.length === 0) {
        resumenDiv.innerHTML = '<p style="text-align:center;">No hay productos en tu carrito. <a href="index.html" style="color:#32CD32;">Ir a comprar</a></p>';
        if (btnEnviar) btnEnviar.disabled = true;
    } else {
        let total = 0;
        let html = '<h3>🛒 Resumen del pedido</h3>';
        carrito.forEach(item => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;
            html += `<div class="resumen-item">
                        <span>${item.nombre} x ${item.cantidad}</span>
                        <span>$${subtotal.toFixed(2)}</span>
                     </div>`;
        });
        html += `<div class="resumen-item" style="border-top:2px solid #32CD32; margin-top:8px; padding-top:8px; font-weight:bold;">
                    <span>TOTAL</span>
                    <span>$${total.toFixed(2)}</span>
                 </div>`;
        resumenDiv.innerHTML = html;
    }

    // Función para enviar pedido por WhatsApp
    function enviarPedido() {
        // Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const requiereMensajeria = checkbox.checked;
        let direccion = '';

        if (requiereMensajeria) {
            direccion = document.getElementById('direccion').value.trim();
            if (direccion === '') {
                alert('Por favor, escribe la dirección de envío.');
                return;
            }
        }

        if (nombre === '' || telefono === '') {
            alert('Por favor, completa tu nombre y teléfono.');
            return;
        }

        if (carrito.length === 0) {
            alert('No hay productos en el carrito.');
            return;
        }

        // Número del negocio (CÁMBIALO)
        const numeroNegocio = '+5358474815';  // ← AQUÍ TU NÚMERO REAL

        // Construir mensaje
        let mensaje = '🛒 *NUEVO PEDIDO* 🛒\n\n';
        mensaje += `*Código de pedido:* ${codigoPedido}\n`;
        mensaje += `*Cliente:* ${nombre}\n`;
        mensaje += `*Teléfono:* ${telefono}\n`;
        if (requiereMensajeria) {
            mensaje += `*Dirección:* ${direccion}\n`;
        } else {
            mensaje += `*Mensajería:* No necesita envío (retira en local)\n`;
        }
        mensaje += '\n*Productos:*\n';
        let total = 0;
        carrito.forEach((item, idx) => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;
            mensaje += `${idx+1}. ${item.nombre} x ${item.cantidad} = $${subtotal.toFixed(2)}\n`;
        });
        mensaje += `\n*Total:* $${total.toFixed(2)}\n`;
        mensaje += '\nGracias por tu compra. ¡En breve nos comunicamos!';

        // Abrir WhatsApp
        const url = `https://wa.me/${numeroNegocio}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }

    // Asignar evento al botón
    if (btnEnviar) {
        btnEnviar.addEventListener('click', enviarPedido);
    }
});