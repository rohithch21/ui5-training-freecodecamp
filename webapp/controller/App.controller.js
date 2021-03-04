sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {       // This is a contructor ( Controller )
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough", {
        onClickHello : function(oEvent){
            alert("You just clicked on a UI5 element!!");
        }
    });
});