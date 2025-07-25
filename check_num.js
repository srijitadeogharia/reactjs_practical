let num = prompt("Please enter the number:")
if (num >= 0){
    document.getElementById("checknum").innerHTML= (`The ${num} is positive`)
}
else if(num < 0){
    document.getElementById("checknum").innerHTML= (`The ${num} is negative`)
}
else if(num == 0){
    document.getElementById("checknum").innerHTML= (`The ${num} is equal to zero`)
}
else{
    document.getElementById("checknum").innerHTML= ("Enter valid input")
}