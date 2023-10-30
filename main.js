// Constantes de envío y retiro
const envioCaba = 1500;
const envioAmba = 2500;
const envioInterior = 3000;
const envioExterior = 6000;
const retiroPorElLocal = 0;

// Constantes de items
const items = [
    { nombre: 'crystal glass', precio: 1000 },
    { nombre: 'strong iron', precio: 2000 },
    { nombre: 'drunk silicone', precio: 1500 },
    { nombre: 'milk shine', precio: 2500 },
    { nombre: 'deep shine', precio: 3000 },
    { nombre: 'tussi shine', precio: 5000 }
];

// Función para reiniciar el programa
function reiniciarPrograma() {
    location.reload(); // Recargar la página para reiniciar
}

// Función para mostrar opciones al usuario y validar la selección
function seleccionarOpcion(mensaje, opciones) {
    let opcion = prompt(mensaje);

    if (opcion === null || isNaN(opcion) || opcion < 1 || opcion > opciones.length) {
        alert("Opción incorrecta. Reiniciando programa.");
        reiniciarPrograma();
    }

    return parseInt(opcion);
}

// Ingresar el número del producto
let productoIdx = seleccionarOpcion(`
    Seleccione el número de su producto:

    1. crystal glass
    2. strong iron
    3. drunk silicone
    4. milk shine
    5. deep shine
    6. tussi shine
`, items);

// Ingresar el lugar de envío
let lugarIdx = seleccionarOpcion(`
    Seleccione donde es el envío:

    1. envío CABA
    2. envío AMBA
    3. envío interior
    4. envío exterior
    5. retiro por el local
`, ["CABA", "AMBA", "interior", "exterior", "local"]);

let total = 0;

// Obtener el costo del producto seleccionado
total += items[productoIdx - 1].precio;

// Sumar el costo de envío o retiro seleccionado
switch (lugarIdx) {
    case 1:
        total += envioCaba;
        break;
    case 2:
        total += envioAmba;
        break;
    case 3:
        total += envioInterior;
        break;
    case 4:
        total += envioExterior;
        break;
    case 5:
        total += retiroPorElLocal;
        break;
}

// Mostrar el total
alert(`El costo total es: $${total}`);
