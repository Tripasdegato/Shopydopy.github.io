const bt = document.getElementById("bt");
let num1 = document.getElementById("input1").value;
let num2 = document.getElementById("input2").value;
let resultado = document.getElementById("result"); 

function Suma() {
    inputnum1 = document.getElementById("input1").value;  
    inputnum2 = document.getElementById("input2").value;    
    var sum = parseInt(inputnum1) + parseInt( inputnum2);
    resultado.textContent = " La suma es " + sum;
}
bt.addEventListener("click", Suma);

