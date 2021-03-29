// from data.js
// Assign the data from `data.js` to a descriptive variable
var tableData = data;
const tbody = d3.select("tbody");

// Console.log the UFO data from data.js
// console.log(data);

// Use d3 to update each cell's text with
// UFO report values (Date, City, State, Country, Shape, Duration, Comments)
function showtable(tableData){
    tbody.html("");
    tableData.forEach(UFO => {
        let row = tbody.append("tr");
        Object.values(UFO).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// write to html
showtable(tableData);

// Select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create references to input
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city-input");
var inputFieldState = d3.select("#state-input");
var inputFieldCountry = d3.select("#country-input");
var inputFieldShape = d3.select("#shape-input");


// Complete the event handler function for the form
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputDate = inputFieldDate.property("value");
    var inputCity = inputFieldCity.property("value").toLowerCase();
    var inputState = inputFieldState.property("value").toLowerCase();
    var inputCountry = inputFieldCountry.property("value").toLowerCase();
    var inputShape = inputFieldShape.property("value").toLowerCase();

    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);
    
    if(inputDate){
		// 2. Filter the data
		var filteredData = tableData.filter(UFO => UFO.datetime === inputDate);
	
		// 3. Load the new data
		if(filteredData.length !== 0) {
			showtable(filteredData);
		}
		else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No sightings on this date");
		}
	}

    // let response = {
    //     filteredData
    // }
    // if(response.filteredData.length !== 0) {
    //     showtable(filteredData);
    // }
};



// Create event handlers
button.on("click",runEnter);
form.on("submit",runEnter);