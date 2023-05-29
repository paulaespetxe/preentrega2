let productos = [
{id :1 ,nombre: "Lemon pie", precio: 200},
{id :2, nombre: "Pasta frola", precio: 150},
{id: 3, nombre: "Tarta de frutilla",precio: 250},
{id:4 , nombre: "bizcochitos",precio: 300},
{id: 5,nombre: "pepas",precio: 350},
{id:6,nombre: "scons",precio: 370},
{id:7,nombre: "alfajor de chocolate blanco",precio: 400},
{id: 8,nombre: "alfajor de merengue",precio: 450},
{id: 9, nombre: "alfajor de chocolate con leche",precio: 420},
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
    e.preventDefault();
    let inputs = e.target.children;
    buscar(inputs[0].value);
})

