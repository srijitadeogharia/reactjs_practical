// clasify_marks.js
// This script classifies student marks into grades using a switch statement
        let marks = prompt("Enter the marks obtained by the student😪: ");
        switch(true){
            case (marks >90 && marks<=100 ):
                document.write("Congratulations🎉you got an A+")
            break;
            case (marks >80 && marks <= 90):
                document.write("Very good✌ you got and A")
            break;
            case (marks > 70 && marks <= 80):
                document.write("Nice👍 you get an B+")
            break;
            case (marks > 60 && marks <=70):
                document.write("😕You can improve")
            break;
            case (marks >50 && marks <=60):
                document.write("😑 Not good improve")
            break;
            case (marks >40 && marks <= 50):
                document.write("😥Not expexted")
            break;
            case (marks > 30 ):
                document.write("☹ You are fail")
            break;

            default:
                document.write("Invalid input🙄😑")
        }
