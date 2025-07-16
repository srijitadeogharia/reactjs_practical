let secret = 100
let guess = 100
if(guess>secret){
    console.log("Guess is high")
}
else if(guess<secret){
    console.log("Guess is low")
}
else if(guess == secret){
    console.log("Yess u are correct , congratulations")
}
else{
    console.log("Try again")
}