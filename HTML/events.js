
let allEvents = [];
let filteredEvents = [];

let currentPage = 1;
const eventsPerPage = 5;

fetch("events.json")
    .then(response => response.json())
    .then(data => {

        allEvents = data;
        filteredEvents = [...allEvents];

        document.getElementById("message").innerHTML = "";

        displayEvents();
    })
    .catch(error => {

        console.error(error);

        document.getElementById("message").innerHTML =
            "Failed to load events.";
    });


function displayEvents() {

    const eventsDiv = document.getElementById("events");

    eventsDiv.innerHTML = "";

    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;

    const pageEvents =
        filteredEvents.slice(startIndex, endIndex);

    if (pageEvents.length === 0) {

        eventsDiv.innerHTML =
            "<p>No events found.</p>";

        return;
    }

    pageEvents.forEach(event => {

        eventsDiv.innerHTML += `
            <div class="event-card">

                <h3>${event.title}</h3>

                <p><strong>Category:</strong>
                ${event.category}</p>

                <p><strong>Date:</strong>
                ${event.date}</p>

                <p><strong>Location:</strong>
                ${event.location}</p>

                <p>${event.description}</p>

                <hr>

            </div>
        `;
    });

    updatePageInfo();
}

function applyFilters() {

    const searchText =
        document.getElementById("search")
        .value
        .toLowerCase();

    const selectedCategory =
        document.getElementById("filter").value;

    filteredEvents = allEvents.filter(event => {

        const matchesSearch =
            event.title.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            event.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    currentPage = 1;

    displayEvents();
}

// Search event
document
    .getElementById("search")
    .addEventListener("keyup", applyFilters);

// Filter event
document
    .getElementById("filter")
    .addEventListener("change", applyFilters);

function sortEvents() {

    filteredEvents.sort((a, b) =>
        a.title.localeCompare(b.title)
    );

    currentPage = 1;

    displayEvents();
}
function nextPage() {

    const totalPages =
        Math.ceil(filteredEvents.length / eventsPerPage);

    if (currentPage < totalPages) {

        currentPage++;

        displayEvents();
    }
}

function previousPage() {

    if (currentPage > 1) {

        currentPage--;

        displayEvents();
    }
}

function updatePageInfo() {

    let pageInfo =
        document.getElementById("pageInfo");

    if (!pageInfo) {

        pageInfo = document.createElement("p");

        pageInfo.id = "pageInfo";

        document
            .getElementById("events")
            .after(pageInfo);
    }

    const totalPages =
        Math.ceil(filteredEvents.length / eventsPerPage);

    pageInfo.innerHTML =
        `Page ${currentPage} of ${totalPages}`;
}
