let studentnames = [];
let grades = [];

function add() {
    let studentnamesinput = document.getElementById("studname");
    let gradesinput = document.getElementById("grade");

    let newname = studentnamesinput.value;
    let newgrade = parseFloat(gradesinput.value);

    studentnames.push(newname);
    grades.push(newgrade);

    let list = document.getElementById("listofstudents");
    let newlielement = document.createElement("li");
    let fuseddata = newname + " " + newgrade; 
    let textnode = document.createTextNode(fuseddata);

    newlielement.appendChild(textnode);
    list.appendChild(newlielement);
}

function highestoperation() {
    let highest = Math.max(...grades);
    document.getElementById("gradeoutput").textContent = highest + " is the Highest!";
}

function lowestoperation() {
    let lowest = Math.min(...grades);
    document.getElementById("gradeoutput").textContent = lowest + " is the Lowest!";
}

function averageoperation() {
    let sum = grades.reduce((acc, curr) => acc + curr, 0);
    let average = sum / grades.length;
    document.getElementById("gradeoutput").textContent = "The average of the entered data is " + average;
}