sap.ui.define([
    // "sap/ui/core/mvc/XMLView"
    "sap/ui/core//ComponentContainer"
], 
// function(XMLView) {
//     "use strict";

//     XMLView.create({
//         viewName: "sap.ui.demo.walkthrough.view.App"
//     }).then(function (oView){
//         oView.placeAt("content");
//     });

function (ComponentContainer) {
    "use strict";
    new ComponentContainer({
        name: "sap.ui.demo.walkthrough",
        settings : {
            id : "walkthrough"
        },
        async : true
    }).placeAt("content");

});