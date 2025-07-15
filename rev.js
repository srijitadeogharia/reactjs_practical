const a = [10, 20, 30, 40]
console.log ("Orginal string = " , a)
a.reverse()
console.log(a)

// empty an array
let b = [1,2,3,4,5]
console.log ("Orginal string = " , b)
b = []
console.log("The updated value of b is = ", b)

//another way
let c = [5,6,7,8,9,10]
console.log ("Orginal string = " , c)
c.length = 0
console.log("The updated value of c is = " , c)
console.log("The length of c is = " , c.length)


console.log ("The data type of a b c is = " , typeof(a,b,c))