var jari = 4;
var tinggi = 5;

var luasAlas = jari * jari * 3.14;
var kelilingAlas = 2 * jari * 3.14;
var luasSelimut = kelilingAlas * tinggi;
var luasPermukaan = 2 * luasAlas + luasSelimut;

console.log("Luas permukaan tabung adalah: " + luasPermukaan);