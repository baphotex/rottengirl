
// Function to show age input
function showAgeQuestion() {
    document.getElementById("ageQuestion").classList.remove("hidden");
}

// Function to check user's age and show weight question
function checkAge() {
    var age = document.getElementById("ageInput").value;

    if (age >= 18) {
        showWeightQuestion();
    } else {
        alert("Sorry, these results aren't suggested for minors.");
    }
}

// Function to show weight question
function showWeightQuestion() {
    document.getElementById("ageQuestion").classList.add("hidden");
    document.getElementById("weightQuestion").classList.remove("hidden");
}

// Function to toggle between kilograms and pounds
function toggleUnit() {
    var unitSelect = document.getElementById("unitSelect");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (selectedUnit === "kg") {
        document.getElementById("unitLabel").innerText = "Kilograms";
    } else {
        document.getElementById("unitLabel").innerText = "Pounds";
    }
}

// Function to calculate and display the table
function calculate() {
    var unitSelect = document.getElementById("unitSelect");
    var weight = parseFloat(document.getElementById("weightInput").value);
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    // Convert weight to kilograms if the unit is pounds
    if (selectedUnit === "pounds") {
        weight *= 0.453592;
    }

    // Hide weight question and show result table
    document.getElementById("weightQuestion").classList.add("hidden");
    document.getElementById("resultTable").classList.remove("hidden");

    // Clear the previous result table
    document.getElementById("resultTable").innerHTML = "";

    // Create a table element
    var table = document.createElement("table");
    table.classList.add("result-table");

    // Create the first row with headers
    var row1 = table.insertRow();
    row1.insertCell(0).innerHTML = "<b>Day</b>";
    for (var day = 1; day <= 7; day++) {
        row1.insertCell(day).innerHTML = "<b>Day " + day + "</b>";
    }

    // Create the second row with calculated values
    var row2 = table.insertRow();
    row2.insertCell(0).innerHTML = "<b>Calories</b>";
    for (var day = 1; day <= 7; day++) {
        let total = Math.floor(day * 5 * weight);
        row2.insertCell(day).innerHTML = total;
    }

    // Append the table to the resultTable div
    document.getElementById("resultTable").appendChild(table);
}

// Call the function to start the process
showAgeQuestion();

