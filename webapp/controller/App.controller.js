sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {       // This is a contructor ( Controller )
    'use strict';
    /* 
        Controller is extended or provided with extra functionalities such as onClickHello(). .extend() is jquery method for merging 2 objects.
        Here extend() is method written in Metadata.js for adding additional controls to the app but is it a UI5 method or a jquery method?
    */
    return Controller.extend("sap.ui.demo.walkthrough.App", { 
        /*  
            Added using Componen 
            The onInit relevant actions such as loading data models and i18n models are done centrally from the root (webapp/Component.js)
            This makes it accessible to all the views as well and also reusable.

        */
        // onInit : function() {
        //     /* 
        //         To create a JSONModel, first create an jS object and then 
        //         create JSONModel object from it 
        //         setModel() in the currentView
        //     */
        //     var Odata = {
        //         "recipients" : {
        //             "name" : "Rohith"
        //         }
        //     }
        //     var oModel = new JSONModel(Odata);
        //     this.getView().setModel(oModel);
            
        //     // set i18n model on view
        //     var i18nModel = new ResourceModel({
        //         bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        //         supportLocales: [""],
        //         fallbackLocale: ""
        //     });
        //     this.getView().setModel(i18nModel, "i18n");
        // },
  
    });
});