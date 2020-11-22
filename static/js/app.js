// from data.js


// YOUR CODE HERE!

//Populate the table
var tableData = data;
//select table body
var tbody = d3.select("tbody");

//for each object in data
tableData.forEach(function(x){
    //create row
    var trow = tbody.append('tr')
    //extract values
    Object.entries(x).forEach(function([key, value]){
        
        //add value to column
        trow.append('td').text(value)

    })
}) 
//select the buttons
var button = d3.select("#filter-btn");
var clear = d3.select("#clear-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
clear.on("click", runClear);
form.on("submit",runEnter);

//define function for button/submit form
function runEnter() {
  
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    //first, clear out table
    var obj = document.getElementById('body');
    var rows = obj.rows;
    console.log(rows.length);
    while (rows.length != 0){
      obj.deleteRow(0)
    }

    //select each input element
    var inputElement = d3.select("#datetime");
    var inputElement1 = d3.select('#country');
    var inputElement2 = d3.select('#state');
    var inputElement3 = d3.select('#city');
    var inputElement4 = d3.select('#inputGroupSelect01');
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValue1 = inputElement1.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");
    

    // log out the inputvalues to see if they were read in correctly
    console.log(inputValue)
    console.log(inputValue1)
    console.log(inputValue2)
    console.log(inputValue3)
    console.log(inputValue4)
    
    

    //filter by the date, country, state, city, shape
    //one at a time, if entry is not nothing -> filter
    //if entry is empty, skip over (else{}), except for the first one, we need to define Sigthings variable
    if(inputValue != ""){
        var Sightings = tableData.filter(y => y.datetime === inputValue)
    }
    else {Sightings = tableData}
    
    if(inputValue1 != ""){
        Sightings = Sightings.filter(y => y.country === inputValue1)
    }
    else{}
    
    if(inputValue2 != ""){
        Sightings = Sightings.filter(y => y.state === inputValue2)
    }
    else{}
    
    if(inputValue3 != ""){
        Sightings = Sightings.filter(y => y.city === inputValue3)
    }
    else{}
    
    if(inputValue4 === "other"){
        Sightings = Sightings.filter(y => y.shape !== "triangle" && y.shape !== "sphere" && y.shape !== "circle" && y.shape !== "light" && y.shape !== "unknown")
    }
    else if (inputValue4 != ""){
        Sightings = Sightings.filter(y => y.shape === inputValue4)
    }
    else {}


    // append the filtered results to the table
    var numofsights = Sightings.length;
    //if no results were found, display a message
    if(numofsights === 0){
        var trow = tbody.append("tr")
        trow.append("td").text("Sorry No Sightings In our Records That Meet Your Search Criteria")
    } else{

    Sightings.forEach(function(x){
        
        var trow = tbody.append('tr')
        
        Object.entries(x).forEach(function([key, value]){
            
            console.log(key, value)
            trow.append('td').text(value)

        })
    })
    }

}  

//optional 'clear filter' button:
function runClear(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //clear out the entries:
    d3.select("#datetime").property("value", "");
    d3.select("#country").property("value", "");
    d3.select("#state").property("value", "");
    d3.select("#city").property("value", "");
    d3.select("#shape").property("value", "");
    console.log("Clicked Clear")
}