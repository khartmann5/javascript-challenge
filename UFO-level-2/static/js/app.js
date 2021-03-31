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

	// copy data to new variable	
	let tempdata = JSON.parse(JSON.stringify(tableData));

	// filter data based on input
    if(inputDate){
		// Filter the data
		tempdata = tempdata.filter(UFO => UFO.datetime === inputDate);
	}
    if(inputCity) {
		// Filter the data
		tempdata = tempdata.filter(UFO => UFO.city === inputCity);
	}
    if(inputState) {
		// Filter the data
		tempdata = tempdata.filter(UFO => UFO.state === inputState);
	}
    if(inputCountry) {
		// Filter the data
		tempdata = tempdata.filter(UFO => UFO.country === inputCountry);
	}
    if(inputShape) {
		// Filter the data
		tempdata = tempdata.filter(UFO => UFO.shape === inputShape);
	}
    
	// Load the new data
	if(tempdata.length !== 0) {
		showtable(tempdata);
	}
	else {
		// Clear out the previously loaded HTML:
		tbody.html("");

		// Tell them "No rows match"
		tbody.append("tr").append("td").text("No sightings!");
	}

};

// Create event handlers
button.on("click",runEnter);

d3.selectAll(".form-control").on("change",runEnter);

