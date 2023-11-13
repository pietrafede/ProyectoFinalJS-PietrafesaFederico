// PRODUCTOS
const productos = [
    // 500 ml
    {
        id: "Deep Shine Shampoo Frutilla",
        titulo: "Deep Shine Shampoo Frutilla",
        imagen: "./Productos/500ml/ShampooF.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 1200
    },
    {
        id: "Snow Foam Shampoo",
        titulo: "Snow Foam Shampoo",
        imagen: "./Productos/500ml/Snow.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 1600
    },
    {
        id: "Deep Shine Shampoo Banana",
        titulo: "Deep Shine Shampoo Banana",
        imagen: "./Productos/500ml/ShampooB.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 1200
    },
    {
        id: "Drunk Silicone Black Edition",
        titulo: "Drunk Silicone Black Edition",
        imagen: "./Productos/500ml/Black.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 6300
    },
    {
        id: "Drunk Silicone Transparente",
        titulo: "Drunk Silicone Transparente",
        imagen: "./Productos/500ml/Transparente.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 6100
    },
    {
        id: "Crystal Glass Cleaner",
        titulo: "Crystal Glass Cleaner",
        imagen: "./Productos/500ml/Crystal.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 1100
    },
    {
        id: "Tussi Shine Quick Detailer",
        titulo: "Tussi Shine Quick Detailer",
        imagen: "./Productos/500ml/Tussi.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 2900
    },
    {
        id: "Strong Iron Descontaminant",
        titulo: "Strong Iron Descontaminant",
        imagen: "./Productos/500ml/Strong.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 1900
    },
    {
        id: "All purpose Cleaner",
        titulo: "All purpose Cleaner",
        imagen: "./Productos/500ml/APC.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 1800
    },
    {
        id: "Bug Remover Cleaner",
        titulo: "Bug Remover Cleaner",
        imagen: "./Productos/500ml/Bug.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 1700
    },
    {
        id: "Milk Shine Interior Conditioner",
        titulo: "Milk Shine Interior Conditioner",
        imagen: "./Productos/500ml/Milk.jpg",
        categoria: {
            nombre: "500ml",
            id: "500ml"
        },
        precio: 4800
    },
    // 5 litros
    {
        id: "Bidón Shampoo Deep Shine Frutilla",
        titulo: "Bidón Shampoo Deep Shine Frutilla",
        imagen: "./Productos/5Litros/BidónShampoo.jpg",
        categoria: {
            nombre: "5litros",
            id: "5litros"
        },
        precio: 6500
    },
    {
        id: "Bidón Tussi Shine Quick Detailer",
        titulo: "Bidón Tussi Shine Quick Detailer",
        imagen: "./Productos/5Litros/BidónTussi.jpg",
        categoria: {
            nombre: "5litros",
            id: "5litros"
        },
        precio: 17500
    },
    {
        id: "Bidón Strong Iron Descontaminant",
        titulo: "Bidón Strong Iron Descontaminant",
        imagen: "./Productos/5Litros/BidónStrong.jpg",
        categoria: {
            nombre: "5litros",
            id: "5litros"
        },
        precio: 11100
    },
    {
        id: "Bidón Drunk Silicone Black Edition",
        titulo: "Bidón Drunk Silicone Black Edition",
        imagen: "./Productos/5Litros/BidónBlack.jpg",
        categoria: {
            nombre: "5litros",
            id: "5litros"
        },
        precio: 46100
    },
    {
        id: "Bidón Drunk Silicone Transparente",
        titulo: "Bidón Drunk Silicone Transparente",
        imagen: "./Productos/5Litros/BidónTransparente.jpg",
        categoria: {
            nombre: "5litros",
            id: "5litros"
        },
        precio: 45500
    },
    // Kits de lavado
    {
        id: "Kit de lavado - Inicial Plus",
        titulo: "Kit de lavado - Inicial Plus",
        imagen: "./Productos/KitsDeLavado/inicial.jpg",
        categoria: {
            nombre: "KitsDeLavado",
            id: "KitsDeLavado"
        },
        precio: 8800
    },
    {
        id: "Kit de lavado - Intermedio Plus",
        titulo: "Kit de lavado - Intermedio Plus",
        imagen: "./Productos/KitsDeLavado/intermedio.jpg",
        categoria: {
            nombre: "KitsDeLavado",
            id: "KitsDeLavado"
        },
        precio: 11100
    },
    {
        id: "Kit de lavado - Avanzado Plus",
        titulo: "Kit de lavado - Avanzado Plus",
        imagen: "./Productos/KitsDeLavado/avanzado.jpg",
        categoria: {
            nombre: "KitsDeLavado",
            id: "KitsDeLavado"
        },
        precio: 14100
    },
    {
        id: "Kit de lavado - Premium Plus",
        titulo: "Kit de lavado - Premium Plus",
        imagen: "./Productos/KitsDeLavado/premium.jpg",
        categoria: {
            nombre: "KitsDeLavado",
            id: "KitsDeLavado"
        },
        precio: 17100
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}