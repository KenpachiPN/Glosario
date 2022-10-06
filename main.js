
for(let i = 1;  i <= 5; i++) {
    let nombre = prompt("Ingrese su nombre");
    let sueldo = Number(prompt(nombre + " ,ingrese su sueldo"));
    if(sueldo === 0 ){
        break;
    }
    alert("El sueldo de Santiago es de: $" +sueldo);
}





