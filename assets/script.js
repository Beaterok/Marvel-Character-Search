//  query select necessary variabels
var searchBox = document.querySelector('example').value;
var vidLink = document.querySelector('videolink');
var searchBtn = document.getElementById('#searchBtn');
// create variables


// create functions for page load

// create a funciton to retrieve API
searchBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var requestURL = "https://www.youtube.com/watch?v=S60GCTqsdI4";

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            for (var i = 0; i < data.length; i++) {
                var createColumn = document.createElement('col');
                var dataTable = document.createElement('dt');
                var link = document.createElement('a');

                link.textContent = data[i].html_url;
                link.href = data[i].html_url;

                createColumn.appendChild(dataTable);
                dataTable.appendChild(link);
                searchBox.appendChild(createColumn);
            }

            searchBtn.addEventListener('click', getAPI);

            // create a function for return search input

            // create function for button interaction
            searchBtn.addEventListener('submit', function (event) {
                event.preventDefault();
                fetch

            }

// create function for video directory 

// create a function to display tweets onto HTML

// create a function to display character bio onto browser

//