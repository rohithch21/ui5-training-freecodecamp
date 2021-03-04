sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast,JSONModel,ResourceModel) {       // This is a contructor ( Controller )
    'use strict';
    /* 
        Controller is extended or provided with extra functionalities such as onClickHello(). .extend() is jquery method for merging 2 objects.
        Here extend() is method written in Metadata.js for ?
    */
    return Controller.extend("sap.ui.demo.walkthrough.App", { 
        onInit : function() {
            /* 
                To create a JSONModel, first create an jS object and then 
                create JSONModel object from it 
                setModel() in the currentView
            */
            var Odata = {
                "recipients" : {
                    "name" : "Rohith"
                }
            }
            var oModel = new JSONModel(Odata);
            this.getView().setModel(oModel);
            
            // set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportLocales: [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n");
        },
        onClickHello : function(oEvent){
            // alert("You just clicked on a UI5 element!!");

            // MessageToast.show("Toast Message from Controller!");
            
            /* Read message from i18n
               First get the i18n model and use getText() to retireive the text from 18n file of the corresponding text
               To get the i18n model, you must bundle the i18n model first 
               This bundle is accessible in the View linked to this controller
            */
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient =  this.getView().getModel().getProperty("/recipients/name");
            var sMsg = oBundle.getText("FirstButtonToastMsg",[sRecipient]);
            MessageToast.show(sMsg);


        }


    });
});