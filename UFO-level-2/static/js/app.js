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
		// Filter the data
		var filteredData = tableData.filter(UFO => UFO.datetime === inputDate);
	
		// Load the new data
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
    else if(inputCity) {
		// Filter the data
		var filteredData = tableData.filter(UFO => UFO.city === inputCity);
	
		// Load the new data
		if(filteredData.length !== 0) {
			showtable(filteredData);
		}
		else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No sightings for this City");
		}
	}
    else if(inputState) {
		// Filter the data
		var filteredData = tableData.filter(UFO => UFO.city === inputState);
	
		// Load the new data
		if(filteredData.length !== 0) {
			showtable(filteredData);
		}
		else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No sightings for this State");
		}
	}
    else if(inputCountry) {
		// Filter the data
		var filteredData = tableData.filter(UFO => UFO.city === inputCountry);
	
		// Load the new data
		if(filteredData.length !== 0) {
			showtable(filteredData);
		}
		else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No sightings for this Country");
		}
	}
    else if(inputShape) {
		// Filter the data
		var filteredData = tableData.filter(UFO => UFO.city === inputShape);
	
		// Load the new data
		if(filteredData.length !== 0) {
			showtable(filteredData);
		}
		else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No sightings for that Shape");
		}
	}
    
};



// Create event handlers
button.on("click",runEnter);
form.on("submit",runEnter);