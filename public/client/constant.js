"use strict";

app.constant("constant", (function() {
    return {


         //BASE_URL: window.location.protocol + '//' + window.location.hostname+':3001/',       //This is base url for HTTP POST, GET, PUT, DELETE Methods
       BASE_URL: 'https://admin-travelbasera.herokuapp.com/',   
        SECOND_URL: window.location.protocol + '//' + window.location.hostname + '/' ,      //This is second url for HTTP POST, GET, PUT, DELETE Methods

        
        BANNAR_URL: "v1/api/banners",
        STATESBYCOUNTRY : "v1/api/statesByCountry",
        CITYBySTATES:"v1/api/cityByStates",
        PACKAGESBYCITY: "v1/api/packages",
        PACKAGE_DETAILS : 'v1/api/package-details',
        POPULAR_PACKAGES : 'v1/api/isPopularPackages',
        TESTIMONIALS : 'v1/api/testimonials',
        CATEGORIES : 'v1/api/categories',
        CONTACT_DETAILS: 'v1/api/contacts',
        BY_CATEGORY : 'v1/api/packageByCategory',
        ABOUT_US : 'api/aboutus',
        SEARCH_PACKAGE : 'v1/api/search',
        FAQ_URL : 'v1/api/faq',
        TERMCONDITION_URL : 'v1/api/termAndConditions',
        PACKAGE_CATEGORIES_URL : 'v1/api/packagesBycategories'
    }
})());