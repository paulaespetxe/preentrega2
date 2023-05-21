class Usuarios{
  constructor(nombre,email,direccion){
    this.nombre = nombre;
    this.email = email;
    this.direccion= direccion;

  }
}
const usuario1 = new usuarios("paula","paula@hotmail.com","catamarca 124");
const usuario2 = new usuarios("agustina","agus@outlook.com","azopardo 456");
const arrayUsuarios = [];
arrayUsuarios.push(usuario1);
arrayUsuarios.push(usuario2);


let envio;

function saludo() {
  alert("Bienvenidos a Panaderia en el Camino");
  let compra = parseInt(prompt("Si desea iniciar sesion ingrese 4 sino Ingrese una opcion de producto 1)Tartas 2)Galletitas 3)Alfajores"));
  return compra;
}

function tartas() {


      let porcion = (prompt("Ingrese que porcion de tarta desea: *lemon pie *pasta frola *tarta de frutilla"));
if(porcion==="lemon pie") alert("porcion lemon pie $200");
else if(porcion==="pasta frola") alert("porcion pasta frola $150");
else if(porcion==="tarta de frutilla") alert("porcion tarta de frutillas $180");
else alert("tarta sin stock");}


function galletitas() {
 let paquete = (prompt("Ingrese que paquete de galletitas desea: *bizcochitos *pepas *scones"));
if(paquete==="bizcochitos") alert("paquete de bizcochitos $300");
else if(paquete==="pepas") alert("paquete de pepas $200");
else if(paquete==="scones") alert("paquete de scones $250");
else alert("galletitas sin stock");}

function alfajores(){
  let alfajor = (prompt("Ingrese el sabor de alfajor que desea : *chocolate blanco *chocolate con leche *merengue"));
  if (alfajor==="chocolate blanco") alert("Alfajor cb $300 c/u");
  else if(alfajor==="chocolate con leche") alert("Alfajor ccl $310 c/u");
  else if(alfajor==="merengue")alert("Alfajor merengue $400 c/u");
  else alert("Alfajor sin stock");
}
function inicioSecion(){
  envio = prompt("Si ya esta registrado ingrese su email, si no ingrese su nombre y direccion de envio");
  let usuario = arrayUsuarios.find((usuario) => usuario.email === email);
  alert(usuario);
}


let opcion = saludo();
switch (opcion) {
  case 1:
    tartas();
    break;
  case 2:
    galletitas();
    break;
  case 3:
    alfajores();
    break;
    case 4:
    inicioSecion();
    break;

}


