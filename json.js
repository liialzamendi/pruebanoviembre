// var familiar = {
//     nombre: 'Martin Alzamendi',
//     edad: '30',
//     email: 'tincho@gmail.com',
//     saludar: function(){
//         document.write("Hola! soy el hermano de Li")
//     },
// }
//     familiar.edad = 31 
//     familiar.nombre= 'Me llamo Martin Alzamendi'

//     document.write("la edad de mi hermano " +familiar.edad+ ", le sumamos uno ya que mañana es el cumpleaños"+ "<br>");
//     document.write("el correo de mi hermano es: "+ familiar.email + "<br>");
// familiar.saludar ()

//FUNCIONES CONSTRUCTORAS 
// function Familiar (nombre, edad, email){
//     this.nombre = nombre
//     this.edad = edad
//     this.email = email
//     this.saludar = function(){
//         document.write ("Hola! soy: " + nombre+ "<br>")
//     }
// }

// let wanda = new Familiar('Wanda', 29,'wandix@gmail.com')
// let carlos = new Familiar('Carlos',62,'charli@gmail.com')

// wanda.saludar ()
// document.write("mi correo es: " +wanda.email + "<br>")

//CLASS + HERENCIAS
class Hermanos {
    constructor (nombre,cantidad,email) {
        this.nombre = nombre
        this.cantidad = cantidad
        this.email = email
    }
    saludar () {
        document.write (' SALUDOS ' + this.nombre)
    }
}

class Primos extends Hermanos {
 total () {
    document.write (this.cantidad + "entre hermanos y primos" + "<br>")

 }
}

class Nietos extends Hermanos {
    somos () {
        document.write (this.email+ " su correo es ese")
    }
}
let wanda = new Hermanos ('Wanda', 3, 'wandix@gmail')
let martin = new Hermanos ('Martin', 4,'tincho@gamil.com')

document.write (martin.cantidad)
martin.saludar ()