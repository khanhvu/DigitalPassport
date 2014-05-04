
Ext.define('DigitialPassport.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.Anim',
        'Ext.device.Camera'
    ],

    config: {
        refs:{
            //start panel
            startpanelView: 'startpanel',
            startBtn:'button#mybutton',
            //photo action sheet    
            
            photoActionSheetView: {
                autoCreate: true,
                selector: 'photoactionsheet',
                xtype: 'photoactionsheet'
            },
            takePictureBtn: 'photoactionsheet button[cls=action-sheet-btn take-btn]',
            choosePictureBtn: 'photoactionsheet button[cls=action-sheet-btn choose-btn]',
            cameraCancelBtn: 'photoactionsheet button#CancelButton',

        },

        control: {
            "button#mybutton1": {
                tap: 'onMybutton1Tap'
            },
            startBtn: {
                tap: 'onMybuttonTap'
            },
            "button#mybutton2": {
                tap: 'onMybutton2Tap'
            },
            cameraCancelBtn:
            {
                tap: 'onCancelButtonTap'
            }
        }
    },
    init: function() {
        this.callParent();

        // set default ruler popup show again or not
        if (!localStorage.showAgain) localStorage.showAgain = "true";

        // set default tutorial page
        if (!localStorage.isFirstTime) localStorage.isFirstTime = "true";

       
    },

    onMybutton1Tap: function(button, e, eOpts) {
         Ext.Viewport.animateActiveItem({xtype:'startpanel'},{type: 'slide', direction: 'right'});
       


    },

    onMybuttonTap: function() {

        //Ext.Viewport.animateActiveItem({xtype:'photoactionsheet'},{type: 'slide', direction: 'up'});
        //Ext.Viewport.animateActiveItem({xtype:'processpanel'},{type: 'slide', direction: 'left'});
         this.getPhotoActionSheetView().show();
        //this.moveActionSheetUp(this.getPhotoActionSheetView());
    },
    onCancelButtonTap:function(){
        this.getPhotoActionSheetView().hide();
    },

    onMybutton2Tap: function(button, e, eOpts) {
        Ext.Viewport.animateActiveItem({xtype:'finishpanel'},{type: 'slide', direction: 'left'});
    },
    /* HELPERS  */
    moveActionSheetUp: function(component) {
        new Ext.Anim({
            autoClear: false,
            to: {
                '-webkit-transform': "translate3d(0, 0, 0)",
            },
            duration: 250,
            easing: 'ease-out'
        }).run(component.element);
    },

    moveActionSheetDown: function(component) {
        var height = this.getCameraActionSheetView().element.getHeight();

        new Ext.Anim({
            autoClear: false,
            to: {
                '-webkit-transform': "translate3d(0, " + height + "px, 0)",
            },
            duration: 250,
            easing: 'ease-out'
        }).run(component.element, {
            after: function() {
                component.hide();
            },
            scope: this
        });
    },

});