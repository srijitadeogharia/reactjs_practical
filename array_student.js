let student = []

function insertstudent(name){
    if (student.length === 10){
        console.log("Array is full")
    }
    else {
        student.push(name)
        console.log(name + "is added")
    }
}
function deletename(){
    if (student.length == 0){
        console.log("Array is empty")
    }
    else{
        let del = student.shift()
        console.log(del + " is removed ")
    }
}
function sortarray(){
    let st_sort = student.sort()
    console.log(st_sort)
}

function search(name){
    let index = student.indexOf(name)
    if (index !== -1){
        console.log(name + "is found in index " + index)
    }
    else {
        console.log("not found")
    }
}

function showStudents() {
  console.log("Current students: " + student);
}