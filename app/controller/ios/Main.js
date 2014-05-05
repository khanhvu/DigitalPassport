

Ext.define('DigitialPassport.controller.ios.Main', {
    extend: 'DigitialPassport.controller.Main',

    config: {
        refs: {},
        control: {}
    },

    init: function() {
        this.callParent();

        // device ios version for brightness and contrast
        var version = device.version,
            major = parseInt(version.split(".")[0], 10);
        
        this.iOS7 = (major >= 7);
    },
    onChooseExisting: function() {
        // for iPad
        if (device.model.indexOf('iPad') >= 0) {
            var successHandler = Ext.bind(this.onPickPhotoSuccess, this);
            window.imagePicker.getPictures(successHandler, null, {maximumImagesCount: 1});
            this.onCameraCancel();
        } else {
            this.onPhotoPicker('library');
        }
    },

    onPickPhotoSuccess: function(imgUrl) {
        if (imgUrl !== "Canceled") {
            //this.getHomeView().getLayout().setAnimation('slide');

            // save the img from picker
            this.imgUrl = imgUrl;
             Ext.Viewport.animateActiveItem({xtype:'processpanel'},{type: 'slide', direction: 'left'});
             
             //Ext.Viewport.animateActiveItem({xtype:'transform'},{type: 'slide', direction: 'left'});
           
        }
    },
    onTransformViewShow: function() {

        if (!this.transformImage) {
            
            this.imageElement(this.imgUrl, function(imageEl) {

                this.imgUrl = null;
                
                // add image to container
                var container = this.getTransformContainer(),
                    sWidth = container.element.getWidth(),
                    sHeight = container.element.getHeight();
                container.setHtml(imageEl);
                console.log(sWidth);
                console.log(sHeight);
                console.log(imageEl);




                
                // keep track of transform image
                this.transformImage = $(imageEl);
                
                // resize image to fit the screen
                if (this.transformImage.width() > sWidth ||
                    this.transformImage.height() > sHeight) {
                    var iWidth = this.transformImage.width(),
                        iHeight = this.transformImage.height(),
                        iRatio = iWidth/iHeight,
                        sRatio = sWidth/sHeight;

                    if (sRatio > iRatio) {
                        this.transformImage.width(iWidth*sHeight/iHeight);
                        this.transformImage.height(sHeight);
                    } else {
                        this.transformImage.width(sWidth);
                        this.transformImage.height(iHeight*sWidth/iWidth);
                    }
                }

                // center image
                this.transformImage.css({
                    x: (sWidth - this.transformImage.width())/2,
                    y: (sHeight - this.transformImage.height())/2
                });
            });

            // handle for image zooming + moving
            this.getTransformContainer().element.on({
                scope: this,
                // touchstart: this.onPinchOrMoveStart,
                // touchmove: this.onPinchOrMove,
                // touchend: this.onPinchOrMoveEnd
            });

            // show crop frame as default
            
        }

        
    },

    onProcessPanelShow: function(){

        if (!this.transformImage) {
            
            this.imageElement(this.imgUrl, function(imageEl) {


                this.imgUrl = null;
                
                // add image to container
                var container = this.getPicturePanelChoosen(),
                    sWidth = container.element.getWidth(),
                    sHeight = container.element.getHeight();
                container.setHtml(imageEl);
                console.log(imageEl);


                //keep track of transform image
                this.transformImage = $(imageEl);

                console.log(this.transformImage.width());
                console.log(this.transformImage.height());
                
                //resize image to fit the screen
                if (this.transformImage.width() > sWidth ||
                    this.transformImage.height() > sHeight) {
                    var iWidth = this.transformImage.width(),
                        iHeight = this.transformImage.height(),
                        iRatio = iWidth/iHeight,
                        sRatio = sWidth/sHeight;



                    if (sRatio > iRatio) {
                        this.transformImage.width(iWidth*sHeight/iHeight);
                        this.transformImage.height(sHeight);
                    } else {
                        this.transformImage.width(sWidth);
                        this.transformImage.height(iHeight*sWidth/iWidth);
                    }
                }

               // center image
                this.transformImage.css({
                    x: (sWidth - this.transformImage.width())/2,
                    y: (sHeight - this.transformImage.height())/2
                });
            });

            // handle for image zooming + moving
            this.getPicturePanelOuter().element.on({
                scope: this,
                touchstart: this.onPinchOrMoveStart,
                touchmove: this.onPinchOrMove,
                touchend: this.onPinchOrMoveEnd
            });

            // show crop frame as default
            //this.onCrop1();
        }
    },

    

});