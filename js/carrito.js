// ========== CARRITO DE COMPRAS (COMPARTIDO) ==========

// ========== CARGAR CARRITO DE FORMA SEGURA ==========
let carrito = [];

function cargarCarritoSeguro() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        try {
            const parsed = JSON.parse(carritoGuardado);
            if (Array.isArray(parsed)) {
                carrito = parsed;
            } else {
                console.warn('Carrito inválido, reiniciando');
                carrito = [];
            }
        } catch (e) {
            console.error('Error al cargar carrito:', e);
            carrito = [];
        }
    } else {
        carrito = [];
    }
}

cargarCarritoSeguro();

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Agregar producto al carrito (con verificación de stock)
function agregarAlCarrito(producto, cantidad = 1) {
    // Verificar stock
    if (!verificarStock(producto.id, cantidad)) {
        const productoData = obtenerProducto(producto.id);
        const stockMsg = productoData && productoData.stock === 0 
            ? `${producto.nombre} está agotado` 
            : `Stock insuficiente de ${producto.nombre}. Solo quedan ${productoData?.stock || 0} unidades`;
        mostrarNotificacion(stockMsg, 'error');
        return false;
    }
    
    const existente = carrito.find(item => item.id === producto.id);
    let nuevaCantidad = cantidad;
    
    if (existente) {
        nuevaCantidad = existente.cantidad + cantidad;
        // Verificar stock con la nueva cantidad
        if (!verificarStock(producto.id, nuevaCantidad)) {
            const productoData = obtenerProducto(producto.id);
            mostrarNotificacion(`No hay suficiente stock. Solo quedan ${productoData?.stock || 0} unidades disponibles`, 'error');
            return false;
        }
        existente.cantidad = nuevaCantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }
    
    guardarCarrito();
    mostrarNotificacion(`${cantidad} x ${producto.nombre} agregado al carrito`, 'success');
    
    // Actualizar UI si la función existe
    if (typeof actualizarCarritoUI === 'function') {
        actualizarCarritoUI();
    }
    if (typeof renderizarProductos === 'function') {
        renderizarProductos();
    }
    
    return true;
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    if (typeof actualizarCarritoUI === 'function') {
        actualizarCarritoUI();
    }
    if (typeof renderizarProductos === 'function') {
        renderizarProductos();
    }
}

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    if (typeof actualizarCarritoUI === 'function') {
        actualizarCarritoUI();
    }
    if (typeof renderizarProductos === 'function') {
        renderizarProductos();
    }
}

// Obtener total del carrito
function obtenerTotalCarrito() {
    return carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
}

// Obtener cantidad total de items
function obtenerCantidadCarrito() {
    return carrito.reduce((sum, item) => sum + item.cantidad, 0);
}

// Mostrar notificación flotante (con tipos)
function mostrarNotificacion(mensaje, tipo = 'success') {
    const notificacionAnterior = document.querySelector('.notificacion-carrito');
    if (notificacionAnterior) notificacionAnterior.remove();
    
    const colores = {
        success: '#2ecc71',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };
    
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.className = 'notificacion-carrito';
    notificacion.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${colores[tipo] || colores.success};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: bold;
        z-index: 1002;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, 2500);
}

// Agregar animaciones al cargar
const estiloAnimaciones = document.createElement('style');
estiloAnimaciones.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(estiloAnimaciones);

// ========== FUNCIÓN PARA ENVIAR POR WHATSAPP ==========

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        mostrarNotificacion('Tu carrito está vacío. Agrega productos primero.', 'warning');
        return;
}

        // ========== LIMPIAR TEXTO PARA WHATSAPP ==========
function limpiarParaWhatsApp(texto) {
    if (!texto) return '';
    // Eliminar caracteres peligrosos
    return texto.replace(/[&<>]/g, '').substring(0, 100);
    }

    
    // Número de teléfono (cambiar por el número con código de país)
    // Ejemplo: +5351234567 (Cuba)
    const telefono = '5358474815'; // ← CAMBIA ESTO POR TU NÚMERO
    
    // Crear mensaje con los productos
    let mensaje = '🛒 *NUEVO PEDIDO* 🛒\n\n';
    mensaje += '*Productos solicitados:*\n';
    
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        mensaje += `${index + 1}. ${limpiarParaWhatsApp(item.nombre)}\n`;
        mensaje += `   Cantidad: ${item.cantidad}\n`;
        mensaje += `   Precio unitario: $${item.precio.toFixed(2)}\n`;
        mensaje += `   Subtotal: $${subtotal.toFixed(2)}\n\n`;
    });
    
    mensaje += `*Total del pedido:* $${obtenerTotalCarrito().toFixed(2)}\n\n`;
    mensaje += '*Por favor rellene estos datos:*\n';
    mensaje += 'Nombre: _________________\n';
    mensaje += 'Dirección: ______________\n';
    mensaje += 'Teléfono: _______________\n\n';
    mensaje += 'Gracias por tu compra! 🎉';
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear enlace de WhatsApp
    const url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(url, '_blank');
    
    // Opcional: vaciar carrito después de enviar
    // vaciarCarrito();
    // mostrarNotificacion('Pedido enviado. Te contactaremos pronto.', 'success');
}