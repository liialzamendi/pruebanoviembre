// var i = 0
// function cargarNumero(n) {
//     var contenedor = document.getElementById('contenedor')
//     var li = document.createElement('li')
//     var txt = document.createTextNode(n + " desde la función")
//     li.appendChild(txt)
//     contenedor.appendChild(li)
// }
// for
// for (var i=0; i<100; i++){
//     cargarNumero(i+1)
// }

// while
// while (i<7) {
//     i= Math.random ()*8
//     cargarNumero(i)
// }

//do while
//  do{
//     cargarNumero (i+1)
//     i++
//  }while (i<5)

//switch con dias
// var dia = 9

// switch (dia) {
//     case 1:
//         document.write('Lunes')
//         break
//     case 2:
//         document.write('Martes')
//         break
//     case 3:
//         document.write('Miercoles')
//         break
//     case 4:
//         document.write('Jueves')
//         break
//     case 5:
//         document.write('Viernes')
//         break
//     case 6:
//         document.write('Sabado')
//         break
//     case 7:
//         document.write('Domingo')
//         break
//     default:
//         document.write ('NO ES UN DIA DE SEMANA')
// }

// switch von numeros 
// var dia = 'Miercoles'

// switch (dia) {
//     case 'Lunes':
//         document.write(1)
//         break
//     case 'Martes':
//         document.write(2)
//         break
//     case 'Miercoles':
//         document.write(3)
//         break
//     case 'Jueves':
//         document.write(4)
//         break
//     case 'Viernes':
//         document.write(5)
//         break
//     case 'Sabado':
//         document.write(6)
//         break
//     case 'Domingo':
//         document.write(7)
//         break
//     default:
//         document.write ('NO ES UN DIA DE SEMANA')
// }

//ARRAYS

// var dias = new Array ('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')
// document.write (dias [3])

 //FILTRANDO ARRAYS
// var dia = 3
// var dias = new Array ('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo')

// var diasLaborables = dias.filter (function (item) {
//     return item != 'Sabado' && item != 'Domingo'
// })
// for ( var i =0; i< diasLaborables.length; i++) {
//     document.write (diasLaborables [i]+ "<br>")
// }

// ARRAYS FIND-FINDINDEX
var numeros = new Array (3,5,7,8,9,4,2)

var loTiene = numeros.find (function (item){
    return item ===5
})

var loTiene2 = numeros.findIndex (function (item){
    return item ===5
})

// document.write(loTiene + " lo tiene.");
// document.write("su posición es:" + loTiene2);
//ARRAYS CON VALOR UNICO
var valorUnico = numeros.join (":");
document.write (valorUnico);