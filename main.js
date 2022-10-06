
let suma = 0;
let num = 2;
for(let i = 1;  i <= 5; i++) {
    let nom = prompt("Ingrese su nombre");
    let sueldo = Number(prompt(nom + " ,ingrese su sueldo"));
    if(sueldo === 0 ){
        break;
    }
    alert("El sueldo de Santiago es de: $" +sueldo);

}





