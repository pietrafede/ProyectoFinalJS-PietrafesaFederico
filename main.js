// Constantes de envío y retiro
const envioCaba = 1500;
const envioAmba = 2500;
const envioInterior = 3000;
const envioExterior = 6000;
const retiroPorElLocal = 0;

// Constantes de items
const item1 = 1000;
const item2 = 2000;
const item3 = 1500;
const item4 = 2500;
const item5 = 3000;
const item6 = 5000;

// Función para reiniciar el programa
function reiniciarPrograma() {
    location.reload(); // Recargar la página para reiniciar
}

// Ingresar el número del producto
let producto = prompt(`
    Seleccione el número de su producto:

    1. crystal glass
    2. strong iron
    3. drunk silicone
    4. milk shine
    5. deep shine
    6. tussi shine
`);

// Validar la opción de producto
if (producto === null || isNaN(producto) || producto < 1 || producto > 6) {
    alert("Opción de producto incorrecta. Reiniciando programa.");
    reiniciarPrograma();
}

// Ingresar el lugar de envío
let lugar = prompt(`
    Seleccione donde es el envío:

    1. envío CABA
    2. envío AMBA
    3. envío interior
    4. envío exterior
    5. retiro por el local
`);

// Validar la opción de lugar
if (lugar === null || isNaN(lugar) || lugar < 1 || lugar > 5) {
    alert("Opción de envío/retiro incorrecta. Reiniciando programa.");
    reiniciarPrograma();
}

let total = 0;

// Sumar el costo del producto seleccionado
switch (producto) {
    case "1":
        total += item1;
        break;
    
    case "2":
        total += item2;
        break;
    
    case "3":
        total += item3;
        break;
        
    case "4":
        total += item4;
        break;
    
    case "5":
        total += item5;
        break;
    
    case "6":
        total += item6;
        break;
}

// Sumar el costo de envío o retiro seleccionado
switch (lugar) {
    case "1":
        total += envioCaba;
        break;
    
    case "2":
        total += envioAmba;
        break;
    
    case "3":
        total += envioInterior;
        break;
    case "4":
        total += envioExterior;
        break;
    
    case "5":
        total += retiroPorElLocal;
        break;
}

// Mostrar el total
alert(`El costo total es: $${total}`);