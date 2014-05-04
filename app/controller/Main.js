
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
            startBtn:'button#StartBtn',

            //photo action sheet    
            photoActionSheetView: {
                autoCreate: true,
                selector: 'photoactionsheet',
                xtype: 'photoactionsheet'
            },
            takePictureBtn: 'photoactionsheet button#TakePicture',
            choosePictureBtn: 'photoactionsheet button#ChoosePicture',
            cameraCancelBtn: 'photoactionsheet button#CancelButton',

            //camera tut
            cameraTut: {
                autoCreate: true,
                selector: 'cameratut',
                xtype: 'cameratut'
            },
            showAgainBtn: 'cameratut button#ShowAgainButton',
            okBtn: 'cameratut button#OkButton',

            //process panel
            processpanelView: 'processpanel',

            //photo action sheet    
            processpanelView: {
                autoCreate: true,
                selector: 'processpanel',
                xtype: 'processpanel'
            },

            picturePanelChoosen : 'processpanel panel[cls=process-panel-center]',
            framePanel: 'processpanel panel[cls=process-panel-frame]',

            //processContainer: 'processpanel panel#processContainer',

             // transform view
            transformView: 'transform',
            transformContainer: 'transform panel[cls=transform-container]',
            navBarCancelBtn: 'transform button[cls=navbar-left-btn navbar-cancel-btn]',
            navBarApplyBtn: 'transform button[cls=navbar-right-btn navbar-apply-btn]',
            cropBtn1: 'transform button[cls=crop-btn crop1]',
            cropBtn2: 'transform button[cls=crop-btn crop2]',
            cropBtn3: 'transform button[cls=crop-btn crop3]',
            cropBtn4: 'transform button[cls=crop-btn crop4]',
            rotateBtn: 'transform button[cls=rotate-btn]',

        },

        control: {
            "button#mybutton1": {
                tap: 'onMybutton1Tap'
            },
            "button#mybutton2": {
                tap: 'onMybutton2Tap'
            },

            //start panel
            startBtn: {
                tap: 'onShowPhotoActionSheet'
            },
            //photo action sheet
            cameraCancelBtn:
            {
                tap: 'onCancelButtonTap'
            },
            takePictureBtn:
            {
                tap: 'onShowCapture'
            },
            choosePictureBtn:
            {
                tap: 'onChooseExisting'
            },
            //camera tut
            showAgainBtn:{
                tap: 'onShowAgain'
            },
            okBtn:{
                tap: 'onOk'
            },

            //process panel
            processpanelView:{
                show: 'onProcessPanelShow'
            },
            // transform view
            transformView: {
                show: 'onTransformViewShow'
            },

        }
    },
    init: function() {
        this.callParent();

        // set default ruler popup show again or not
        if (!localStorage.showAgain) localStorage.showAgain = "true";
        console.log(localStorage.showAgain);
        // set default tutorial page
        //if (!localStorage.isFirstTime) localStorage.isFirstTime = "true";

       
    },

    onMybutton1Tap: function(button, e, eOpts) {
         Ext.Viewport.animateActiveItem({xtype:'startpanel'},{type: 'slide', direction: 'right'});
       
    },

    onShowPhotoActionSheet: function() {
          this.getPhotoActionSheetView().show();
    
    },
    onShowCapture:function(){
         this.onCancelButtonTap();
         
         if (localStorage.showAgain === "true") {
            Ext.Viewport.animateActiveItem({xtype:'cameratut'},{type: 'slide', direction: 'up'});
       
         }
         else{
            this.onTakePicture();
         }
         
    },
    onShowAgain:function(){
         
        localStorage.showAgain = "true";
        console.log(localStorage.showAgain);
        this.onPhotoPicker('camera');
    },
    onOk:function(){
         
        localStorage.showAgain = "false";
        console.log(localStorage.showAgain);
        this.onPhotoPicker('camera');
    },

    onTakePicture: function() {


        this.onPhotoPicker('camera');
    },

    onPhotoPicker: function(source) {
        var destination = 'file';
        if (this.androidVersionGT44) destination = 'data';

        this.onCancelButtonTap();

        Ext.device.Camera.capture({
            quality: 100,
            source: source,
            destination: destination,
            encoding: 'png',

            success: this.onPickPhotoSuccess,
            failure: this.onPickPhotoFailure,
            scope: this
        });
    },

    onCancelButtonTap:function(){
        this.getPhotoActionSheetView().hide();
    },



    onMybutton2Tap: function(button, e, eOpts) {
        Ext.Viewport.animateActiveItem({xtype:'finishpanel'},{type: 'slide', direction: 'left'});
    },

     /* HELPERS  */
      imageElement: function(dataOrUrl, onComplete) {
        var imageEl = new Image();
        imageEl.src = dataOrUrl;
        imageEl.onload = Ext.bind(onComplete, this, [imageEl]);
    },
    

});