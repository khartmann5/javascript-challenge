// from data.js
// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Console.log the UFO data from data.js
// console.log(data);

// Use d3 to update each cell's text with
// UFO report values (Date, City, State, Country, Shape, Duration, Comments)
function showtable(tableData){
    const tbody = d3.select("tbody");
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

// Complete the event handler function for the form
var button = d3.select("#filter-btn");
button.on("click", function(){
    d3.event.preventDefault();
    var inputElement = d3.select("datetime"),
        inputValue = inputElement.property("value");
    var filterDate = tableData.filter(tableData => tableData.datetime === inputValue);

    tbody.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        showtable(filterDate)
    }
        else {tbody.append("tr").append("td").text("No sightings on this date.")}
});
