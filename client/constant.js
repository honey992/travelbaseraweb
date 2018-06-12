"use strict";

app.constant("constant", (function() {
    return {


         BASE_URL: window.location.protocol + '//' + window.location.hostname + ':3001/',       //This is base url for HTTP POST, GET, PUT, DELETE Methods
       // BASE_URL: 'https://admin-travelbasera.herokuapp.com/',   
        SECOND_URL: window.location.protocol + '//' + window.location.hostname + '/' ,      //This is second url for HTTP POST, GET, PUT, DELETE Methods

        
        BANNAR_URL: "v1/api/banners",
        STATESBYCOUNTRY : "v1/api/statesByCountry"
    }
})());