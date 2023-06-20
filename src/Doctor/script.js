function searchDoctor() {
    let input = document.getElementById("search-bar").value;
    input = input.toLowerCase();
    let course = document.getElementsByClassName("mydoctor");
    let noCourse = document.getElementsByClassName("no-text");
    let count = 0;
    for (i = 0; i <= course.length; i++) {

        if (!course[i].textContent.toLowerCase().includes(input)) {
            course[i].style.display = "none";
            count += 1;
            console.log(count);
            checkIfAllNone(count, input);
        } else {
            course[i].style.display = "inline-block";
            noCourse[0].style.display = "none";
            count = 0;
            console.log("printed line");
        }
    }
}

function checkIfAllNone(count, input) {
    let noCourse = document.getElementsByClassName("no-text");
    if (count >= 11) {
        noCourse[0].style.display = "inline-block";
    } else {
        noCourse[0].style.display = "none";
        console.log(input);
    }
}