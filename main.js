let productos = [
{nombre: "Lemon pie", precio: 200},
{nombre: "Pasta frola", precio: 150},
{nombre: "Tarta de frutilla",precio: 250},
{nombre: "bizcochitos",precio: 300},
{nombre: "pepas",precio: 350},
{nombre: "scons",precio: 370},
{nombre: "alfajor de chocolate blanco",precio: 400},
{nombre: "alfajor de merengue",precio: 450},
{nombre: "alfajor de chocolate con leche",precio: 420},
];

localStorage.setItem("productos", JSON.stringify(productos));

// productos.forEach((producto) => {
//     let div = document.createElement("div");
//     div.innerHTML = 
//     `
//     <h2>Nombre: ${producto.nombre}</h2>
//     <p>Precio: ${producto.precio}</p>
//     <hr />
//     `;

//     document.body.append(div);
// });
const buscar = (nombre) => {
    let productosStorage = localStorage.getItem("productos");
    let productos = JSON.parse(productosStorage);

    let buscarProducto = {
        nombre: nombre,
    };

    productos.find(buscarProducto);
};

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    let inputs = e.target.children;
    buscar(inputs[0].value);
})

