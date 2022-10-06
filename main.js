
// Esto es son fuciones
let Padre = () => {
let num = 6;
    alert(num);

    let hijo = () => {
        alert(num += 48);
    }
    return hijo
};

let result = Padre();
console.log(result);
result();
result();
result();