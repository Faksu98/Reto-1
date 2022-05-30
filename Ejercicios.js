//problema °1

var personasComiendo = "Maria, Pedro y Susana";

var mariaManzanas = 5;

var pedroManzanas = 8;

var susanaManzanas = 9;

document.write(`
    <h3> Maria tiene ${ mariaManzanas } manzanas</3>
    <h3> Pedro tiene ${ pedroManzanas } manzanas</3>
    <h3> Susana tiene ${ susanaManzanas } manzanas</3>
    <h4> Cuantas manzanas tienen en total ${ mariaManzanas + pedroManzanas + susanaManzanas }</4>
`)

console.log("Manazanas que tiene en total: " + (mariaManzanas + pedroManzanas + susanaManzanas));

//Problema °2

var personaMagadalena = "Juan";

var juanMagdalenas = 28 ;

var amigosJuan = 12 ;

var juanComida = 1 ;

document.write(`
    <h3> juan tiene ${ juanMagdalenas } magdalenas</3>
    <h3> juan tiene ${ amigosJuan } amigos </3>
    <h3> Juan se come ${ juanComida } magdalena </3>
    <h4> quedan ${ juanMagdalenas - amigosJuan - juanComida } </4>
`)

console.log("La cantidad de magdalenas que le queda a Juan es: " + (juanMagdalenas - amigosJuan - juanComida));

// Problema °3

var personaHamburguesa = "Paco"; 

var pacoHamburguesa = 35;

var pacoRefresco = 18; 

document.write(`
    <h3> Paco gastó ${ pacoHamburguesa + pacoRefresco} pesos </3>
`)

console.log("Paco gasto: " + (pacoHamburguesa + pacoRefresco));

//problema 4°

var galletasCajas = 5;

var cajasCompradasGalletas = 4;

document.write(`
    <h3> Tenemos ${ galletasCajas * cajasCompradasGalletas } galletas </3>
`)

console.log("Galletas totales: " + (galletasCajas * cajaGalletas));

//problema 5°

var juanPuebloAToledo = 2.6;

var juanTiendaACasaTio = 0.691;

document.write(`
    <h3> distancia recorrida ${ juanPuebloAToledo + juanTiendaACasaTio } km </3>
`)

console.log("Juan recorrio: " + (juanPuebloAToledo + juanTiendaACasaTio));

//problema 6º

var dientesAjo = 4;
var barraMantequilla = 1;
var panFrances = 1;
var salKosher = 1/2;
var cucharadasPerejil = 2;
var tazaQueso = 1/4;

console.log("los ingredientes y medidas para la reseta son: dientes de ajo" + dientesAjo)
console.log("Barra de mantequilla blanda: " + barraMantequilla);
console.log("Pan Frances: " + panFrances);
console.log("Sal Kosher: " + salKosher);
console.log("Cucharadas de perejil: " + cucharadasPerejil);
console.log("Taza de queso: " + tazaQueso);

//problema 7º

var huevos = 1;
var aceiteCucharadas= 2;
var tazaLecehe = 3/4;
var azucarCucharadas = 2;
var pizcaSal = 1;
var tazaHarina = 1;
var cucharaditaPolvoHornear = 1;

console.log("Canitdad de huevos: " + huevos);
console.log("Cucharadas de aceite: " + aceiteCucharadas);
console.log("Taza de leche: " + tazaLecehe);
console.log("Cucharadas de azucar: " + azucarCucharadas);
console.log("Pizaca de sal: " + pizcaSal);
console.log("Taza de harina: " + tazaHarina);
console.log("Cuchara de palva de hornear: " + cucharaditaPolvoHornear);

//problema 8º

var tiempoPlasticoDescomponer = 200;

console.log("las bolsas de plastico puede tardar en descomponerce: " + tiempoPlasticoDescomponer);

//problema 9º

var velocidadFinal = 60;
var aceleracion = 20;

document.write(`
<h3> Juan llego a destino en ${velocidadFinal / aceleracion} hs </3>
`)

console.log("Juan llego a destino en: " + (velocidadFinal / aceleracion));