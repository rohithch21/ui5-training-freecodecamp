sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function(UIComponent,JSONModel, ResourceModel){
    "use strict";
    // this runs only once while starting the app
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },
        /*
        note : while setting data model centrally, do not try binding a controller to a particular view like - 
        this.getView.setModel(model). Directly expose the data model - this.setModel(model).
        */
        init: function() {
            // call the init function of the parent UI compoent
            UIComponent.prototype.init.apply(this,arguments);
            //set data models
            var Odata = {
                "recipients" : {
                    "name" : "Rohith"
                }
            }
            var oModel = new JSONModel(Odata);
            this.setModel(oModel);
        }
    })
});