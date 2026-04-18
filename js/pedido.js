// ========== pedido.js - Lógica de finalización de pedido ==========

document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos DOM ---
    const checkbox = document.getElementById('requiere-mensajeria');
    const direccionGroup = document.getElementById('direccion-group');
    const resumenDiv = document.getElementById('resumen-carrito');
    const btnEnviar = document.getElementById('btn-enviar-whatsapp');
    const codigoSpan = document.getElementById('codigo-pedido');
    const fechaHoraSpan = document.getElementById('fecha-hora');
    const provinciaSelect = document.getElementById('provincia');
    const municipioSelect = document.getElementById('municipio');

    // --- Datos de provincias y municipios de Cuba ---
    const provinciasYMunicipios = {
        "Pinar del Río": ["Pinar del Río", "Consolación del Sur", "San Luis", "San Juan y Martínez", "Viñales", "Los Palacios", "Mantua", "Minas de Matahambre", "Bahía Honda", "La Palma", "Candelaria", "Guane", "Sandino"],
        "Artemisa": ["Artemisa", "Guanajay", "Güira de Melena", "Mariel", "Alquízar", "San Cristóbal", "Caimito", "Bauta", "Bahía Honda", "Candelaria"],
        "La Habana": ["Plaza", "Centro Habana", "Habana Vieja", "Diez de Octubre", "Cerro", "Marianao", "La Lisa", "Boyeros", "Arroyo Naranjo", "Cotorro", "San Miguel del Padrón", "Guanabacoa", "Regla", "Habana del Este"],
        "Mayabeque": ["San José de las Lajas", "Jaruco", "Santa Cruz del Norte", "Madruga", "Nueva Paz", "San Nicolás", "Güines", "Melena del Sur", "Batabanó", "Quivicán", "Bejucal"],
        "Matanzas": ["Matanzas", "Cárdenas", "Colón", "Jovellanos", "Perico", "Jagüey Grande", "Calimete", "Los Arabos", "Pedro Betancourt", "Limonar", "Unión de Reyes", "Ciénaga de Zapata", "Agramonte", "Varadero"],
        "Cienfuegos": ["Cienfuegos", "Cruces", "Cumanayagua", "Aguada de Pasajeros", "Rodas", "Palmira", "Lajas", "Santa Isabel de las Lajas", "Abreus", "Yaguaramas"],
        "Villa Clara": ["Santa Clara", "Placetas", "Sagua la Grande", "Caibarién", "Remedios", "Camajuaní", "Encrucijada", "Manicaragua", "Cifuentes", "Santo Domingo", "Quemado de Güines", "Ranchuelo", "Esperanza"],
        "Sancti Spíritus": ["Sancti Spíritus", "Trinidad", "Cabaiguán", "Yaguajay", "Jatibonico", "Taguasco", "La Sierpe", "Fomento"],
        "Ciego de Ávila": ["Ciego de Ávila", "Morón", "Venezuela", "Baraguá", "Primero de Enero", "Florencia", "Majagua", "Chambas", "Ciro Redondo"],
        "Camagüey": ["Camagüey", "Florida", "Nuevitas", "Vertientes", "Sibanicú", "Santa Cruz del Sur", "Minas", "Esmeralda", "Sierra de Cubitas", "Jimaguayú", "Najasa"],
        "Las Tunas": ["Las Tunas", "Puerto Padre", "Manatí", "Majibacoa", "Jobabo", "Colombia", "Amancio Rodríguez", "Jesús Menéndez"],
        "Holguín": ["Holguín", "Banes", "Antilla", "Mayarí", "Moa", "Sagua de Tánamo", "Frank País", "Gibara", "Cueto", "Báguanos", "Cacocum", "Urbano Noris", "Calixto García"],
        "Granma": ["Bayamo", "Manzanillo", "Jiguaní", "Yara", "Bartolomé Masó", "Buey Arriba", "Campechuela", "Cauto Cristo", "Guisa", "Niquero", "Pilón", "Río Cauto"],
        "Santiago de Cuba": ["Santiago de Cuba", "Palma Soriano", "San Luis", "El Cobre", "Contramaestre", "Mella", "Songo - La Maya", "Tercer Frente", "Guamá"],
        "Guantánamo": ["Guantánamo", "Baracoa", "Maisí", "Imías", "San Antonio del Sur", "Caimanera", "Yateras", "Manuel Tames", "Niceto Pérez", "El Salvador"]
    };

    // Llenar provincias
    function cargarProvincias() {
        for (let provincia in provinciasYMunicipios) {
            let option = document.createElement('option');
            option.value = provincia;
            option.textContent = provincia;
            provinciaSelect.appendChild(option);
        }
    }
    cargarProvincias();

    // Actualizar municipios según provincia seleccionada
    function actualizarMunicipios() {
        const provincia = provinciaSelect.value;
        const municipios = provinciasYMunicipios[provincia] || [];
        municipioSelect.innerHTML = '<option value="">Selecciona un municipio</option>';
        municipios.forEach(mun => {
            let option = document.createElement('option');
            option.value = mun;
            option.textContent = mun;
            municipioSelect.appendChild(option);
        });
    }
    provinciaSelect.addEventListener('change', actualizarMunicipios);
    actualizarMunicipios(); // Inicial

    // Mostrar/ocultar dirección + provincia/municipio
    checkbox.addEventListener('change', () => {
        direccionGroup.classList.toggle('oculto', !checkbox.checked);
    });

    // Generar código de pedido único (formato: PED-YYYYMMDD-XXXX)
    function generarCodigoPedido() {
        const ahora = new Date();
        const fecha = ahora.toISOString().slice(0,10).replace(/-/g, '');
        const random = Math.floor(Math.random() * 9000 + 1000);
        return `PED-${fecha}-${random}`;
    }

    // Formatear fecha y hora local
    function formatearFechaHora() {
        const ahora = new Date();
        return ahora.toLocaleString('es-CU', { dateStyle: 'full', timeStyle: 'medium' });
    }

    // Mostrar código y fecha/hora
    const codigoPedido = generarCodigoPedido();
    const fechaHora = formatearFechaHora();
    codigoSpan.textContent = codigoPedido;
    fechaHoraSpan.textContent = fechaHora;

    // Cargar carrito desde localStorage
    let carrito = [];
    try {
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    } catch(e) {
        carrito = [];
    }

    // Mostrar resumen del carrito (detallado)
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
                        <span>${item.nombre} ($${item.precio.toFixed(2)} c/u) x ${item.cantidad}</span>
                        <span>$${subtotal.toFixed(2)}</span>
                     </div>`;
        });
        html += `<div class="resumen-item" style="border-top:2px solid #32CD32; margin-top:8px; padding-top:8px; font-weight:bold;">
                    <span>TOTAL</span>
                    <span>$${total.toFixed(2)}</span>
                 </div>`;
        resumenDiv.innerHTML = html;
    }

    // Función para enviar pedido por WhatsApp con toda la información
    function enviarPedido() {
        // Obtener datos del cliente
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const requiereMensajeria = checkbox.checked;
        let direccion = '';
        let provincia = '';
        let municipio = '';

        if (requiereMensajeria) {
            direccion = document.getElementById('direccion').value.trim();
            provincia = provinciaSelect.value;
            municipio = municipioSelect.value;
            if (!direccion || !provincia || !municipio) {
                mostrarNotificacion('❌ Por favor, escribe la dirección de envío.', 'error');
                return;
            }
        }

        if (nombre === '' || apellido === '' || telefono === '') {
        mostrarNotificacion('❌ Por favor, completa tu nombre, apellido y teléfono.', 'error');
        return;
        }

        if (carrito.length === 0) {
            mostrarNotificacion('🛒 No hay productos en el carrito. Agrega algunos primero.', 'warning');
            return;
        }

        // Número del negocio 
        const numeroNegocio = '+5358474815';

        // Construir mensaje de WhatsApp detallado
        let mensaje = `🛒 *NUEVO PEDIDO* 🛒\n`;
        mensaje += `*Código:* ${codigoPedido}\n`;
        mensaje += `*Fecha/Hora:* ${fechaHora}\n\n`;
        mensaje += `*Cliente:* ${nombre} ${apellido}\n`;
        mensaje += `*Teléfono:* ${telefono}\n`;
        if (requiereMensajeria) {
            mensaje += `*Dirección:* ${direccion}\n`;
            mensaje += `*Provincia:* ${provincia}\n`;
            mensaje += `*Municipio:* ${municipio}\n`;
        } else {
            mensaje += `*Mensajería:* No necesita envío (retira en el local)\n`;
        }
        mensaje += `\n*PRODUCTOS:*\n`;
        let total = 0;
        carrito.forEach((item, idx) => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;
            mensaje += `${idx+1}. ${item.nombre}\n`;
            mensaje += `   Cantidad: ${item.cantidad}\n`;
            mensaje += `   Precio unitario: $${item.precio.toFixed(2)}\n`;
            mensaje += `   Subtotal: $${subtotal.toFixed(2)}\n\n`;
        });
        mensaje += `*TOTAL:* $${total.toFixed(2)}\n\n`;
        mensaje += `Gracias por tu compra. ¡Espero que vuelva a comprar pronto!`;

        // Abrir WhatsApp
        const url = `https://wa.me/${numeroNegocio}?text=${encodeURIComponent(mensaje)}`;
        mostrarNotificacion('📦 Pedido preparado. Ahora envía el mensaje por WhatsApp.', 'success');
        window.open(url, '_blank');
    }

    // Asignar evento al botón
    if (btnEnviar) {
        btnEnviar.addEventListener('click', enviarPedido);
    }
});