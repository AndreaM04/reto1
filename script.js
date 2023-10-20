function empanadas() {
    
var uno = document.getElementById("cuenta").value
var dos = document.getElementById("porce").value

var tres = dos * uno
tres = tres / 100
cuatro = Number(uno) + Number(tres)
var iuno = document.getElementById("tCuenta")
var idos = document.getElementById("propinas")
var itres = document.getElementById("tpagar")

iuno.innerText = (uno)
idos.innerText = tres
itres.innerText = cuatro
}


