sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.MainPanel", {
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
        },
        onClickHelloDialog : function(){
            var oView = this.getView();

            if(!this.byId("helloDialog")){
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.fragment.helloDialog",
                    controller: this
                }).then( (oDialog) => {
                    oView.addDependent(oDialog);
                    oDialog.open();
                })

                // Alternate implementation
                // this.oDialog = sap.ui.xmlfragment("sap.ui.demo.walkthrough.fragment.helloDialog", this);
                // oView.addDependent(this.oDialog);
                // this.oDialog.open();

            }
            else{
                this.byId("helloDialog").open();
                // this.oDialog.open();
            }
        },
        onClickCloseDialog: function() {
            this.byId("helloDialog").close();
        }
    });
    
});