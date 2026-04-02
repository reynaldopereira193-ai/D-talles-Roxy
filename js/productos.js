// ========== DATOS DE PRODUCTOS ==========

const productos = {
    1: {
        id: 1,
        nombre: "Goma Eva",
        precio: 25.00,
        imagen: "imagenes/producto1.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["???", "???", "???", "Envío a toda la Habana"]
    },
    2: {
        id: 2,
        nombre: "Goma Eva",
        precio: 35.00,
        imagen: "imagenes/producto2.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 8,   // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    3: {
        id: 3,
        nombre: "Goma Eva",
        precio: 42.00,
        imagen: "imagenes/producto3.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,   // ← NUEVO: sin stock (agotado)
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    4: {
        id: 4,
        nombre: "Cajas de minas 0.7",
        precio: 28.00,
        imagen: "imagenes/producto4.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 12,  // ← NUEVO: stock disponible
        descripcion: "Cajas de minas 0.7 que dentro tiene los cartuchos llenos de minas.",
        caracteristicas: ["Nuevo", "Tamaño 10x10", "Caja con 12 unidades", "Envio a toda la Habana"]
    },
    5: {
        id: 5,
        nombre: "Pinturas 3D",
        precio: 30.00,
        imagen: "imagenes/producto5.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 20,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    6: {
        id: 6,
        nombre: "Marcador Permanente",
        precio: 45.00,
        imagen: "imagenes/producto6.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 5,   // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    7: {
        id: 7,
        nombre: "Pegamento Liquido",
        precio: 25.00,
        imagen: "imagenes/producto7.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["???", "???", "???", "Envío a toda la Habana"]
    },
    8: {
        id: 8,
        nombre: "Paquete de Reglas",
        precio: 35.00,
        imagen: "imagenes/producto8.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 8,   // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    9: {
        id: 9,
        nombre: "Plastilina de Colores",
        precio: 42.00,
        imagen: "imagenes/producto9.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 0,   // ← NUEVO: sin stock (agotado)
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    10: {
        id: 10,
        nombre: "Tubo de Pegamento",
        precio: 28.00,
        imagen: "imagenes/producto10.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 12,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    11: {
        id: 11,
        nombre: "Papel Estampado",
        precio: 30.00,
        imagen: "imagenes/producto11.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Regalos",
        stock: 20,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    12: {
        id: 12,
        nombre: "Paquete de Cuchillas",
        precio: 45.00,
        imagen: "imagenes/producto12.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 5,   // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    13: {
        id: 13,
        nombre: "Silicona en Barra",
        precio: 25.00,
        imagen: "imagenes/producto13.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["???", "???", "???", "Envío a toda la Habana"]
    },
    14: {
        id: 14,
        nombre: "Cartabones",
        precio: 35.00,
        imagen: "imagenes/producto14.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 8,   // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    15: {
        id: 15,
        nombre: "Paquetes de Ligas",
        precio: 42.00,
        imagen: "imagenes/producto15.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Regalos",
        stock: 0,   // ← NUEVO: sin stock (agotado)
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    16: {
        id: 16,
        nombre: "Paquetes de Lapices",
        precio: 28.00,
        imagen: "imagenes/producto16.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 12,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    17: {
        id: 17,
        nombre: "Paquetes de Portaminas",
        precio: 30.00,
        imagen: "imagenes/producto17.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 20,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    18: {
        id: 18,
        nombre: "Paquetes de Portaminas",
        precio: 45.00,
        imagen: "imagenes/producto18.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 5,   // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    19: {
        id: 19,
        nombre: "Papel Estampado",
        precio: 25.00,
        imagen: "imagenes/producto19.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Regalos",
        stock: 0,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["???", "???", "???", "Envío a toda la Habana"]
    },
    20: {
        id: 20,
        nombre: "Papel Estampado",
        precio: 35.00,
        imagen: "imagenes/producto20.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Regalos",
        stock: 8,   // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    21: {
        id: 21,
        nombre: "Tijeras Escolares",
        precio: 42.00,
        imagen: "imagenes/producto21.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 0,   // ← NUEVO: sin stock (agotado)
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    22: {
        id: 22,
        nombre: "Cajas de Plumones",
        precio: 28.00,
        imagen: "imagenes/producto22.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 12,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    23: {
        id: 23,
        nombre: "Pinturas de Acuarela",
        precio: 30.00,
        imagen: "imagenes/producto23.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 20,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    24: {
        id: 24,
        nombre: "Cajas de Portaminas",
        precio: 45.00,
        imagen: "imagenes/producto24.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 5,   // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    },
    25: {
        id: 25,
        nombre: "Paquetes de Sacapuntas",
        precio: 25.00,
        imagen: "imagenes/producto25.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 0,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["???", "???", "???", "Envío a toda la Habana"]
    },
    26: {
        id: 26,
        nombre: "Carpetas de Fundas",
        precio: 35.00,
        imagen: "imagenes/producto26.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 8,   // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    27: {
        id: 27,
        nombre: "Cajas de Boligrafos",
        precio: 42.00,
        imagen: "imagenes/producto27.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,   // ← NUEVO: sin stock (agotado)
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envío a toda la Habana"]
    },
    28: {
        id: 28,
        nombre: "Goma Eva",
        precio: 28.00,
        imagen: "imagenes/producto28.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 12,  // ← NUEVO: stock disponible
        descripcion: "???",
        caracteristicas: ["Nuevo", "???", "???", "Envio a toda la Habana"]
    }
};

// Función para obtener producto por ID
function obtenerProducto(id) {
    return productos[id];
}

// Función para obtener todos los productos
function obtenerTodosLosProductos() {
    return Object.values(productos);
}

// Función para verificar stock disponible
function verificarStock(id, cantidad = 1) {
    const producto = productos[id];
    if (!producto) return false;
    return producto.stock >= cantidad;
}

// Función para actualizar stock después de una compra
function actualizarStock(id, cantidad) {
    const producto = productos[id];
    if (producto) {
        producto.stock = Math.max(0, producto.stock - cantidad);
        return producto.stock;
    }
    return 0;
}

// Función para buscar productos por nombre (sin acentos)
function buscarProductos(termino) {
    if (!termino || termino.trim() === '') {
        return [];
    }
    
    termino = termino.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    return Object.values(productos).filter(producto => 
        producto.nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(termino)
    );
}

// Función para filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    if (categoria === 'todos') {
        return Object.values(productos);
    }
    return Object.values(productos).filter(producto => producto.categoria === categoria);
}