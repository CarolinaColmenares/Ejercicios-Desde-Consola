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



