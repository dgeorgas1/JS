// Function to display TV shows on the page
function displayTVShows(tvShows) {
    const tvShowsContainer = document.getElementById('tv-shows');

    tvShows.forEach(show => {
        // Create a div for each show
        const showDiv = document.createElement('div');
        showDiv.classList.add('tv-show');
        
        // Create elements for show details
        const showName = document.createElement('h3');
        showName.textContent = show.name;
        const mainCharacter = document.createElement('p');
        mainCharacter.textContent = `Main Character: ${show.main_character}`;
        const network = document.createElement('p');
        network.textContent = `Network: ${show.network}`;
        const startDate = document.createElement('p');
        startDate.textContent = `Start Date: ${show.start_date}`;

        // Append elements to the show div
        showDiv.appendChild(showName);
        showDiv.appendChild(mainCharacter);
        showDiv.appendChild(network);
        showDiv.appendChild(startDate);

        // Append show div to the container
        tvShowsContainer.appendChild(showDiv);
    });

    // Function to check if the #jquery-section is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // jQuery code to animate the div when it enters the viewport
    $(window).on('scroll', function() {
        if (isInViewport($('#jquery-section')[0])) {
            // Trigger the animation when the section is in the viewport
            $('#animated-div').animate(
                {
                    left: '50%', // Move the div to the center horizontally
                    marginLeft: '-175px' // Adjust by half of its width (350px / 2 = 175px)
                },
                'slow' // Use a slow animation speed
            );
        }
    });
}

// Fetch the JSON data from the external data.json file
fetch('records.json')
    .then(response => response.json())
    .then(tvShows => displayTVShows(tvShows))
    .catch(error => console.error('Error loading data:', error));

// jQuery code for AJAX to load content from a text file
$(document).ready(function() {
    // When the button is clicked
    $('#load-content-btn').on('click', function() { // Corrected ID here
        // Perform an AJAX request to load the text file
        $.ajax({
            url: 'content.txt', // The path to your text file
            type: 'GET',
            success: function(data) {
                // On success, display the content in the #content-container div
                $('#content-container').html(data); // Updated the target container ID
            },
            error: function() {
                // If there's an error, display an error message
                $('#content-container').html('<p>Error loading content.</p>');
            }
        });
    });
});