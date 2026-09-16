var events = [];

fetch("events.json")

.then(function(response){
    return response.json();
})

.then(function(data){

    events = data;

    document.getElementById("message").innerHTML = "";

    displayEvents();

})

.catch(function(){

    document.getElementById("message").innerHTML =
        "Error loading events";

});


function displayEvents(){

    var search = document.getElementById("search").value.toLowerCase();

    var category = document.getElementById("filter").value;

    var result = events.filter(function(event){

        return event.name.toLowerCase().includes(search);

    });


    if(category != "All"){

        result = result.filter(function(event){

            return event.category == category;

        });

    }


    var output = "";

    result.forEach(function(event){

        output +=
        "<div class='card'>" +
        "<h2>" + event.name + "</h2>" +
        "<p>Category: " + event.category + "</p>" +
        "<p>Date: " + event.date + "</p>" +
        "</div>";

    });


    document.getElementById("events").innerHTML = output;

}


document.getElementById("search").oninput = displayEvents;

document.getElementById("filter").onchange = displayEvents;


function sortEvents(){

    events.sort(function(a,b){

        return a.name.localeCompare(b.name);

    });

    displayEvents();

}