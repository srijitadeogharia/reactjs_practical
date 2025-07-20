let num = []
function insert_num(number){
    if (num.length === 5){
        console.log("Can't be enterd more . It's full")
    }
    else{
        num.push(number)
        console.log(num + "is added")
    }
}

function check(number){
    let ck = num.indexOf(number)
    if (ck !== -1){
        console.log(number + "is in index no." + ck)
    }
    else{
        console.log("not found")
    }
}

function show(){
    console.log("Current status" + num)
}