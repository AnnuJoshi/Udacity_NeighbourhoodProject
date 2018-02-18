'use strict';

// Use vanilla JS only in case jQuery doesn't load

var mapError = function() {

    document.getElementById('map-error').style.display = 'block';

    document.getElementById('map-error').innerHTML = 'Oops!! Sorry, something went wrong. Please try again later.';

};