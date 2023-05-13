//1.	Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no es divisible entre 2”.

// function divisible(){
//   const x = prompt("Ingrese un número entero: ");
//   if(x % 2 === 0) {
//     return alert(`${x} es un número divisible entre 2`);
//   } else {
//     return alert(`${x} no es un número divisible entre 2`);
//   }
// }

// divisible();

//2.	Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

// function divisible(){
//   const x = prompt("Ingrese un número entero: ");
//   if(x % 2 === 0) {
//     return alert(`${x} es un número par`);
//   } else {
//     return alert(`${x} no es un número par`);
//   }
// }

// divisible();

//3.	Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

function menor(){
    const a = prompt("Ingresa un número entero: ")
    const b = prompt("Ingresa el número entero a comparar: ")
    const min = Math.min(a,b)
    return alert(`el menor número es ${min}`)
}

menor();






