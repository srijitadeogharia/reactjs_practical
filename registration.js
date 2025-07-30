// submit button 
document.getElementById("submit").addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted successfully!");
});

//accept radio button
let name = document.getElementById("first").value;
let gender = document.getElementsByName("gender");
for (let gen of gender) {
    if (gen.checked){
        console.log(gen.value)
    }
}

//checkbox accpetance 
let course = document.getElementsByName("course");
let selectedCourses = [];
for (let crs of course) {
    if (crs.checked) {
        selectedCourses.push(crs.value);
        console.log(crs.value);
    }
}