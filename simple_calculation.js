function add (num1 , num2){
    return num1 + num2
}

function sub (num1 , num2){
    return num1 - num2
}

function mult (num1 , num2){
    return num1 * num2
}

function divide (num1 , num2){
    if (num2 == 0){
        console.log("Undefined")
    }
    return num1/num2
}

let operation = "/"

let num1 = 10
let num2 = 20

switch(operation){
    case "+":
        result = add(num1 , num2)
    break
    case "-":
        result = sub(num1 , num2)
    break
    case "*":
        result = mult(num1 , num2)
    break
    case "/":
        result = divide(num1 , num2)
    break;
    default:
    result = "Invalid operation"; 
}

console.log("The result of this operation is = " +result)