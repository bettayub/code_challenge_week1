// Student Grade Detector
function mymarks() {
    let marks = parseInt(prompt("Enter your marks between 0 and 100 "));
    let destination = document.getElementById("grade_output");
    
    if (marks<0 || marks>100) {
        destination.innerHTML = "Out of Range Entry."
    }
    else if (marks>79) {
        destination.innerHTML = "Excellent!You scored an A."
    }

    else if (marks>=60 && marks<=79) {
        destination.innerHTML = "Good!You scored a B."
    }

    else if (marks>=49 && marks<=59) {
        destination.innerHTML = "You scored a C."
    }
    
    else if (marks>=40 && marks<=49) {
        destination.innerHTML = "You scored a D."
    }

    else if (marks<40) {
        destination.innerHTML = "You scored a E."
    }

    else {
        destination.innerHTML = "Invalid input!"
    }
}


