let a = 10;
let b = 20;

console.log(`before swap a= ${a}`);
console.log(`before swap b= ${b}`);

a = a + b; //10=10+20 now a is be 30
b = a - b; //20=30-20 now b is be 10
a = a - b; //30=30-10 so a is be now 20

console.log(`after swap a= ${a}`);
console.log(`after swap b= ${b}`);