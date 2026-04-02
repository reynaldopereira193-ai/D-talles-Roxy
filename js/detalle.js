// ========== FUNCIÓN DE SEGURIDAD: LIMPIAR TEXTO ==========
function limpiarTexto(texto) {
    if (!texto) return '';
    // Eliminar etiquetas HTML
    return texto.replace(/<[^>]*>/g, '');
}


// ========== LÓGICA DE PRODUCTO.HTML ==========

// Cargar datos del producto cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get('id');
    
    if (productoId && productos[productoId]) {
        const producto = productos[productoId];
        
        // Verificar cantidad en carrito
        const itemEnCarrito = carrito.find(item => item.id === parseInt(productoId));
        const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
        const stockDisponible = producto.stock - cantidadEnCarrito;
        const agotado = producto.stock === 0;
        const stockBajo = producto.stock > 0 && producto.stock <= 3;
        
        // Cargar datos en el HTML
        document.getElementById('producto-imagen').src = producto.imagen;
        document.getElementById('producto-nombre').textContent = producto.nombre;
        document.getElementById('producto-precio').textContent = `$${producto.precio.toFixed(2)}`;
        document.getElementById('producto-descripcion').textContent = producto.descripcion;
        
        // Agregar información de stock
        const stockElement = document.createElement('p');
        stockElement.className = `stock-detalle ${agotado ? 'stock-agotado' : (stockBajo ? 'stock-bajo' : 'stock-disponible')}`;
        stockElement.innerHTML = agotado 
            ? '❌ <strong>Agotado</strong>' 
            : (stockBajo 
                ? `⚠️ <strong>¡Últimas ${producto.stock} unidades!</strong>` 
                : `📦 <strong>Stock disponible:</strong> ${producto.stock} unidades`);
        
        const precioElement = document.querySelector('.precio-detalle');
        precioElement.insertAdjacentElement('afterend', stockElement);
        
        // Mostrar cantidad en carrito si ya tiene
        if (cantidadEnCarrito > 0 && !agotado) {
            const carritoMsg = document.createElement('p');
            carritoMsg.className = 'carrito-msg';
            carritoMsg.innerHTML = `🛒 Ya tienes ${cantidadEnCarrito} unidad(es) en tu carrito`;
            stockElement.insertAdjacentElement('afterend', carritoMsg);
        }
        
        // Cargar características
        const lista = document.getElementById('producto-caracteristicas');
        if (lista && producto.caracteristicas) {
            lista.innerHTML = '';
            producto.caracteristicas.forEach(caract => {
                const li = document.createElement('li');
                li.innerHTML = `✓ ${caract}`;
                lista.appendChild(li);
            });
        }
        
        // Configurar botón de agregar al carrito
        const botonAgregar = document.getElementById('btn-agregar-carrito');
        if (botonAgregar) {
            if (agotado) {
                botonAgregar.textContent = '❌ Agotado';
                botonAgregar.disabled = true;
                botonAgregar.style.background = '#999';
                botonAgregar.style.cursor = 'not-allowed';
            } else {
                botonAgregar.textContent = 'Agregar al carrito 🛒';
                botonAgregar.disabled = false;
                
                botonAgregar.onclick = () => {
                    const exito = agregarAlCarrito({
                        id: producto.id,
                        nombre: producto.nombre,
                        precio: producto.precio,
                        imagen: producto.imagen
                    }, 1);
                    
                    if (exito) {
                        // Cambiar texto del botón temporalmente
                        const textoOriginal = botonAgregar.textContent;
                        botonAgregar.textContent = '✓ Agregado';
                        botonAgregar.style.background = '#2ecc71';
                        setTimeout(() => {
                            botonAgregar.textContent = textoOriginal;
                            botonAgregar.style.background = '#e44d26';
                        }, 1500);
                        
                        // Recargar la página para actualizar stock mostrado
                        setTimeout(() => {
                            location.reload();
                        }, 500);
                    }
                };
            }
        }
    } else {
        // Producto no encontrado
        const detalleDiv = document.getElementById('detalle');
        if (detalleDiv) {
            detalleDiv.innerHTML = '<div style="text-align:center;padding:40px;"><h2>Producto no encontrado</h2><a href="index.html" class="boton-volver">Volver al inicio</a></div>';
        }
    }
});