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

// Select the button
// Select the form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Complete the event handler function for the form
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // show filtered information
    if(inputValue){
		// Filter the data
		var filterDate = tableData.filter(UFO => UFO.datetime === inputValue);
	
		// Load the new data
		if(filterDate.length !== 0) {
			showtable(filterDate);
		}
		else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No sightings on this date");
		}
	}
};

// Create event handlers
button.on("click",runEnter);
form.on("submit",runEnter);