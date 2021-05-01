// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
data.forEach((ufoReport) => {
    var row = tbody.append("tr")
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td")
        cell.text(value)

    })
})
button = d3.select("#filter-btn")
button.on("click", function () {
    d3.event.preventDefault()
    input = d3.select("#datetime")
    inputValue = input.property("value")
    filterByDate = tableData.filter(date => date.datetime === inputValue)
    console.log("filter", filterByDate)
    generateTable(table, filterByDate)
})
reset = d3.select("#reset-btn")
reset.on("click", function () {
    generateTable(table, tableData)
})



