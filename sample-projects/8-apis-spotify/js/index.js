(function() {
    "use strict";
    var searchButton = document.getElementById('search');
    var resultsContainer = document.getElementById('results-cont');
    // get accessToken from spotify: https://developer.spotify.com/documentation/general/guides/authorization-guide/
    var accessToken;

    // Event listeners.
    searchButton.addEventListener('click', searchSpotify);

    // Function that searches Spotify using the texxt inputted by user.
    function searchSpotify() {
        var searchTerm = document.getElementById('searchBox').value;
        var req = new XMLHttpRequest();
        req.onload = function() {
            if (req.status >= 200 && req.status < 300) {
                displayAlbums(JSON.parse(req.responseText));
            }
        }
        req.open('GET', 'https://api.spotify.com/v1/search?q=name:' + searchTerm + '&type=album', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        req.send();
    }

    // Function to call to display albums that come from Spotify search.
    function displayAlbums(albums) {
        resultsContainer.innerHTML = ''
        var itemsArray = albums.albums.items
        for (var index in itemsArray) {
            var newElem = '<div class="thumbnail"><p>' + itemsArray[index].name + '</p><img src="' + itemsArray[index].images[1].url + '"></div>';
            resultsContainer.innerHTML += newElem;
        }
    }
})();
