// ========== FUNCIÓN DE SEGURIDAD: LIMPIAR TEXTO ==========
function limpiarTexto(texto) {
    if (!texto) return '';
    // Eliminar etiquetas HTML
    return texto.replace(/<[^>]*>/g, '');
}



// ========== LÓGICA PRINCIPAL DE INDEX.HTML ==========

let categoriaActiva = 'todos';
let busquedaActiva = '';

// Renderizar productos en la página
function renderizarProductos() {
    const container = document.getElementById('productos-container');
    if (!container) return;
    
    let productosFiltrados = filtrarPorCategoria(categoriaActiva);
    
    if (busquedaActiva) {
        const termino = busquedaActiva.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        productosFiltrados = productosFiltrados.filter(p => 
            p.nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(termino)
        );
    }
    
    if (productosFiltrados.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;">No se encontraron productos 😕</div>';
        return;
    }
    
    container.innerHTML = productosFiltrados.map(producto => {
        // Verificar si el producto está en el carrito
        const itemEnCarrito = carrito.find(item => item.id === producto.id);
        const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
        const stockDisponible = producto.stock - cantidadEnCarrito;
        const agotado = producto.stock === 0;
        const stockBajo = producto.stock > 0 && producto.stock <= 3;
        
        return `
            <article class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="info">
                    <h3>${producto.nombre}</h3>
                    <p class="precio">$${producto.precio.toFixed(2)}</p>
                    <p class="ubicacion">${producto.ubicacion}</p>
                    <p class="stock ${agotado ? 'stock-agotado' : (stockBajo ? 'stock-bajo' : 'stock-disponible')}">
                        ${agotado ? '❌ Agotado' : (stockBajo ? `⚠️ Últimas ${producto.stock} unidades` : `📦 Stock: ${producto.stock} unidades`)}
                    </p>
                    ${!agotado ? `
                        <div>
                            <button onclick="agregarAlCarritoDesdeLista(${producto.id})" class="btn-comprar-local" ${stockDisponible <= 0 ? 'disabled' : ''}>
                                ${stockDisponible <= 0 ? 'Sin stock disponible' : 'Agregar al carrito'}
                            </button>
                            <a href="producto.html?id=${producto.id}" class="btn-detalle">Ver detalles →</a>
                        </div>
                    ` : `
                        <div>
                            <button class="btn-agotado" disabled>Agotado</button>
                            <a href="producto.html?id=${producto.id}" class="btn-detalle">Ver detalles →</a>
                        </div>
                    `}
                </div>
            </article>
        `;
    }).join('');
}
        // Scroll automático
    const urlParams = new URLSearchParams(window.location.search);
    const scrollId = urlParams.get('scroll');
    if (scrollId) {
        setTimeout(() => {
            const elemento = document.querySelector(`.producto-card[data-id="${scrollId}"]`);
            if (elemento) elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
    }



// Función para agregar al carrito desde la lista
function agregarAlCarritoDesdeLista(id) {
    const producto = obtenerProducto(id);
    if (producto) {
        const itemEnCarrito = carrito.find(item => item.id === id);
        const cantidadActual = itemEnCarrito ? itemEnCarrito.cantidad : 0;
        const stockDisponible = producto.stock - cantidadActual;
        
        if (stockDisponible <= 0) {
            mostrarNotificacion(`No hay más stock de ${producto.nombre}`, 'error');
            return;
        }
        
        agregarAlCarrito({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen
        }, 1);
        
        // Actualizar UI
        renderizarProductos();
        actualizarCarritoUI();
    }
}

// Actualizar UI del carrito
function actualizarCarritoUI() {
    const contadorElement = document.getElementById('carrito-contador');
    const totalElement = document.getElementById('carrito-total');
    const itemsElement = document.getElementById('carrito-items');
    const botonesContainer = document.getElementById('carrito-botones');
    
    const cantidadTotal = obtenerCantidadCarrito();
    if (contadorElement) {
        contadorElement.textContent = cantidadTotal;
    }
    
    if (totalElement) {
        totalElement.innerHTML = `Total: $${obtenerTotalCarrito().toFixed(2)}`;
    }
    
    if (itemsElement) {
        if (carrito.length === 0) {
            itemsElement.innerHTML = '<p style="text-align:center; padding:20px;">Tu carrito está vacío</p>';
            if (botonesContainer) botonesContainer.innerHTML = '';
            return;
        }
        
        itemsElement.innerHTML = carrito.map(item => {
            const producto = obtenerProducto(item.id);
            const stockDisponible = producto ? producto.stock : 0;
            const puedeIncrementar = stockDisponible > item.cantidad;
            
            return `
                <div class="carrito-item">
                    <div>
                        <strong>${item.nombre}</strong><br>
                        <small>$${item.precio.toFixed(2)} c/u</small>
                        <div class="carrito-cantidad">
                            <button onclick="cambiarCantidadCarrito(${item.id}, -1)" ${item.cantidad <= 1 ? 'disabled' : ''}>-</button>
                            <span>${item.cantidad}</span>
                            <button onclick="cambiarCantidadCarrito(${item.id}, 1)" ${!puedeIncrementar ? 'disabled' : ''}>+</button>
                        </div>
                    </div>
                    <div>
                        <strong>$${(item.precio * item.cantidad).toFixed(2)}</strong>
                        <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id}); renderizarProductos(); actualizarCarritoUI();">Eliminar</button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Agregar botones de acción
    if (botonesContainer && carrito.length > 0) {
        botonesContainer.innerHTML = `
            <button class="btn-pedido" onclick="window.location.href='pedido.html'">
                 Proceder al pedido
            </button>
            <button class="btn-vaciar" onclick="vaciarCarrito()">
                Vaciar Carrito
            </button>
        `;
    }
}

// Cambiar cantidad de un producto en el carrito
function cambiarCantidadCarrito(id, cambio) {
    const item = carrito.find(i => i.id === id);
    if (!item) return;
    
    const nuevaCantidad = item.cantidad + cambio;
    const producto = obtenerProducto(id);
    
    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(id);
    } else if (producto && nuevaCantidad > producto.stock) {
        mostrarNotificacion(`No hay suficiente stock. Solo quedan ${producto.stock} unidades disponibles`, 'error');
        return;
    } else {
        item.cantidad = nuevaCantidad;
        guardarCarrito();
    }
    
    renderizarProductos();
    actualizarCarritoUI();
}

// Abrir carrito
function abrirCarrito() {
    actualizarCarritoUI();
    const modal = document.getElementById('carrito-modal');
    const overlay = document.getElementById('overlay');
    if (modal) modal.classList.add('activo');
    if (overlay) overlay.classList.add('activo');
}

// Cerrar carrito
function cerrarCarrito() {
    const modal = document.getElementById('carrito-modal');
    const overlay = document.getElementById('overlay');
    if (modal) modal.classList.remove('activo');
    if (overlay) overlay.classList.remove('activo');
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar productos
    renderizarProductos();
    actualizarCarritoUI();
    
    // Evento de búsqueda
    const buscarInput = document.getElementById('buscar-input');
    if (buscarInput) {
        buscarInput.addEventListener('input', (e) => {
            busquedaActiva = e.target.value;
            renderizarProductos();
        });

// Animación al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar a los productos después de renderizar
function aplicarAnimacionScroll() {
        document.querySelectorAll('.producto').forEach(producto => {
            producto.style.opacity = '0';
            producto.style.transform = 'translateY(30px)';
            producto.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(producto);
        });
}

    // Llamar después de renderizar productos
    const originalRenderizar = renderizarProductos;
    renderizarProductos = function() {
        originalRenderizar();
        setTimeout(aplicarAnimacionScroll, 100);
    };
}
    
    // Evento submit del buscador
    const buscadorForm = document.getElementById('buscador-form');
    if (buscadorForm) {
        buscadorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            renderizarProductos();
        });
    }
    
    // Eventos de filtros
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            categoriaActiva = btn.dataset.categoria;
            renderizarProductos();
        });
    });
    
    // Eventos del carrito
    const carritoIcono = document.getElementById('carrito-icono');
    const overlay = document.getElementById('overlay');
    if (carritoIcono) carritoIcono.addEventListener('click', abrirCarrito);
    if (overlay) overlay.addEventListener('click', cerrarCarrito);
});

// Mostrar botón al hacer scroll
window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTopBtn');
    if (btn) {
        if (window.scrollY > 300) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    }
});