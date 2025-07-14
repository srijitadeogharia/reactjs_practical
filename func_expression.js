 checkvoting(39)// hoisting dosent works with function expression 
 // it will give u error 
 let myfunc = function checkvoting(age){
    if (age>18){
        console.log("eligible to vote")
    }else{
        console.log("not eligible to vote")
    }
}
