checkvoting = (age)=>{
    if (age<=10){
        console.log("Not eligible to vote")
    }
    else if(age>=18){
        console.log("Elibigle to vote")
    }
    else{
        console.log("Not at all eligible")
    }
}
checkvoting(18)