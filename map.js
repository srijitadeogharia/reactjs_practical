// Array of objects
let student = [
    {
        name: 'john',
        age: 12,
        gender: 'male'
    },
    {
        name: 'jane',
        age: 15,
        gender: 'female'
    },
    {
        name: 'julie',
        age: 20,
        gender: 'trans'
    }
];
//get all the age from student in a sigle array
 let ages = student.map(function(item){
   console.log(item.age)
});
// alternatively
/**
 * let ages = student.map(item => item.ages)
 * console.log(ages)
 */
