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

// function menor(){
//     const a = prompt("Ingresa un número entero: ")
//     const b = prompt("Ingresa el número entero a comparar: ")
//     const min = Math.min(a,b)
//     return alert(`el menor número es ${min}`)
// }

// menor();

//4.	Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

// function mayor(){
//     const a = prompt("Ingresa el primer número entero: ")
//     const b = prompt("Ingresa el segundo número entero: ")
//     const c = prompt("Ingresa el tercer número entero: ")
//     const max = Math.max(a,b,c)
//     return alert(`El mayor número es ${max}`)
// }

// mayor();

//5.	Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

// function semana(){
//     const dia = prompt("Ingresa un día de la semana: ")
//     if(dia == "lunes" || dia == "Lunes"){
//         return alert("bienvenido al lunes de tortura.");
//     }
//     if(dia == "martes" || dia == "Martes"){
//         return alert("bienvenido al martes, otro lunes pero más ligero.");
//     }
//     if(dia == "miércoles" || dia == "Miércoles"){
//         return alert("bienvenido al miércoles, ya falta poco soldado.");
//     }
//     if(dia == "jueves" || dia == "Jueves"){
//         return alert("bienvenido al jueves, ya se siente a viernes.");
//     }
//     if(dia == "viernes" || dia == "Viernes"){
//         return alert("bienvenido al viernes, hoy nos perdemos gente.");
//     }
//     if(dia == "sábado" || dia == "Sábado"){
//         return alert("bienvenido al sábado, hoy se sale.");
//     }
//     if(dia == "domingo" || dia == "Domingo"){
//         return alert("bienvenido al domingo,no te emociones, mañana es lunes.")
//     }
//     if(dia != "lunes" || "martes" || "miércoles" || "jueves" || "viernes" || "sábado" || "domingo"){
//         return alert("Ingresa un día de la semana.");
//     }
// }
// semana();

function semana() {
  const day = prompt("Ingrese un día de la semana: ").toLowerCase();
  switch (day) {
    case "lunes":
      alert("Bienvenido al lunes.");
      break;
    case "martes":
      alert("Bienvenido al martes.");
      break;
    case "miércoles":
      alert("Bienvenido al miércoles.");
      break;
    case "jueves":
      alert("Bienvenido al jueves.");
      break;
    case "viernes":
      alert("Bienvenido al viernes.");
      break;
    case "sábado":
      alert("Bienvenido al sábado.");
      break;
    case "domingo":
      alert("Bienvenido al domingo.");
      break;
    default:
      alert("Ingrese un día válido, presione F5.");
  }
}

semana();

