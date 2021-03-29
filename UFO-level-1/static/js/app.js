// from data.js
// Assign the data from `data.js` to a descriptive variable
// Select the button
// Select the form
var tableData = data,
    button = d3.select("#filter-btn"),
    form = d3.select("#form");

// Get a reference to the table body
const tbody = d3.select("tbody");

// Console.log the UFO data from data.js
// console.log(data);

// Step 1: Loop Through `data` and console.log each UFO report object
data.forEach(UFO => console.log(UFO));

// Use d3 to update each cell's text with
// UFO report values (Date, City, State, Country, Shape, Duration, Comments)
data.forEach(UFO => {
  let row = tbody.append("tr");
  Object.values(UFO).forEach(value => {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});