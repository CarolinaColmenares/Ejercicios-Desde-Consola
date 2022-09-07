//Ejercicio 1
// Ejercicio que invierta el orden de los caracteres
// En consola:
// let myText = "Hello world"
// textReverse = ""
// for (letter of myText)
// {
//     textReverse = letter + textReverse
// }


//Ejercicio 2
// Ejercicio que dado un string, cree una función que 
// invierta el orden de los caracteres. 
// Debe utilizar una desetructuración en el proceso
// En consola:
// myText
// 'Hello world'
// [...myText]
// (11) ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
// let myTextArrayChar = [...myText]
// undefined
// myTextArrayChar
// (11) ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
// myTextArrayChar.reverse()
// (11) ['d', 'l', 'r', 'o', 'w', ' ', 'o', 'l', 'l', 'e', 'H']
// myTextArrayChar.reverse().join("")
// 'dlrow olleH'

// function reverseDes(myText){
//     return [...myText].reverse().join("");
// }
// undefined
// reverseDes("Hola me llamo Carol")
// 'loraC omall em aloH'


//Ejercicio 3
// Ejercicio que dado un string, 
// invierta el orden de sus caracteres recursivamente 
// En consola:
// function reverse(text){
//     if(text=== ""){
//         return ""
//     }
//     let subText = text.substring(1)
//     return reverse(subText) + text.charAt(0)
// }
// undefined
// reverse("Hola Mundo")
// 'odnuM aloH'


//Ejercicio 4
// Construya una función isPalindrome la cual nos indique
// si es un palindrome o no
// En consola:

// text= "Yo dono rosas oro no doy"
// 'Yo dono rosas oro no doy'

// function reverse(text){
//     return [...text].reverse().join("");
// }
// function obtainerReverse(text){ 
//     return reverse(text).split(" ").join("")
// }
// undefined
// obtainerReverse(text)
// 'yodonorosasoronodoY'

// Otra:

// myText ="Yo dono rosas oro no doy"
// 'Yo dono rosas oro no doy'
// function clearMyText(myText){
//     return myText.toLowerCase().split(" ").join("")
// }
// undefined
// clearMyText(myText)
// 'yodonorosasoronodoy'
// myClearText = clearMyText(myText)
// 'yodonorosasoronodoy'
// myClearText === reverse(myClearText)
// true



//Ejercicio 5
// Combinar 2 arrays ordenados, obteniendo un array ordenado 
// En consola:
// arr1= [1,2,8,10,21]
// (5) [1, 2, 8, 10, 21]
// arr2= [3,5,7,8,9,20]
// (6) [3, 5, 7, 8, 9, 20]
// function merge(arr1, arr2) {
//     let combinedArray = [];
//     while (arr1.length && arr2.length) {
//         let firstElement
//         if (arr1[0] < arr2[0]){
//             firstElement = arr1.shift();
//         } else{
//            firstElement = arr2.shift();
//         }
//         combinedArray.push(firstElement)
// }
//     combinedArray= combinedArray.concat(arr1).concat(arr2);
//     return combinedArray;
// }

// undefined
// merge(arr1,arr2)
// (11) [1, 2, 3, 5, 7, 8, 8, 9, 10, 20, 21]


//Ejercicio 6
// Invertir las palabras de una frase,
// pero cada frase debe mantenerse en su lugar 
// En consola:
// myText = "Yo dono rosas oro no doy"
// 'Yo dono rosas oro no doy'
// myText.split(" ")
// (6) ['Yo', 'dono', 'rosas', 'oro', 'no', 'doy']
// let myTextArr =myText.split(" ")
// undefined
// function reverse(myText){
//     return [...myText].reverse().join("");
// }
// undefined
// myTextArr.map(word => reverse(word))
// (6) ['oY', 'onod', 'sasor', 'oro', 'on', 'yod']


//Ejercicio 7
// Otro Ejercicio de: Invertir las palabras de una frase,
// pero cada frase debe mantenerse en su lugar 
// En consola:
// function reverseTextLast(text){
//     myTextArr = text.split(" ");
//     return myTextArr.map(word => reverse (word))
// }
// undefined
// reverseTextLast("Hola como estás yo bien")
// (5) ['aloH', 'omoc', 'sátse', 'oy', 'neib']



// Ejercicio 8
// Desafío; tienes un array de números, usando la función map debes retornar 
// todos los números del array multiplicados por dos.

// array=[2, 4, 5, 6];
// (4) [2, 4, 5, 6]
// function solution(array) {
//  	return array.map(item => item * 2);
// } 
// undefined
// solution(array)
// (4) [4, 8, 10, 12]



// Ejercicio 9:
// Desafío: tienes un array de objetos que representan datos de 
// personas con los siguientes atributos:

// name
// lastName
// age
// El reto aquí es retornar un array de strings con los nombres, 
// la solución debería tener un input y output como los siguientes:

// array=[
//     {
//         name: 'Nicolas',
//         lastName: 'Molina',
//         age: 28
//     },
//     {
//         name: 'Valentina',
//         lastName: 'Molina',
//         age: 19
//     },
//     ];
// (2) [{…}, {…}]

// function solution(array){
//  	return array.map(item => item.name);
// }; 
// undefined

// solution(array)
// (2) ['Nicolas', 'Valentina']


// Ejercicio 10:

// Calcula y agrega una nueva propiedad en un Array:
// Tienes un array de productos con los siguientes atributos:

// name
// price
// stock
// Debes agregar y calcular una nueva propiedad llamada "taxes", 
// los impuestos deben ser del 19% con base al precio base.

// Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 
// el resultado de los "taxes" será $190, debes tener en cuenta que como resultado 
// se debe dejar un valor entero sin decimales.

// array=[
//     {
//       name: "Product 1",
//       price: 1000,
//       stock: 10
//     },
//     {
//       name: "Product 2",
//       price: 2000,
//       stock: 20
//     },
//    ];
//   (2) [{…}, {…}]
//   function solution(array){
//        return array.map(item => ({
//            ...item,
//            taxes: Math.trunc(item.price * .19)
//        }))
//   }; 
//   undefined
//   solution(array)
//   (2) [{…}, {…}]0: name: "Product 1"price: 1000stock: 10taxes: 190[[Prototype]]: Object1: name: "Product 2"price: 2000stock: 20taxes: 380[[Prototype]]: Objectlength: 2[[Prototype]]: Array(0)


// Ejercicio 11:
// Retorna solo palabras de 4 letras y más.

// retornar un array solo con las que cumplan 
// con la condición de tener 4 o más letras.
// En consola:

// array=['amor', 'sol', 'piedra', 'día'];
// (4) ['amor', 'sol', 'piedra', 'día']

// function solution(array){
//  	return array.filter(word => word.length >= 4);
// }; 
// undefined

// solution(array)
// (2) ['amor', 'piedra']


// Ejercicio 12:
// Filtra las compras que cumplan con las condiciones.

// Array de ordenes de compra con los siguientes atributos:
// customerName: string
// total: number
// delivered: boolean
// Filtrar todas las órdenes de compra que cumplan con la condición de tener 
// un total mayor o igual a 100 y además que el estado delivered sea "true".
// En consola:

// array=[
//     {
//       customerName: "Nicolas",
//       total: 100,
//       delivered: true,
//     },
//     {
//       customerName: "Zulema",
//       total: 120,
//       delivered: false,
//     },
// ];
// (2) [{…}, {…}]

// function solution(array){
//  	return array
//  	.filter((item) => item?.total >= 100 && item?.delivered)
// }; 
// undefined

// solution(array)
// [{…}]

// {customerName: 'Nicolas', total: 100, delivered: true}
