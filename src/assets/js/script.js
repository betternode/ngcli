"use strict";

(function() {
    var url = "https://liftrocket.herokuapp.com/api/v0/users/";
    var httpRequest;
    makeRequest();

    // create and send an XHR request 
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    // handle XHR response 
    function responseMethod() {
        if (httpRequest.readyState === 4) {
            console.log(httpRequest.responseText);
            if (httpRequest.status === 200) {
                console.log("hello, world!");
                console.log(" you got 200");
            } else { 
                console.log(httpRequest.status);                
            }
        }
    }
})();