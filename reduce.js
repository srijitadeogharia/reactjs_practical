// Array of objects
let student = [
    {
        name: 'john',
        age: 12,
        gender: 'male',
        marks : 40
    },
    {
        name: 'jane',
        age: 15,
        gender: 'female',
        marks : 60
    },
    {
        name: 'julie',
        age: 20,
        gender: 'trans',
        marks : 10
    },
    {
        name: 'David',
        age: 19,
        gender: 'male',
        marks: 18
    }
];
// find out total marks of all students
let mk = student.reduce((total , item)=> total += item.marks , 0)
console.log(`Total marks of students = ${mk}`)

//print name of students
let nm = student.map(item => item.name)
console.log(nm)

// total students having marks less then 50

// marks less than 50 - filter
// extract marks from filtered data - map
// total students form mapped data - reduce 


let marks = student.filter(item => (item.marks<50))
            .map (item => item.marks)
            .reduce((total , item ) => total+= item.marks , 0)
document.write(`Total student having less than 50 marks = ${marks.length}`)
