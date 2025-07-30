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
        gender: 'female'
    }
];
//find out all female student
let gen = student.filter(item => (item.gender === 'female'))
console.log(`Total females are ${gen.length}`)