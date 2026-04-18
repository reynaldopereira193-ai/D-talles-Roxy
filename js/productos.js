// ========== DATOS DE PRODUCTOS ==========

const productos = {
    1: {
        id: 1,
        nombre: "Goma Eva",
        precio: 25.00,
        imagen: "imagenes/producto1.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,
        descripcion: "Goma flexible y fácil de cortar, tiene diseño de flores de colores.",
        caracteristicas: ["Nuevo", "Lindos colores", "Excelente material", "Envío a toda la Habana"]
    },
    2: {
        id: 2,
        nombre: "Goma Eva",
        precio: 35.00,
        imagen: "imagenes/producto2.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 8,
        descripcion: "Goma flexible y fácil de cortar, tiene diseño de marmoleado de colores.",
        caracteristicas: ["Nuevo", "Lindos colores", "Excelente material", "Envío a toda la Habana"]
    },
    3: {
        id: 3,
        nombre: "Goma Eva",
        precio: 42.00,
        imagen: "imagenes/producto3.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,
        descripcion: "Goma flexible y fácil de cortar, tiene diseño de puntos de colores.",
        caracteristicas: ["Nuevo", "Lindos colores", "Excelente material", "Envío a toda la Habana"]
    },
    4: {
        id: 4,
        nombre: "Cajas de minas 0.7",
        precio: 28.00,
        imagen: "imagenes/producto4.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 12,
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
        stock: 20,
        descripcion: "Plumones de colores morado, azul, verde, rosa , naranja y amarillo que dan un efecto 3D.",
        caracteristicas: ["Nuevo", "Colores brillantes", "Excelente calidad", "Envio a toda la Habana"]
    },
    6: {
        id: 6,
        nombre: "Marcador Permanente",
        precio: 45.00,
        imagen: "imagenes/producto6.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 5,
        descripcion: "Cajas de marcadores permanentes, cada una con 10 marcadores de color negro.",
        caracteristicas: ["Nuevo", "Gran durabilidad", "Excelente calidad", "Envio a toda la Habana"]
    },
    7: {
        id: 7,
        nombre: "Pegamento Liquido",
        precio: 25.00,
        imagen: "imagenes/producto7.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,
        descripcion: "Tubos de Pegamento Liquido, ideal para pegar papel, carton o cartulina.",
        caracteristicas: ["Nuevo", "Gran versatilidad", "Excelente calidad", "Envío a toda la Habana"]
    },
    8: {
        id: 8,
        nombre: "Paquete de Reglas",
        precio: 35.00,
        imagen: "imagenes/producto8.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 8,
        descripcion: "Paquetes de reglas de 30 centímetros ,cada uno viene con 12 reglas.",
        caracteristicas: ["Nuevo", "Gran utilidad", "Excelente calidad", "Envío a toda la Habana"]
    },
    9: {
        id: 9,
        nombre: "Plastilina de Colores",
        precio: 42.00,
        imagen: "imagenes/producto9.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 0,
        descripcion: "Plastilinas de 8 colores distintos para los más pequeños.",
        caracteristicas: ["Nuevo", "Ideal para niños", "Excelente calidad", "Envío a toda la Habana"]
    },
    10: {
        id: 10,
        nombre: "Tubo de Pegamento",
        precio: 28.00,
        imagen: "imagenes/producto10.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 12,
        descripcion: "Tubo de pegamento útil para pegar papel, cartón o cartulina.",
        caracteristicas: ["Nuevo", "Gran utilidad", "Excelente calidad", "Envio a toda la Habana"]
    },
    11: {
        id: 11,
        nombre: "Papel Estampado",
        precio: 30.00,
        imagen: "imagenes/producto11.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Regalos",
        stock: 20,
        descripcion: "Rollos de papel estampado con fondo blanco , miden 1.5 metros de largo y 70 centímetros de ancho.",
        caracteristicas: ["Nuevo", "Lindos diseños", "Excelente calidad", "Envio a toda la Habana"]
    },
    12: {
        id: 12,
        nombre: "Paquete de Cuchillas",
        precio: 45.00,
        imagen: "imagenes/producto12.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 5,
        descripcion: "Paquetes de cuchillas con colores azul, rojo, verde y amarillo, 12 cuchillas por paquete.",
        caracteristicas: ["Nuevo", "Gran versatilidad", "Excelente calidad", "Envio a toda la Habana"]
    },
    13: {
        id: 13,
        nombre: "Silicona en Barra",
        precio: 25.00,
        imagen: "imagenes/producto13.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,
        descripcion: "Paquetes de barras de silicona.",
        caracteristicas: ["Nuevo", "Gran versatilidad", "Excelente calidad", "Envío a toda la Habana"]
    },
    14: {
        id: 14,
        nombre: "Cartabones",
        precio: 35.00,
        imagen: "imagenes/producto14.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 8,
        descripcion: "Cartabones transparentes con figuras en el interior.",
        caracteristicas: ["Nuevo", "Gran utilidad", "Excelente calidad", "Envío a toda la Habana"]
    },
    15: {
        id: 15,
        nombre: "Paquetes de Ligas",
        precio: 42.00,
        imagen: "imagenes/producto15.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Regalos",
        stock: 0,
        descripcion: "Paquetes de ligas elásticas de goma.",
        caracteristicas: ["Nuevo", "Gran versatilidad", "Excelente calidad", "Envío a toda la Habana"]
    },
    16: {
        id: 16,
        nombre: "Paquetes de Lápices",
        precio: 28.00,
        imagen: "imagenes/producto16.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 12,
        descripcion: "Paquetes de 12 lápices de diferentes colores y diseños.",
        caracteristicas: ["Nuevo", "Gran durabilidad", "Excelente calidad", "Envio a toda la Habana"]
    },
    17: {
        id: 17,
        nombre: "Paquetes de Portaminas",
        precio: 30.00,
        imagen: "imagenes/producto17.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 20,
        descripcion: "Paquetes de 40 portaminas de diferentes colores.",
        caracteristicas: ["Nuevo", "Gran durabilidad", "Excelente calidad", "Envio a toda la Habana"]
    },
    18: {
        id: 18,
        nombre: "Paquetes de Portaminas",
        precio: 45.00,
        imagen: "imagenes/producto18.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 5,
        descripcion: "Paquetes de 5 portaminas 0.7 de diferentes colores.",
        caracteristicas: ["Nuevo", "Gran durabilidad", "Excelente calidad", "Envio a toda la Habana"]
    },
    19: {
        id: 19,
        nombre: "Papel Estampado",
        precio: 25.00,
        imagen: "imagenes/producto19.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Regalos",
        stock: 0,
        descripcion: "Rollos de papel estampado con diseño de serie infantil , miden 2 metros de largo y 70 centímetros de ancho.",
        caracteristicas: ["Nuevo", "Lindos diseños", "Excelente calidad", "Envío a toda la Habana"]
    },
    20: {
        id: 20,
        nombre: "Papel Estampado",
        precio: 35.00,
        imagen: "imagenes/producto20.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Regalos",
        stock: 8,
        descripcion: "Papel estampado de fondo blanco.",
        caracteristicas: ["Nuevo", "Lindos diseños", "Excelente calidad", "Envío a toda la Habana"]
    },
    21: {
        id: 21,
        nombre: "Tijeras Escolares",
        precio: 42.00,
        imagen: "imagenes/producto21.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 0,
        descripcion: "Tijeras de 5.5 pulgadas y agarre flexible de diferentes colores.",
        caracteristicas: ["Nuevo", "Gran versatilidad", "Excelente calidad", "Envío a toda la Habana"]
    },
    22: {
        id: 22,
        nombre: "Cajas de Plumones",
        precio: 28.00,
        imagen: "imagenes/producto22.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 12,
        descripcion: "Cajas de plumones de diferentes colores cada una con 12 plumones.",
        caracteristicas: ["Nuevo", "Gran utilidad", "Excelente calidad", "Envio a toda la Habana"]
    },
    23: {
        id: 23,
        nombre: "Pinturas de Acuarela",
        precio: 30.00,
        imagen: "imagenes/producto23.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 20,
        descripcion: "Pinturas de acuarela con todos los colores y pincel.",
        caracteristicas: ["Nuevo", "Ideal para niños", "Excelente calidad", "Envio a toda la Habana"]
    },
    24: {
        id: 24,
        nombre: "Cajas de Portaminas",
        precio: 45.00,
        imagen: "imagenes/producto24.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 5,
        descripcion: "Cajas de 50 portaminas 0.5/0.7 de diferentes colores.",
        caracteristicas: ["Nuevo", "Gran utilidad", "Excelente calidad", "Envio a toda la Habana"]
    },
    25: {
        id: 25,
        nombre: "Paquetes de Sacapuntas",
        precio: 25.00,
        imagen: "imagenes/producto25.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Escuela",
        stock: 0,
        descripcion: "Sacapuntas con forma de corazón de diferentes colores.",
        caracteristicas: ["Nuevo", "Gran durabilidad", "Excelente calidad", "Envío a toda la Habana"]
    },
    26: {
        id: 26,
        nombre: "Carpetas de Fundas",
        precio: 35.00,
        imagen: "imagenes/producto26.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 8,
        descripcion: "Carpetas de funda para guardar documentos o papeles.",
        caracteristicas: ["Nuevo", "Gran utilidad", "Excelente calidad", "Envío a toda la Habana"]
    },
    27: {
        id: 27,
        nombre: "Cajas de Boligrafos",
        precio: 42.00,
        imagen: "imagenes/producto27.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 0,
        descripcion: "Cajas de 50 bolígrafos de tinta azul.",
        caracteristicas: ["Nuevo", "Gran durabilidad", "Excelente calidad", "Envío a toda la Habana"]
    },
    28: {
        id: 28,
        nombre: "Goma Eva",
        precio: 28.00,
        imagen: "imagenes/producto28.jpg",
        ubicacion: "📍 La Habana, 10 de Octubre",
        categoria: "Oficina",
        stock: 12,
        descripcion: "Goma flexible y fácil de cortar, tiene diseño de lineas de colores.",
        caracteristicas: ["Nuevo", "Lindos diseños", "Excelente calidad", "Envio a toda la Habana"]
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